import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertUserSchema, insertBlogPostSchema, insertApiUsageSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes - All prefixed with /api
  
  // User Routes
  app.post("/api/users/register", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      const user = await storage.createUser({
        ...userData,
        apiKey: generateApiKey()
      });
      
      // Don't return the password in the response
      const { password, ...userWithoutPassword } = user;
      
      res.json(userWithoutPassword);
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          message: "Validation error", 
          errors: fromZodError(error).message
        });
      } else {
        res.status(500).json({ message: "Failed to create user" });
      }
    }
  });

  app.get("/api/users/:id", async (req, res) => {
    try {
      const userId = parseInt(req.params.id);
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

  app.post("/api/blog", async (req, res) => {
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

  app.get("/api/usage/:userId", async (req, res) => {
    try {
      const userId = parseInt(req.params.userId);
      const usage = await storage.getUserApiUsage(userId);
      res.json(usage);
    } catch (error) {
      res.status(500).json({ message: "Failed to get API usage" });
    }
  });

  const httpServer = createServer(app);
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
