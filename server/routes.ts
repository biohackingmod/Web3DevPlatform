import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertBlogPostSchema, insertApiUsageSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { WebSocketServer, WebSocket } from "ws";
import { setupAuth } from "./auth";
import crypto from "crypto";

// Auth middleware for API endpoints
const requireAuth = (req: any, res: any, next: any) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Authentication required" });
  }
  next();
};

// API key middleware for programmatic access
const validateApiKey = async (req: any, res: any, next: any) => {
  const apiKey = req.headers["x-api-key"] || req.query.api_key;
  
  if (!apiKey) {
    return next(); // No API key provided, continue to next middleware
  }
  
  try {
    // Find user by API key
    const user = await storage.getUserByApiKey(apiKey as string);
    
    if (!user) {
      return res.status(401).json({ message: "Invalid API key" });
    }
    
    // Set user for this request
    req.user = user;
    next();
  } catch (error) {
    console.error("API key validation error:", error);
    res.status(500).json({ message: "Server error during authentication" });
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication
  setupAuth(app);
  
  // Apply API key validation to all routes
  app.use(validateApiKey);
  
  // API Routes - All prefixed with /api
  
  // User Routes
  app.post("/api/register", async (req, res) => {
    // This is now handled by setupAuth
    res.status(404).json({ message: "Use /api/register instead" });
  });

  app.get("/api/users/:id", requireAuth, async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
      
      // Only allow users to view their own data unless they're an admin
      if (userId !== req.user?.id && req.user?.role !== "admin") {
        return res.status(403).json({ message: "Forbidden" });
      }
      
      const user = await storage.getUser(userId);
      
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      
      // Don't return the password in the response
      const { password, ...userWithoutPassword } = user;
      
      res.json(userWithoutPassword);
    } catch (error) {
      res.status(500).json({ message: "Failed to get user" });
    }
  });

  // Generate new API key
  app.post("/api/user/apikey", requireAuth, async (req, res) => {
    try {
      const newApiKey = generateApiKey();
      
      // In a real implementation, you would update the user's API key in the database
      // For now, we'll just return the new key
      
      res.json({ apiKey: newApiKey });
    } catch (error) {
      res.status(500).json({ message: "Failed to generate API key" });
    }
  });

  // Blog Routes
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to get blog posts" });
    }
  });

  app.get("/api/blog/:id", async (req, res) => {
    try {
      const postId = parseInt(req.params.id);
      const post = await storage.getBlogPost(postId);
      
      if (!post) {
        return res.status(404).json({ message: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to get blog post" });
    }
  });

  app.post("/api/blog", requireAuth, async (req, res) => {
    try {
      const postData = insertBlogPostSchema.parse(req.body);
      const post = await storage.createBlogPost(postData);
      res.json(post);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: fromZodError(error).message
        });
      } else {
        res.status(500).json({ message: "Failed to create blog post" });
      }
    }
  });

  // API Usage Routes
  app.post("/api/usage", async (req, res) => {
    try {
      const usageData = insertApiUsageSchema.parse(req.body);
      const usage = await storage.recordApiUsage(usageData);
      
      // Record successful API call for analytics
      if (req.user) {
        await storage.recordApiUsage({
          userId: req.user.id,
          endpoint: req.path,
          requestCount: 1
        });
      }
      
      res.json(usage);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: fromZodError(error).message
        });
      } else {
        res.status(500).json({ message: "Failed to record API usage" });
      }
    }
  });

  app.get("/api/usage", requireAuth, async (req, res) => {
    try {
      if (!req.user) {
        return res.status(401).json({ message: "Authentication required" });
      }
      const usage = await storage.getUserApiUsage(req.user.id);
      res.json(usage);
    } catch (error) {
      res.status(500).json({ message: "Failed to get API usage" });
    }
  });

  // Web3 API endpoints
  
  // Blockchain data endpoints
  app.get("/api/chains", (req, res) => {
    const chains = [
      { id: "ethereum", name: "Ethereum", icon: "ethereum", status: "active" },
      { id: "polygon", name: "Polygon", icon: "polygon", status: "active" },
      { id: "solana", name: "Solana", icon: "solana", status: "active" },
      { id: "arbitrum", name: "Arbitrum", icon: "arbitrum", status: "active" },
      { id: "optimism", name: "Optimism", icon: "optimism", status: "active" },
      { id: "avalanche", name: "Avalanche", icon: "avalanche", status: "active" },
    ];
    res.json(chains);
  });

  // Gas price estimation endpoint
  app.get("/api/gas", (req, res) => {
    const chain = req.query.chain || "ethereum";
    
    // Mock gas data for demo purposes
    const gasData = {
      chain,
      timestamp: new Date().toISOString(),
      prices: {
        slow: { price: "35", estimatedSeconds: 120 },
        standard: { price: "50", estimatedSeconds: 60 },
        fast: { price: "75", estimatedSeconds: 30 },
        rapid: { price: "100", estimatedSeconds: 15 }
      }
    };
    
    res.json(gasData);
  });
  
  // Smart contract endpoints
  app.get("/api/contracts", requireAuth, (req, res) => {
    if (!req.user) {
      return res.status(401).json({ message: "Authentication required" });
    }
    // Mock contract data for demo purposes
    const contracts = [
      { 
        id: "1", 
        name: "ERC721 Collection", 
        address: "0x1234567890123456789012345678901234567890", 
        chain: "ethereum",
        created: new Date().toISOString(),
        owner: req.user.id
      }
    ];
    
    res.json(contracts);
  });
  
  // NFT API endpoints
  app.get("/api/nfts/:address", (req, res) => {
    const { address } = req.params;
    const chain = req.query.chain || "ethereum";
    
    // Mock NFT data for demo purposes
    const nfts = [
      { 
        id: "1", 
        name: "Example NFT #1", 
        image: "https://example.com/nft1.jpg",
        tokenId: "1",
        collection: "Example Collection",
        owner: address
      }
    ];
    
    res.json(nfts);
  });
  
  // AI Code Assistant endpoint
  app.post("/api/ai/code", requireAuth, async (req, res) => {
    const { prompt, language } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ message: "Prompt is required" });
    }
    
    try {
      // We'll implement the actual Gemini API integration later
      // For now, return a mock response
      res.json({ 
        code: "// Generated code will appear here\nfunction example() {\n  console.log('Hello, Web3!');\n}",
        explanation: "This is a simple example function that logs a greeting message."
      });
    } catch (error) {
      res.status(500).json({ message: "Failed to generate code" });
    }
  });

  // Create HTTP server
  const httpServer = createServer(app);
  
  // WebSocket for real-time blockchain updates
  const wss = new WebSocketServer({ server: httpServer, path: '/ws' });
  
  // Track connected clients and their subscriptions
  const clients = new Map<WebSocket, { userId?: number, subscriptions: string[] }>();
  
  wss.on('connection', (ws) => {
    console.log('WebSocket client connected');
    clients.set(ws, { subscriptions: [] });
    
    ws.on('message', (messageBuffer) => {
      try {
        const message = JSON.parse(messageBuffer.toString());
        console.log(`Received WebSocket message: ${JSON.stringify(message)}`);
        
        switch (message.type) {
          case 'subscribe':
            const clientData = clients.get(ws);
            if (clientData && !clientData.subscriptions.includes(message.channel)) {
              clientData.subscriptions.push(message.channel);
              
              // Confirm subscription
              ws.send(JSON.stringify({
                type: 'subscribed',
                channel: message.channel,
                status: 'success'
              }));
              
              // Send initial data
              sendInitialData(ws, message.channel);
            }
            break;
            
          case 'unsubscribe':
            const clientInfo = clients.get(ws);
            if (clientInfo) {
              clientInfo.subscriptions = clientInfo.subscriptions
                .filter(channel => channel !== message.channel);
              
              ws.send(JSON.stringify({
                type: 'unsubscribed',
                channel: message.channel,
                status: 'success'
              }));
            }
            break;
            
          case 'auth':
            // In a real implementation, we would validate the token/API key
            // and associate this connection with a user ID for personalized data
            ws.send(JSON.stringify({
              type: 'auth',
              status: 'success'
            }));
            break;
            
          default:
            ws.send(JSON.stringify({
              type: 'error',
              message: 'Unknown message type'
            }));
        }
      } catch (error) {
        console.error('Error processing WebSocket message:', error);
        ws.send(JSON.stringify({
          type: 'error',
          message: 'Invalid message format'
        }));
      }
    });
    
    ws.on('close', () => {
      console.log('WebSocket client disconnected');
      clients.delete(ws);
    });
  });
  
  // Simulate blockchain events every 10 seconds for demo purposes
  setInterval(() => {
    broadcastData(wss, 'blocks', {
      type: 'new_block',
      chain: 'ethereum',
      blockNumber: Math.floor(Math.random() * 1000000) + 15000000,
      timestamp: new Date().toISOString(),
      transactions: Math.floor(Math.random() * 300) + 50
    });
  }, 10000);
  
  return httpServer;
}

function generateApiKey(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const keyLength = 32;
  
  let result = '';
  const charactersLength = characters.length;
  
  for (let i = 0; i < keyLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  
  return `bk_${result}`;
}

// Helper to send initial data when client subscribes to a channel
function sendInitialData(ws: WebSocket, channel: string) {
  if (channel === 'blocks') {
    ws.send(JSON.stringify({
      type: 'data',
      channel: 'blocks',
      data: {
        chain: 'ethereum',
        blockNumber: 15000000,
        timestamp: new Date().toISOString(),
        transactions: 150
      }
    }));
  } else if (channel === 'transactions') {
    ws.send(JSON.stringify({
      type: 'data',
      channel: 'transactions',
      data: {
        txHash: '0x' + crypto.randomBytes(32).toString('hex'),
        from: '0x' + crypto.randomBytes(20).toString('hex'),
        to: '0x' + crypto.randomBytes(20).toString('hex'),
        value: '0.1 ETH',
        timestamp: new Date().toISOString()
      }
    }));
  }
}

// Broadcast to all clients subscribed to a specific channel
function broadcastData(wss: WebSocketServer, channel: string, data: any) {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      const clientData = (client as any).clientData;
      
      // If client has subscription data and is subscribed to this channel
      if (clientData && clientData.subscriptions && clientData.subscriptions.includes(channel)) {
        client.send(JSON.stringify({
          type: 'data',
          channel,
          data
        }));
      }
    }
  });
}
