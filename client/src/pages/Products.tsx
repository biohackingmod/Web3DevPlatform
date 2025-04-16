import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, Images, ChartPie, Shield } from "lucide-react";
import CodeExample from "@/components/CodeExample";

export default function Products() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Products & Solutions
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Explore our comprehensive suite of tools designed to accelerate your Web3 development
          </p>
        </div>

        <Tabs defaultValue="node" className="w-full">
          <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent">
            <TabsTrigger value="node" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white">
              <Database className="h-4 w-4" />
              Node Infrastructure
            </TabsTrigger>
            <TabsTrigger value="nft" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white">
              <Images className="h-4 w-4" />
              NFT APIs
            </TabsTrigger>
            <TabsTrigger value="data" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white">
              <ChartPie className="h-4 w-4" />
              Data Analytics
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-white">
              <Shield className="h-4 w-4" />
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="node" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">High-Performance Node Infrastructure</h2>
                <p className="text-gray-600 mb-6">
                  Access reliable, scalable blockchain nodes with 99.9% uptime. Our infrastructure supports multiple blockchains and provides low-latency access to blockchain data and transactions.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span>99.9% uptime guarantee</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span>Multi-chain support (Ethereum, Polygon, Solana, and more)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span>Advanced caching for faster response times</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span>Archive nodes for historical data access</span>
                  </li>
                </ul>
                <Button>Learn More</Button>
              </div>
              <div className="bg-darkbg rounded-lg shadow-lg overflow-hidden">
                <div className="px-4 py-2 bg-gray-800 flex justify-between">
                  <div className="flex space-x-1">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-400">Node Example</div>
                </div>
                <div className="p-4 syntax-highlight font-mono text-sm">
                  <pre>
{`// Connect to Ethereum mainnet
const provider = new BlockchainKit.providers.JsonRpcProvider({
  chain: 'eth',
  apiKey: 'YOUR_API_KEY'
});

// Get the latest block
const getLatestBlock = async () => {
  const block = await provider.getBlock('latest');
  console.log(\`Latest block: \${block.number}\`);
  console.log(\`Timestamp: \${new Date(block.timestamp * 1000)}\`);
  console.log(\`Transactions: \${block.transactions.length}\`);
};

// Send a transaction
const sendTransaction = async () => {
  const tx = {
    to: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    value: ethers.utils.parseEther('0.1'),
    gasLimit: 21000
  };
  
  const txResponse = await wallet.sendTransaction(tx);
  console.log(\`Transaction sent: \${txResponse.hash}\`);
  
  const receipt = await txResponse.wait();
  console.log(\`Transaction confirmed in block \${receipt.blockNumber}\`);
};`}
                  </pre>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="nft" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Comprehensive NFT APIs</h2>
                <p className="text-gray-600 mb-6">
                  Easily integrate NFT functionality into your applications with our powerful APIs. Fetch metadata, track ownership, monitor transfers, and build marketplaces with ease.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span>Real-time metadata and ownership tracking</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span>Support for all major NFT standards (ERC-721, ERC-1155)</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span>Historical ownership and price data</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span>IPFS and Arweave integration for metadata storage</span>
                  </li>
                </ul>
                <Button>Learn More</Button>
              </div>
              <div className="bg-darkbg rounded-lg shadow-lg overflow-hidden">
                <div className="px-4 py-2 bg-gray-800 flex justify-between">
                  <div className="flex space-x-1">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-400">NFT API Example</div>
                </div>
                <div className="p-4 syntax-highlight font-mono text-sm">
                  <pre>
{`// Get NFT metadata
const getNFTMetadata = async () => {
  const nft = await bk.nft.getMetadata({
    chain: 'eth',
    contract: '0x1234567890abcdef1234567890abcdef12345678',
    tokenId: '1234'
  });
  
  console.log(nft);
  // {
  //   name: "Crypto Punk #1234",
  //   description: "A unique digital collectible...",
  //   image: "ipfs://QmUxZPXzLME8UJS6jdP...",
  //   attributes: [...],
  //   ...
  // }
};

// Get NFT ownership history
const getOwnershipHistory = async () => {
  const history = await bk.nft.getOwnershipHistory({
    chain: 'eth',
    contract: '0x1234567890abcdef1234567890abcdef12345678',
    tokenId: '1234'
  });
  
  console.log(history);
  // [
  //   { owner: "0x123...", acquiredAt: "2021-08-01T..." },
  //   { owner: "0x456...", acquiredAt: "2021-07-15T..." },
  //   ...
  // ]
};`}
                  </pre>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="data" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Powerful Data Analytics</h2>
                <p className="text-gray-600 mb-6">
                  Gain valuable insights from blockchain data with our analytics tools. Monitor performance, track usage, and identify trends to make informed decisions.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span>Real-time dashboard with customizable metrics</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span>Historical data trends and pattern recognition</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span>API usage monitoring and optimization</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span>Custom alerts and notifications</span>
                  </li>
                </ul>
                <Button>Learn More</Button>
              </div>
              <div className="bg-darkbg rounded-lg shadow-lg overflow-hidden">
                <div className="px-4 py-2 bg-gray-800 flex justify-between">
                  <div className="flex space-x-1">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-400">Analytics Example</div>
                </div>
                <div className="p-4 syntax-highlight font-mono text-sm">
                  <pre>
{`// Query transaction volume over time
const getTransactionVolume = async () => {
  const volume = await bk.analytics.getTransactionVolume({
    chain: 'eth',
    contract: '0x1234567890abcdef1234567890abcdef12345678',
    timeframe: 'daily',
    startDate: '2023-01-01',
    endDate: '2023-03-31'
  });
  
  console.log(volume);
  // [
  //   { date: "2023-01-01", count: 156, volume: "34.25" },
  //   { date: "2023-01-02", count: 142, volume: "29.75" },
  //   ...
  // ]
};

// Get API usage analytics
const getAPIUsage = async () => {
  const usage = await bk.account.getUsage({
    timeframe: 'monthly',
    startDate: '2023-01-01',
    endDate: '2023-03-31'
  });
  
  console.log(usage);
  // {
  //   total: 1250000,
  //   byEndpoint: {
  //     "nft/getMetadata": 450000,
  //     "transaction/send": 320000,
  //     ...
  //   }
  // }
};`}
                  </pre>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="mt-0">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Enterprise-grade Security</h2>
                <p className="text-gray-600 mb-6">
                  Rest easy with our industry-leading security practices, comprehensive audit logs, and transparent infrastructure. We prioritize the security of your data and transactions.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span>SOC 2 Type II compliance</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span>Comprehensive audit logs and monitoring</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span>Advanced API key management and rotation</span>
                  </li>
                  <li className="flex items-center">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-2">
                      <span className="h-2 w-2 rounded-full bg-green-500"></span>
                    </span>
                    <span>Multi-factor authentication and access controls</span>
                  </li>
                </ul>
                <Button>Learn More</Button>
              </div>
              <div className="bg-darkbg rounded-lg shadow-lg overflow-hidden">
                <div className="px-4 py-2 bg-gray-800 flex justify-between">
                  <div className="flex space-x-1">
                    <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                    <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-400">Security Example</div>
                </div>
                <div className="p-4 syntax-highlight font-mono text-sm">
                  <pre>
{`// Create and rotate API keys
const manageAPIKeys = async () => {
  // Create a new API key with specific permissions
  const newKey = await bk.security.createApiKey({
    name: 'Production API Key',
    permissions: ['read:nft', 'read:transaction', 'write:transaction']
  });
  
  console.log(newKey);
  // {
  //   id: "key_123abc...",
  //   key: "sk_live_abc123...",
  //   name: "Production API Key",
  //   permissions: ["read:nft", "read:transaction", "write:transaction"],
  //   created: "2023-04-01T12:00:00Z"
  // }
  
  // Rotate an existing API key
  const rotatedKey = await bk.security.rotateApiKey({
    id: "key_123abc..."
  });
  
  console.log(rotatedKey);
  // {
  //   id: "key_123abc...",
  //   key: "sk_live_def456...",  // New key value
  //   name: "Production API Key",
  //   permissions: ["read:nft", "read:transaction", "write:transaction"],
  //   created: "2023-04-01T12:00:00Z",
  //   rotated: "2023-04-15T16:30:00Z"
  // }
};`}
                  </pre>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">How Customers Use Our Products</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">NFT Marketplaces</h3>
                <p className="text-gray-600">
                  Leading NFT marketplaces use our NFT APIs to fetch metadata, track ownership, and monitor transfers in real-time, providing users with accurate and up-to-date information.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">DeFi Protocols</h3>
                <p className="text-gray-600">
                  DeFi protocols rely on our Node Infrastructure for reliable, high-performance access to blockchain data, ensuring transactions are processed quickly and accurately.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium mb-2">Gaming Companies</h3>
                <p className="text-gray-600">
                  Web3 gaming companies use our comprehensive API suite to integrate blockchain functionality into their games, enabling players to truly own in-game assets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <CodeExample />
      </div>
    </div>
  );
}
