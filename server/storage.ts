import { 
  users, type User, type InsertUser,
  blogPosts, type BlogPost, type InsertBlogPost,
  apiUsage, type ApiUsage, type InsertApiUsage
} from "@shared/schema";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Blog operations
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
  
  // API Usage operations
  recordApiUsage(usage: InsertApiUsage): Promise<ApiUsage>;
  getUserApiUsage(userId: number): Promise<ApiUsage[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private blogPosts: Map<number, BlogPost>;
  private apiUsage: Map<number, ApiUsage>;
  private currentUserId: number;
  private currentBlogPostId: number;
  private currentApiUsageId: number;

  constructor() {
    this.users = new Map();
    this.blogPosts = new Map();
    this.apiUsage = new Map();
    this.currentUserId = 1;
    this.currentBlogPostId = 1;
    this.currentApiUsageId = 1;
    
    // Add some initial blog posts
    this.seedBlogPosts();
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }
  
  async getUserByEmail(email: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.email === email,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const now = new Date();
    const user: User = { ...insertUser, id, createdAt: now };
    this.users.set(id, user);
    return user;
  }
  
  // Blog operations
  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .filter(post => post.isPublished)
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  }
  
  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }
  
  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = this.currentBlogPostId++;
    const now = new Date();
    const post: BlogPost = { ...insertPost, id, publishedAt: now };
    this.blogPosts.set(id, post);
    return post;
  }
  
  // API Usage operations
  async recordApiUsage(insertUsage: InsertApiUsage): Promise<ApiUsage> {
    const id = this.currentApiUsageId++;
    const now = new Date();
    const usage: ApiUsage = { ...insertUsage, id, date: now };
    this.apiUsage.set(id, usage);
    return usage;
  }
  
  async getUserApiUsage(userId: number): Promise<ApiUsage[]> {
    return Array.from(this.apiUsage.values())
      .filter(usage => usage.userId === userId)
      .sort((a, b) => b.date.getTime() - a.date.getTime());
  }
  
  // Seed some initial blog posts for the UI
  private seedBlogPosts() {
    const posts = [
      {
        title: "Building a High-Performance NFT Marketplace on Ethereum",
        excerpt: "Learn how to build a high-performance NFT marketplace on Ethereum using BlockchainKit's APIs and infrastructure.",
        content: "This is a detailed guide about building NFT marketplaces...",
        authorId: 1,
        category: "Tutorial",
        isPublished: true,
        publishedAt: new Date(2023, 3, 15) // April 15, 2023
      },
      {
        title: "Understanding Gas Optimization for Smart Contracts",
        excerpt: "Gas optimization is critical for cost-effective smart contracts. This guide covers techniques for reducing gas costs in your Solidity code.",
        content: "Gas optimization is one of the most important aspects of Solidity development...",
        authorId: 2,
        category: "Guide",
        isPublished: true,
        publishedAt: new Date(2023, 2, 28) // March 28, 2023
      },
      {
        title: "The Future of Cross-Chain Interoperability",
        excerpt: "Cross-chain interoperability is essential for the growth of the blockchain ecosystem. We explore current solutions and future developments.",
        content: "As blockchain technology matures, the need for interoperability between different chains becomes increasingly important...",
        authorId: 3,
        category: "Research",
        isPublished: true,
        publishedAt: new Date(2023, 2, 10) // March 10, 2023
      },
      {
        title: "Implementing WebSocket Connections for Real-time Blockchain Updates",
        excerpt: "Learn how to use WebSockets with BlockchainKit to receive real-time updates from blockchain networks.",
        content: "WebSockets provide a powerful way to receive real-time updates from blockchain networks...",
        authorId: 4,
        category: "Tutorial",
        isPublished: true,
        publishedAt: new Date(2023, 1, 22) // February 22, 2023
      },
      {
        title: "Scaling Your DApp: Best Practices for Web3 Applications",
        excerpt: "As your decentralized application grows, you'll face scaling challenges. This guide covers best practices for scaling your Web3 applications.",
        content: "Scaling decentralized applications presents unique challenges compared to traditional web applications...",
        authorId: 5,
        category: "Guide",
        isPublished: true,
        publishedAt: new Date(2023, 1, 15) // February 15, 2023
      },
      {
        title: "Securing Your API Keys in Web3 Applications",
        excerpt: "Security is paramount in Web3 development. Learn how to securely manage and store your API keys in your blockchain applications.",
        content: "Properly securing your API keys is critical to protecting your applications and user data...",
        authorId: 6,
        category: "Security",
        isPublished: true,
        publishedAt: new Date(2023, 0, 30) // January 30, 2023
      }
    ];
    
    posts.forEach(post => {
      const id = this.currentBlogPostId++;
      this.blogPosts.set(id, { ...post, id });
    });
    
    // Create some user accounts for the authors
    for (let i = 1; i <= 6; i++) {
      this.users.set(i, {
        id: i,
        username: `user${i}`,
        password: "password123", // In a real app, this would be hashed
        email: `user${i}@example.com`,
        apiKey: `bk_test_${i}`,
        createdAt: new Date(2023, 0, 1) // January 1, 2023
      });
    }
  }
}

export const storage = new MemStorage();
