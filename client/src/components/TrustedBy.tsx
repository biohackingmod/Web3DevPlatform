import { SiOpensea, SiPolygon, SiEthereum, SiBinance, SiSolana, SiPolkadot } from "react-icons/si";

export default function TrustedBy() {
  const companies = [
    { name: "Ethereum", icon: SiEthereum },
    { name: "Binance", icon: SiBinance },
    { name: "OpenSea", icon: SiOpensea },
    { name: "Polygon", icon: SiPolygon },
    { name: "Solana", icon: SiSolana },
    { name: "Polkadot", icon: SiPolkadot },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
          Trusted by leading Web3 projects and enterprises
        </p>
        <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6">
          {companies.map((company, index) => (
            <div key={index} className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <div className="h-12 text-gray-400 flex items-center">
                <company.icon className="h-6 w-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
