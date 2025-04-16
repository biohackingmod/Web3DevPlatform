import { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Link, Redirect } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Copy, BarChart3, Layers, Code, Terminal, KeyRound, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample data for API usage stats
const API_USAGE = [
  { id: 1, endpoint: "/api/chains", method: "GET", count: 124, date: "2023-04-10" },
  { id: 2, endpoint: "/api/gas", method: "GET", count: 87, date: "2023-04-10" },
  { id: 3, endpoint: "/api/nfts/:address", method: "GET", count: 56, date: "2023-04-09" },
  { id: 4, endpoint: "/api/contracts", method: "GET", count: 32, date: "2023-04-08" },
  { id: 5, endpoint: "/api/user/apikey", method: "POST", count: 1, date: "2023-04-07" },
];

// Sample quick start templates
const TEMPLATES = [
  {
    id: "nft-viewer",
    title: "NFT Portfolio Viewer",
    description: "Display NFTs owned by an address with their metadata and images.",
    language: "javascript",
    level: "beginner",
  },
  {
    id: "gas-tracker",
    title: "Gas Price Tracker",
    description: "Real-time gas price monitoring with alerts for optimal transaction timing.",
    language: "javascript",
    level: "beginner",
  },
  {
    id: "wallet-connect",
    title: "Wallet Connect Integration",
    description: "Connect with popular Web3 wallets like MetaMask, Coinbase Wallet, etc.",
    language: "javascript",
    level: "intermediate",
  },
  {
    id: "defi-dashboard",
    title: "DeFi Dashboard",
    description: "Track your DeFi positions, yields, and portfolio performance.",
    language: "typescript",
    level: "advanced",
  }
];

// Sample user projects
const USER_PROJECTS = [
  {
    id: 1,
    name: "My NFT Marketplace",
    description: "A marketplace for buying and selling NFTs",
    chain: "ethereum",
    lastUpdated: "2023-04-05T14:23:11Z",
    apiCalls: 1243,
  },
  {
    id: 2,
    name: "DeFi Portfolio Tracker",
    description: "Track DeFi investments across multiple chains",
    chain: "multichain",
    lastUpdated: "2023-04-01T09:45:32Z",
    apiCalls: 873,
  }
];

// Sample recent transactions
const RECENT_TRANSACTIONS = [
  {
    id: "tx1",
    hash: "0x1a2b3c4d5e6f...",
    type: "Transfer",
    amount: "0.1 ETH",
    from: "0xabcd...",
    to: "0x1234...",
    timestamp: "2023-04-10T15:32:11Z",
    status: "success"
  },
  {
    id: "tx2",
    hash: "0x7e8f9a0b1c2d...",
    type: "Swap",
    amount: "50 USDC → 0.025 ETH",
    from: "0xabcd...",
    to: "0x5678...",
    timestamp: "2023-04-10T14:19:05Z",
    status: "success"
  },
  {
    id: "tx3",
    hash: "0xd3e4f5a6b7c8...",
    type: "Contract Interaction",
    amount: "N/A",
    from: "0xabcd...",
    to: "0x9a8b7c...",
    timestamp: "2023-04-09T22:51:47Z",
    status: "success"
  },
  {
    id: "tx4",
    hash: "0x9a8b7c6d5e4f...",
    type: "NFT Mint",
    amount: "1 NFT",
    from: "0x0000...",
    to: "0xabcd...",
    timestamp: "2023-04-08T11:05:32Z",
    status: "success"
  }
];

export default function DashboardPage() {
  const { user, isLoading, logoutMutation } = useAuth();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  // If user is not logged in, redirect to auth page
  if (!isLoading && !user) {
    return <Redirect to="/auth" />;
  }

  // Handle copying API key to clipboard
  const copyApiKey = () => {
    if (!user?.apiKey) return;
    
    navigator.clipboard.writeText(user.apiKey);
    setCopied(true);
    
    toast({
      title: "API Key Copied!",
      description: "Your API key has been copied to the clipboard",
    });
    
    setTimeout(() => setCopied(false), 3000);
  };

  // Handle generating a new API key
  const generateNewApiKey = async () => {
    // In a real implementation, this would call an API to generate a new key
    toast({
      title: "API Key Generated",
      description: "Your new API key has been created successfully",
    });
  };

  // Handle logging out
  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto py-8">
          {/* Welcome section */}
          <div className="flex flex-col md:flex-row justify-between items-start mb-8">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
                Welcome back{user ? `, ${user.username}` : ""}
              </h1>
              <p className="text-lg text-muted-foreground">
                Your blockchain development dashboard
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline">
                <Link href="/playground">
                  API Playground <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild>
                <Link href="/documentation">
                  Documentation <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* User profile card */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Your Profile</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="" />
                    <AvatarFallback>{user?.username?.charAt(0).toUpperCase() || "U"}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-lg font-medium">{user?.username || "User"}</p>
                    <p className="text-sm text-muted-foreground">{user?.email || "user@example.com"}</p>
                    <div className="mt-1">
                      <Badge variant={user?.role === "admin" ? "default" : "secondary"}>
                        {user?.role || "user"}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium block mb-1">Your API Key</label>
                    <div className="flex items-center">
                      <div className="bg-muted rounded-l-md px-3 py-2 flex-1 overflow-hidden font-mono text-sm whitespace-nowrap overflow-ellipsis">
                        {user?.apiKey || "bk_***********************"}
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="rounded-l-none"
                        onClick={copyApiKey}
                      >
                        {copied ? "Copied!" : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <Button variant="secondary" size="sm" onClick={generateNewApiKey}>
                      <KeyRound className="mr-2 h-4 w-4" />
                      Generate New API Key
                    </Button>
                    <Button variant="ghost" size="sm" onClick={handleLogout}>
                      Sign Out
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* API usage stats card */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>API Usage</CardTitle>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">Total Requests</p>
                      <p className="text-3xl font-bold">2,387</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-muted-foreground" />
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Most Used Endpoints</h4>
                    <ScrollArea className="h-[140px]">
                      <ul className="space-y-2">
                        {API_USAGE.map(item => (
                          <li key={item.id} className="text-sm">
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <Badge variant="outline" className="mr-2">
                                  {item.method}
                                </Badge>
                                <span className="font-mono">{item.endpoint}</span>
                              </div>
                              <span className="font-medium">{item.count}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </ScrollArea>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm" asChild className="w-full">
                  <Link href="/analytics">View Full Analytics</Link>
                </Button>
              </CardFooter>
            </Card>
            
            {/* Quick links card */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Quick Links</CardTitle>
                <CardDescription>Common resources and tools</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="outline" className="justify-start" asChild>
                    <Link href="/playground">
                      <Code className="mr-2 h-4 w-4" />
                      API Playground
                    </Link>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link href="/documentation">
                      <Layers className="mr-2 h-4 w-4" />
                      Documentation
                    </Link>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link href="/analytics">
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Analytics
                    </Link>
                  </Button>
                  <Button variant="outline" className="justify-start" asChild>
                    <Link href="/settings">
                      <KeyRound className="mr-2 h-4 w-4" />
                      API Keys
                    </Link>
                  </Button>
                </div>
                
                <Separator className="my-4" />
                
                <h4 className="text-sm font-medium mb-3">Sample Projects</h4>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="https://github.com/example/nft-viewer" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      NFT Gallery Starter Kit
                    </a>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <a href="https://github.com/example/defi-dashboard" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      DeFi Dashboard Template
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main content tabs */}
          <Tabs defaultValue="quick-start" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="quick-start">Quick Start</TabsTrigger>
              <TabsTrigger value="projects">Your Projects</TabsTrigger>
              <TabsTrigger value="transactions">Recent Transactions</TabsTrigger>
            </TabsList>
            
            {/* Quick Start tab */}
            <TabsContent value="quick-start">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Getting Started</CardTitle>
                    <CardDescription>
                      Follow these steps to start building with our platform
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex">
                        <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center mr-3 shrink-0">
                          <span className="font-medium">1</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Get your API key</h3>
                          <p className="text-sm text-muted-foreground">
                            Your API key is available in your profile card. Keep it secure.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center mr-3 shrink-0">
                          <span className="font-medium">2</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Install our SDK</h3>
                          <p className="text-sm text-muted-foreground">
                            Install our SDK using npm or yarn:
                          </p>
                          <div className="bg-muted p-2 rounded-md my-2 font-mono text-sm">
                            npm install @blockchainkit/sdk
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex">
                        <div className="bg-muted rounded-full h-8 w-8 flex items-center justify-center mr-3 shrink-0">
                          <span className="font-medium">3</span>
                        </div>
                        <div>
                          <h3 className="font-medium">Try the API Playground</h3>
                          <p className="text-sm text-muted-foreground">
                            Test our APIs interactively before implementing them in your code.
                          </p>
                          <Button className="mt-2" asChild>
                            <Link href="/playground">
                              Open API Playground
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Code Example</CardTitle>
                    <CardDescription>
                      Here's a simple example to get started
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-3 rounded-md font-mono text-sm overflow-x-auto">
                      <pre className="whitespace-pre">
{`// Initialize the BlockchainKit SDK
import { BlockchainKit } from '@blockchainkit/sdk';

// Create a client with your API key
const client = new BlockchainKit({
  apiKey: '${user?.apiKey || "YOUR_API_KEY"}',
});

// Get current gas prices for Ethereum
async function getGasPrices() {
  const gasPrices = await client.ethereum.getGasPrices();
  console.log('Current gas prices:', gasPrices);
  return gasPrices;
}

// Get NFTs owned by an address
async function getNFTs(address) {
  const nfts = await client.nft.getByOwner({
    address,
    chain: 'ethereum',
  });
  console.log(\`Found \${nfts.length} NFTs\`);
  return nfts;
}

// Call the functions
getGasPrices();
getNFTs('0x1234567890123456789012345678901234567890');`}
                      </pre>
                    </div>
                    
                    <Button variant="outline" className="mt-4 w-full" onClick={() => {
                      const code = document.querySelector('pre')?.innerText;
                      if (code) {
                        navigator.clipboard.writeText(code);
                        toast({
                          title: "Code Copied!",
                          description: "Example code has been copied to clipboard",
                        });
                      }
                    }}>
                      Copy Code <Copy className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
                
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Templates</CardTitle>
                      <CardDescription>
                        Start quickly with these template projects
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {TEMPLATES.map(template => (
                          <Card key={template.id} className="border border-muted">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">{template.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="pb-2">
                              <p className="text-sm text-muted-foreground">{template.description}</p>
                            </CardContent>
                            <CardFooter className="flex justify-between pt-0">
                              <div className="flex space-x-2">
                                <Badge variant="outline">{template.language}</Badge>
                                <Badge variant="secondary">{template.level}</Badge>
                              </div>
                              <Button variant="ghost" size="sm" className="text-primary">
                                Use Template
                              </Button>
                            </CardFooter>
                          </Card>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Projects tab */}
            <TabsContent value="projects">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {USER_PROJECTS.length > 0 ? (
                  USER_PROJECTS.map(project => (
                    <Card key={project.id}>
                      <CardHeader>
                        <CardTitle>{project.name}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Chain:</span>
                            <Badge variant="outline">{project.chain}</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Last updated:</span>
                            <span className="text-sm">
                              {new Date(project.lastUpdated).toLocaleDateString()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">API calls:</span>
                            <span className="text-sm font-medium">{project.apiCalls.toLocaleString()}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" asChild>
                          <a href="#" rel="noopener noreferrer">View Details</a>
                        </Button>
                        <Button asChild>
                          <a href="#" rel="noopener noreferrer">Open Project</a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))
                ) : (
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>No Projects Yet</CardTitle>
                      <CardDescription>
                        You haven't created any projects yet. Get started by creating your first project.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="mt-2" asChild>
                        <a href="#">Create New Project</a>
                      </Button>
                    </CardContent>
                  </Card>
                )}
                
                <Card className={cn(USER_PROJECTS.length > 0 ? "md:col-span-2" : "hidden")}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle>Create a New Project</CardTitle>
                      <Button>New Project</Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Start a new blockchain project using our templates and tools.
                      We provide everything you need to get started quickly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            {/* Transactions tab */}
            <TabsContent value="transactions">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Transactions</CardTitle>
                  <CardDescription>
                    Your recent blockchain transactions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {RECENT_TRANSACTIONS.length > 0 ? (
                    <div className="space-y-4">
                      {RECENT_TRANSACTIONS.map(tx => (
                        <div key={tx.id} className="border rounded-lg p-4">
                          <div className="flex flex-col sm:flex-row justify-between mb-2">
                            <div className="flex items-center">
                              <Badge
                                variant={tx.status === "success" ? "default" : "destructive"}
                                className="mr-2"
                              >
                                {tx.status}
                              </Badge>
                              <span className="font-medium">{tx.type}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {new Date(tx.timestamp).toLocaleString()}
                            </span>
                          </div>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
                            <div>
                              <p className="text-sm text-muted-foreground">Hash:</p>
                              <div className="flex items-center">
                                <code className="text-sm font-mono truncate">
                                  {tx.hash}
                                </code>
                                <Button variant="ghost" size="sm" className="ml-1">
                                  <Copy className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                            
                            <div>
                              <p className="text-sm text-muted-foreground">Amount:</p>
                              <p className="font-medium">{tx.amount}</p>
                            </div>
                            
                            <div>
                              <p className="text-sm text-muted-foreground">From:</p>
                              <code className="text-sm font-mono">{tx.from}</code>
                            </div>
                            
                            <div>
                              <p className="text-sm text-muted-foreground">To:</p>
                              <code className="text-sm font-mono">{tx.to}</code>
                            </div>
                          </div>
                          
                          <div className="flex justify-end mt-3">
                            <Button variant="ghost" size="sm" asChild>
                              <a href="#" rel="noopener noreferrer">
                                View on Explorer <ExternalLink className="ml-2 h-3 w-3" />
                              </a>
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-muted-foreground">No recent transactions found</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="#">View All Transactions</a>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
}