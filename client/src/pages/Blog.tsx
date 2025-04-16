import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BLOG_POSTS = [
  {
    id: 1,
    title: "Building a High-Performance NFT Marketplace on Ethereum",
    excerpt: "Learn how to build a high-performance NFT marketplace on Ethereum using BlockchainKit's APIs and infrastructure.",
    date: "April 15, 2023",
    category: "Tutorial",
    readTime: "12 min read",
    author: "Alex Rivera",
    authorRole: "Developer Advocate"
  },
  {
    id: 2,
    title: "Understanding Gas Optimization for Smart Contracts",
    excerpt: "Gas optimization is critical for cost-effective smart contracts. This guide covers techniques for reducing gas costs in your Solidity code.",
    date: "March 28, 2023",
    category: "Guide",
    readTime: "8 min read",
    author: "Sarah Johnson",
    authorRole: "Blockchain Engineer"
  },
  {
    id: 3,
    title: "The Future of Cross-Chain Interoperability",
    excerpt: "Cross-chain interoperability is essential for the growth of the blockchain ecosystem. We explore current solutions and future developments.",
    date: "March 10, 2023",
    category: "Research",
    readTime: "15 min read",
    author: "Michael Chen",
    authorRole: "Research Lead"
  },
  {
    id: 4,
    title: "Implementing WebSocket Connections for Real-time Blockchain Updates",
    excerpt: "Learn how to use WebSockets with BlockchainKit to receive real-time updates from blockchain networks.",
    date: "February 22, 2023",
    category: "Tutorial",
    readTime: "10 min read",
    author: "Jason Lee",
    authorRole: "Senior Developer"
  },
  {
    id: 5,
    title: "Scaling Your DApp: Best Practices for Web3 Applications",
    excerpt: "As your decentralized application grows, you'll face scaling challenges. This guide covers best practices for scaling your Web3 applications.",
    date: "February 15, 2023",
    category: "Guide",
    readTime: "14 min read",
    author: "Emily Taylor",
    authorRole: "Solutions Architect"
  },
  {
    id: 6,
    title: "Securing Your API Keys in Web3 Applications",
    excerpt: "Security is paramount in Web3 development. Learn how to securely manage and store your API keys in your blockchain applications.",
    date: "January 30, 2023",
    category: "Security",
    readTime: "7 min read",
    author: "Daniel White",
    authorRole: "Security Engineer"
  }
];

export default function Blog() {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            Blog & Resources
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            Stay up to date with the latest trends, tutorials, and insights in blockchain development
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow">
              <Input placeholder="Search articles..." />
            </div>
            <div className="flex gap-2">
              <Button variant="outline">All</Button>
              <Button variant="outline">Tutorials</Button>
              <Button variant="outline">Guides</Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Card key={post.id}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge className="mb-2">{post.category}</Badge>
                  <div className="text-sm text-gray-500">{post.date}</div>
                </div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between pt-2">
                <div className="text-sm text-gray-500">
                  <span className="font-medium text-gray-700">{post.author}</span>
                  <span> · {post.readTime}</span>
                </div>
                <Button variant="ghost" size="sm">Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button>Load More Articles</Button>
        </div>
        
        <div className="mt-20 max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Get the latest blockchain development tips, tutorials, and news delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input placeholder="Your email address" className="flex-grow" />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our privacy policy and consent to receive updates from BlockchainKit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
