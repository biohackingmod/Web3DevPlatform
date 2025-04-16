import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileCode, BookOpen, FileText, Server, Database } from "lucide-react";

export default function Documentation() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Documentation
        </h1>
        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
          Comprehensive guides, API references, and examples to help you build with BlockchainKit
        </p>
      </div>

      <Tabs defaultValue="getting-started" className="w-full">
        <div className="border-b mb-6">
          <TabsList className="flex justify-start overflow-auto pb-px w-full">
            <TabsTrigger value="getting-started" className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              Getting Started
            </TabsTrigger>
            <TabsTrigger value="api-reference" className="flex items-center gap-2">
              <FileCode className="h-4 w-4" />
              API Reference
            </TabsTrigger>
            <TabsTrigger value="tutorials" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Tutorials
            </TabsTrigger>
            <TabsTrigger value="sdk" className="flex items-center gap-2">
              <Server className="h-4 w-4" />
              SDK Guides
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="getting-started">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Quick Start</CardTitle>
                  <Badge>Essential</Badge>
                </div>
                <CardDescription>Get up and running with BlockchainKit in minutes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Learn how to create an account, get your API key, and make your first request.</p>
                <Button variant="outline">Read Guide</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Core Concepts</CardTitle>
                  <Badge>Recommended</Badge>
                </div>
                <CardDescription>Understand the key components of the platform</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Learn about nodes, APIs, and how different services interact with each other.</p>
                <Button variant="outline">Explore Concepts</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Authentication</CardTitle>
                <CardDescription>Secure your API requests</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Learn how to authenticate your requests and manage your API keys securely.</p>
                <Button variant="outline">Read Guide</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Error Handling</CardTitle>
                <CardDescription>Handle errors gracefully</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Learn about error codes, messages, and recommended handling strategies.</p>
                <Button variant="outline">Read Guide</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="api-reference">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Node API</CardTitle>
                </div>
                <CardDescription>Connect to blockchain nodes</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Access Ethereum, Polygon, and other blockchain nodes for reading and writing data.</p>
                <Button variant="outline">View Reference</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>NFT API</CardTitle>
                </div>
                <CardDescription>Work with NFT data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Fetch metadata, track ownership, monitor transfers, and build NFT applications.</p>
                <Button variant="outline">View Reference</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Data API</CardTitle>
                </div>
                <CardDescription>Access blockchain data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Query transactions, blocks, contracts, and other on-chain data across multiple networks.</p>
                <Button variant="outline">View Reference</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>WebSocket API</CardTitle>
                </div>
                <CardDescription>Real-time blockchain data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Subscribe to real-time events and updates from blockchain networks.</p>
                <Button variant="outline">View Reference</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Analytics API</CardTitle>
                </div>
                <CardDescription>Track usage and performance</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Monitor your application's API usage, performance, and other metrics.</p>
                <Button variant="outline">View Reference</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Webhook API</CardTitle>
                </div>
                <CardDescription>Get notified of events</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Configure webhooks to receive notifications for blockchain events and platform updates.</p>
                <Button variant="outline">View Reference</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="tutorials">
          <div className="grid grid-cols-1 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Building a NFT Marketplace</CardTitle>
                  <Badge variant="outline">Intermediate</Badge>
                </div>
                <CardDescription>Learn how to create a full-featured NFT marketplace</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">In this tutorial, you'll learn how to build a NFT marketplace with minting, bidding, and trading features.</p>
                <Button variant="outline">Start Tutorial</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Creating a DeFi Dashboard</CardTitle>
                  <Badge variant="outline">Advanced</Badge>
                </div>
                <CardDescription>Learn how to build a dashboard for tracking DeFi assets</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">This tutorial will guide you through building a DeFi dashboard that tracks tokens, liquidity pools, and yield farming positions.</p>
                <Button variant="outline">Start Tutorial</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Building a Blockchain Explorer</CardTitle>
                  <Badge variant="outline">Intermediate</Badge>
                </div>
                <CardDescription>Learn how to build a simple blockchain explorer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">This tutorial will show you how to build a blockchain explorer for viewing transactions, blocks, and addresses.</p>
                <Button variant="outline">Start Tutorial</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sdk">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  <CardTitle>JavaScript SDK</CardTitle>
                </div>
                <CardDescription>Integrate with JavaScript applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Learn how to use our JavaScript SDK in browser and Node.js environments.</p>
                <Button variant="outline">View Guide</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  <CardTitle>Python SDK</CardTitle>
                </div>
                <CardDescription>Integrate with Python applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Learn how to use our Python SDK for data analysis, backend services, and more.</p>
                <Button variant="outline">View Guide</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  <CardTitle>Go SDK</CardTitle>
                </div>
                <CardDescription>Integrate with Go applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Learn how to use our Go SDK for high-performance blockchain applications.</p>
                <Button variant="outline">View Guide</Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Database className="h-5 w-5 mr-2" />
                  <CardTitle>Rust SDK</CardTitle>
                </div>
                <CardDescription>Integrate with Rust applications</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">Learn how to use our Rust SDK for highly reliable and efficient blockchain applications.</p>
                <Button variant="outline">View Guide</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
