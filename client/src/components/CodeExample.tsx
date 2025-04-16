import { Check } from "lucide-react";

export default function CodeExample() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Simple, Powerful API
            </h2>
            <p className="mt-3 text-lg text-gray-500">
              Our APIs are designed to be easy to use while providing powerful capabilities. Get started with just a few lines of code.
            </p>
            <div className="mt-10 space-y-4">
              {[
                {
                  title: "Robust SDKs",
                  description: "Support for JavaScript, Python, Go, Rust, and more"
                },
                {
                  title: "Cross-chain Support",
                  description: "Ethereum, Polygon, Solana, and more chains from one API"
                },
                {
                  title: "WebSocket Support",
                  description: "Real-time updates for transactions and blockchain events"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <Check className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-7">
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="px-4 py-2 bg-gray-800 flex justify-between">
                <div className="flex space-x-1">
                  <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                  <div className="h-3 w-3 bg-yellow-500 rounded-full"></div>
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-400">API Example</div>
              </div>
              <div className="p-4 syntax-highlight font-mono text-sm overflow-auto" style={{ maxHeight: "400px" }}>
                <pre><code>
{`// Initialize the SDK with your API key
const BlockchainKit = require('blockchainkit');
const bk = new BlockchainKit('YOUR_API_KEY');

// Query NFT metadata
async function getNFTMetadata() {
  const nft = await bk.nft.getMetadata({
    chain: 'eth',
    contract: '0x1234567890abcdef1234567890abcdef12345678',
    tokenId: '1234'
  });
  
  console.log(nft);
  // {
  //   name: "Crypto Punk #1234",
  //   description: "A unique digital collectible...",
  //   image: "ipfs://QmUxZPXzLME8UJS6jdPVXTVdBf8QSfS9PXiGT5tkXRiAcx",
  //   attributes: [...],
  //   ...
  // }
}

// Send a transaction
async function transferTokens() {
  const tx = await bk.transaction.send({
    chain: 'eth',
    to: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    value: '0.1',
    gasLimit: '21000'
  });
  
  const receipt = await tx.wait();
  console.log(\`Transaction confirmed in block \${receipt.blockNumber}\`);
}

// Listen to blockchain events in real-time
subscribeToEvents();
function subscribeToEvents() {
  const subscription = bk.events.subscribe({
    chain: 'eth',
    contract: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC
    event: 'Transfer',
    fromBlock: 'latest'
  }, event => {
    console.log('Transfer event:', event);
  });
  
  // Later when done
  // subscription.unsubscribe();
}`}</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
