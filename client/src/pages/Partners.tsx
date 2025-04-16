import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowRight, Users, Zap, Award, Globe, Shield, Briefcase } from "lucide-react";
import { FaEthereum, FaSlideshare, FaCloudversify, FaBuffer, FaAsterisk, FaSuperpowers } from "react-icons/fa";

export default function Partners() {
  const partnerTypes = [
    {
      title: "Technology Partners",
      description: "Integrate your technology with BlockchainKit",
      icon: Zap,
      link: "#technology-partners",
    },
    {
      title: "Solution Partners",
      description: "Build customer solutions with our platform",
      icon: Users,
      link: "#solution-partners",
    },
    {
      title: "Network Partners",
      description: "Expand blockchain support on our infrastructure",
      icon: Globe,
      link: "#network-partners",
    },
  ];

  const featuredPartners = [
    {
      name: "EthWorks",
      logo: FaEthereum,
      description: "Leading Ethereum development studio",
      partnerType: "Solution Partner",
      link: "/partners/ethworks",
    },
    {
      name: "ChainGuard",
      logo: Shield,
      description: "Blockchain security solutions provider",
      partnerType: "Technology Partner",
      link: "/partners/chainguard",
    },
    {
      name: "Web3 Capital",
      logo: Briefcase,
      description: "Venture capital firm specializing in blockchain",
      partnerType: "Strategic Partner",
      link: "/partners/web3capital",
    },
    {
      name: "DeFi Alliance",
      logo: FaBuffer,
      description: "Accelerator for decentralized finance startups",
      partnerType: "Strategic Partner",
      link: "/partners/defialliance",
    },
    {
      name: "PolygonLabs",
      logo: FaAsterisk,
      description: "Polygon ecosystem development team",
      partnerType: "Network Partner",
      link: "/partners/polygonlabs",
    },
    {
      name: "SolanaWorks",
      logo: FaSuperpowers,
      description: "Solana infrastructure and tooling provider",
      partnerType: "Network Partner",
      link: "/partners/solanaworks",
    },
  ];

  const benefitsData = [
    {
      title: "Technical Resources",
      description: "Access exclusive documentation, sample code, and integration guides.",
      icon: <FaCloudversify className="h-10 w-10 text-indigo-600" />,
    },
    {
      title: "Co-Marketing",
      description: "Joint case studies, blog posts, and promotional activities.",
      icon: <FaSlideshare className="h-10 w-10 text-indigo-600" />,
    },
    {
      title: "Partner Portal",
      description: "Dedicated portal with resources, deal registration, and support.",
      icon: <Globe className="h-10 w-10 text-indigo-600" />,
    },
    {
      title: "Certification",
      description: "Become a certified BlockchainKit expert or solution provider.",
      icon: <Award className="h-10 w-10 text-indigo-600" />,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-indigo-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-indigo-800 h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl">
              Partner with BlockchainKit
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-indigo-200 sm:mt-4">
              Join our ecosystem of innovative companies building the future of Web3 together.
            </p>
          </div>
          
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {partnerTypes.map((type) => (
              <Card key={type.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <CardHeader className="bg-white p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <type.icon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
                    </div>
                    <CardTitle className="ml-3 text-xl font-medium text-gray-900">
                      {type.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 bg-white p-6 pt-0">
                  <CardDescription className="text-base text-gray-500">
                    {type.description}
                  </CardDescription>
                  <div className="mt-6">
                    <Link href={type.link}>
                      <span className="text-indigo-600 hover:text-indigo-500 font-medium flex items-center cursor-pointer">
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Partner benefits section */}
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Partner Program Benefits
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
              Our partner program is designed to help you grow your business and deliver value to your customers.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10">
              {benefitsData.map((benefit) => (
                <div key={benefit.title} className="pt-6">
                  <div className="flow-root bg-white rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-50 rounded-md shadow-lg">
                          {benefit.icon}
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {benefit.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="relative lg:mt-0 flex flex-col bg-indigo-600 rounded-2xl px-6 py-8 sm:px-12 lg:px-16">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white">Become a Partner</h3>
                  <p className="mt-2 text-lg text-indigo-200">
                    Join our partner ecosystem and access exclusive resources, support, and opportunities.
                  </p>
                </div>
                <ul className="space-y-4 text-indigo-200">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-indigo-300">✓</span>
                    <p className="ml-3">Access to partner API keys with higher rate limits</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-indigo-300">✓</span>
                    <p className="ml-3">Revenue sharing opportunities</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-indigo-300">✓</span>
                    <p className="ml-3">Priority support and dedicated account manager</p>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-indigo-300">✓</span>
                    <p className="ml-3">Inclusion in our partner directory</p>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/contact">
                    <Button className="w-full bg-white text-indigo-600 hover:bg-indigo-50 cursor-pointer">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured partners section */}
      <div id="partners" className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              Featured Partners
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              Meet some of the companies we're proud to partner with.
            </p>
          </div>
          <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
            {featuredPartners.map((partner) => (
              <div key={partner.name}>
                <div>
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600">
                    {typeof partner.logo === 'function' 
                      ? <partner.logo className="h-6 w-6" /> 
                      : <partner.logo className="h-6 w-6" />
                    }
                  </span>
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{partner.name}</h3>
                  <p className="mt-2 text-sm text-indigo-600">{partner.partnerType}</p>
                </div>
                <div className="mt-2 text-base text-gray-500">
                  {partner.description}
                </div>
                <div className="mt-3">
                  <Link href={partner.link}>
                    <span className="text-base font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer">
                      Learn more about {partner.name}
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to partner with us?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Contact our partnership team today to discuss how we can work together.
          </p>
          <Link href="/contact">
            <Button size="lg" className="mt-8 w-full sm:w-auto bg-white text-indigo-700 border border-transparent rounded-md shadow-sm hover:bg-indigo-50 cursor-pointer">
              Contact Partnership Team
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}