import { Server, Code, BarChart3, Shield } from "lucide-react";

export default function Features() {
  const features = [
    {
      name: "Enhanced Node Infrastructure",
      description: "Build on our high-performance, reliable node infrastructure supporting multiple blockchains with 99.9% uptime guarantee.",
      icon: Server
    },
    {
      name: "Comprehensive API Suite",
      description: "Access NFT, token, and blockchain data through our simple, powerful APIs designed for developers.",
      icon: Code
    },
    {
      name: "Real-time Analytics",
      description: "Monitor your application performance, track errors, and analyze user interactions with powerful dashboards.",
      icon: BarChart3
    },
    {
      name: "Enterprise-grade Security",
      description: "Rest easy with our industry-leading security practices, comprehensive audit logs, and transparent infrastructure.",
      icon: Shield
    }
  ];

  return (
    <div className="py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Tools for Web3 Developers
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Everything you need to build, scale, and monitor your blockchain applications in one place.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => (
              <div key={index} className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                  <feature.icon className="h-6 w-6" />
                </div>
                <div className="ml-16">
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-base text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
