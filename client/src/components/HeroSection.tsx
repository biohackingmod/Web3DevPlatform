import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-[#6366F1] via-[#8B5CF6] to-[#06B6D4] bg-gradient-animate overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block">Supercharge Your</span>
                <span className="block text-[#06B6D4]">Web3 Development</span>
              </h1>
              <p className="mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Build, scale, and monitor your blockchain applications with our comprehensive developer platform. Powerful APIs, analytics, and tools designed for Web3 builders.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link href="/register">
                    <a>
                      <Button className="w-full bg-gray-900 hover:bg-gray-800">
                        Start Building
                      </Button>
                    </a>
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/contact">
                    <a>
                      <Button variant="outline" className="w-full bg-white text-gray-900 hover:bg-gray-50">
                        Book a Demo
                      </Button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-full w-full bg-gray-900 opacity-20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-5 gap-4 opacity-40">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-12 h-12 bg-white rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
