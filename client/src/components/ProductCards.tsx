import { Link } from "wouter";
import { Database, Images, PieChart, ArrowRight } from "lucide-react";

export default function ProductCards() {
  const products = [
    {
      title: "Node Infrastructure",
      description: "High-performance, scalable blockchain nodes with 99.9% uptime guarantee. Multi-chain support with low latency responses.",
      icon: Database,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      linkColor: "text-primary hover:text-indigo-600",
      href: "/products#node"
    },
    {
      title: "NFT APIs",
      description: "Comprehensive NFT APIs for fetching metadata, tracking ownership, monitoring transfers, and building marketplaces.",
      icon: Images,
      iconBg: "bg-secondary/10",
      iconColor: "text-secondary",
      linkColor: "text-secondary hover:text-violet-600",
      href: "/products#nft"
    },
    {
      title: "Data Analytics",
      description: "Real-time analytics and insights for your blockchain applications. Monitor performance, track usage, and identify trends.",
      icon: PieChart,
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      linkColor: "text-accent hover:text-cyan-600",
      href: "/products#data"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Complete Developer Platform
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Explore our suite of products designed to accelerate your Web3 development.
          </p>
        </div>

        <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {products.map((product, index) => (
            <div key={index} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 ${product.iconBg} rounded-md p-3`}>
                    <product.icon className={`${product.iconColor} text-xl h-6 w-6`} />
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">{product.title}</h3>
                </div>
                <div className="mt-4">
                  <p className="text-base text-gray-500">
                    {product.description}
                  </p>
                </div>
                <div className="mt-5">
                  <Link href={product.href}>
                    <span className={`${product.linkColor} font-medium flex items-center cursor-pointer`}>
                      Learn more 
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
