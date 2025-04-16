import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function CTASection() {
  return (
    <div className="bg-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Ready to start building?</span>
          <span className="block text-indigo-200">Get started with BlockchainKit today.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/register">
              <a>
                <Button variant="outline" className="bg-white text-primary hover:bg-indigo-50">
                  Get started
                </Button>
              </a>
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link href="/documentation">
              <a>
                <Button variant="secondary" className="bg-indigo-600 text-white hover:bg-indigo-700">
                  Learn more
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
