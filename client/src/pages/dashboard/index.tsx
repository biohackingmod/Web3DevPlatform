import React, { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AreaChart, BadgeDelta, Flex, Grid, Metric, Tab, TabGroup, TabList, Text, Title } from "@tremor/react";
import { BookOpen, Code, Copy, Database, FileCode, GitBranch, Hash, HelpCircle, Home, Layers, LayoutDashboard, MessageCircle, Settings, Terminal, Wallet } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

// Mock data for charts
const chartdata = [
  {
    date: "Jan 23",
    "API Calls": 2890,
  },
  {
    date: "Feb 23",
    "API Calls": 3245,
  },
  {
    date: "Mar 23",
    "API Calls": 4098,
  },
  {
    date: "Apr 23",
    "API Calls": 5214,
  },
  {
    date: "May 23",
    "API Calls": 4873,
  },
  {
    date: "Jun 23",
    "API Calls": 5612,
  },
  {
    date: "Jul 23",
    "API Calls": 6450,
  },
];

// Sidebar Navigation Items
const navItems = [
  { icon: Home, label: "Home", href: "/dashboard" },
  { icon: ApiIcon, label: "API Playground", href: "/dashboard/api-playground" },
  { icon: Database, label: "Projects", href: "/dashboard/projects" },
  { icon: FileCode, label: "Smart Contracts", href: "/dashboard/contracts" },
  { icon: Hash, label: "NFTs", href: "/dashboard/nfts" },
  { icon: WalletIcon, label: "Wallets", href: "/dashboard/wallets" },
  { icon: LayersIcon, label: "Explorer", href: "/dashboard/explorer" },
  { icon: MessageCircle, label: "Support", href: "/dashboard/support" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState(0);
  
  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please log in to access the dashboard</h1>
          <Link href="/auth">
            <Button>Log in</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-card border-r">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center text-white font-bold">
              BK
            </div>
            <h1 className="text-xl font-bold">BlockchainKit</h1>
          </div>
        </div>
        <div className="flex-1 py-4 flex flex-col gap-1 overflow-auto">
          {navItems.map((item, index) => (
            <Link href={item.href} key={index}>
              <a className={`flex items-center gap-3 px-4 py-2 text-sm hover:bg-accent/50 rounded-md mx-2 ${window.location.pathname === item.href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'}`}>
                <item.icon className="h-4 w-4" />
                {item.label}
              </a>
            </Link>
          ))}
        </div>
        <div className="p-4 border-t">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium">
              {user.username?.[0]?.toUpperCase() || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium truncate">{user.username}</p>
              <p className="text-xs text-muted-foreground truncate">{user.email}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="bg-background border-b p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                <Badge variant="outline" className="mr-2 font-mono">FREE</Badge>
                5,000 / 10,000 calls
              </div>
              <Button variant="outline" size="sm">Upgrade</Button>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          <div className="container mx-auto space-y-8">
            {/* Welcome Card */}
            <Card className="bg-gradient-to-r from-primary/20 to-primary/5">
              <CardHeader>
                <CardTitle>Welcome back, {user.username}!</CardTitle>
                <CardDescription>
                  Your API key: <code className="bg-background/70 px-2 py-0.5 rounded text-primary font-mono">{user.apiKey}</code>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>Get started with our API, SDKs, or interactive tools</p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-3">
                  <Link href="/dashboard/api-playground">
                    <Button size="sm">
                      <ApiIcon className="mr-2 h-4 w-4" />
                      Try API Playground
                    </Button>
                  </Link>
                  <Link href="/documentation">
                    <Button variant="outline" size="sm">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Read Documentation
                    </Button>
                  </Link>
                  <Link href="/dashboard/projects/new">
                    <Button variant="outline" size="sm">
                      <GitBranch className="mr-2 h-4 w-4" />
                      Start New Project
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>

            {/* API Usage */}
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>API Usage</CardTitle>
                  <TabGroup onIndexChange={setActiveTab} index={activeTab}>
                    <TabList variant="solid">
                      <Tab>7 days</Tab>
                      <Tab>30 days</Tab>
                      <Tab>90 days</Tab>
                    </TabList>
                  </TabGroup>
                </div>
              </CardHeader>
              <CardContent>
                <Grid numItemsLg={3} className="gap-6 mt-6">
                  <Card decoration="top" decorationColor="indigo">
                    <CardContent className="pt-4">
                      <Text>Total API Calls</Text>
                      <Flex className="mt-2">
                        <Metric>12,450</Metric>
                        <BadgeDelta deltaType="increase">16.5%</BadgeDelta>
                      </Flex>
                    </CardContent>
                  </Card>
                  <Card decoration="top" decorationColor="green">
                    <CardContent className="pt-4">
                      <Text>Successful Calls</Text>
                      <Flex className="mt-2">
                        <Metric>12,189</Metric>
                        <BadgeDelta deltaType="increase">9.4%</BadgeDelta>
                      </Flex>
                    </CardContent>
                  </Card>
                  <Card decoration="top" decorationColor="red">
                    <CardContent className="pt-4">
                      <Text>Error Rate</Text>
                      <Flex className="mt-2">
                        <Metric>2.1%</Metric>
                        <BadgeDelta deltaType="decrease">0.8%</BadgeDelta>
                      </Flex>
                    </CardContent>
                  </Card>
                </Grid>
                <div className="mt-6 h-72">
                  <AreaChart
                    data={chartdata}
                    index="date"
                    categories={["API Calls"]}
                    colors={["indigo"]}
                    valueFormatter={(value) => `${value.toLocaleString()} calls`}
                    showLegend={false}
                    className="h-full"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Quick Access Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-md font-medium">API Playground</CardTitle>
                  <ApiIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Test API endpoints with interactive UI</p>
                  <Link href="/dashboard/api-playground">
                    <Button size="sm">Explore API</Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-md font-medium">Documentation</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Browse guides, API docs, and examples</p>
                  <Link href="/documentation">
                    <Button size="sm" variant="outline">View Docs</Button>
                  </Link>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-md font-medium">Developer Tools</CardTitle>
                  <Code className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">Access SDKs, libraries, and CLI tools</p>
                  <Link href="/documentation/developers">
                    <Button size="sm" variant="outline">Get Tools</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                      <Terminal className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">API Key Generated</p>
                          <p className="text-sm text-muted-foreground">You created a new API key for development</p>
                        </div>
                        <p className="text-sm text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                      <FileCode className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Smart Contract Deployed</p>
                          <p className="text-sm text-muted-foreground">Successfully deployed ERC721 contract to Ethereum testnet</p>
                        </div>
                        <p className="text-sm text-muted-foreground">Yesterday</p>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                      <Wallet className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">Wallet Connected</p>
                          <p className="text-sm text-muted-foreground">Added 0x742...F3c1 to your workspace</p>
                        </div>
                        <p className="text-sm text-muted-foreground">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}