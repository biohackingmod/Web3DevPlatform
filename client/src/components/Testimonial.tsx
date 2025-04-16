import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonial() {
  return (
    <div className="py-16 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <blockquote className="mt-10">
            <div className="max-w-3xl mx-auto text-center text-2xl font-medium leading-9 text-gray-900">
              <p>
                "BlockchainKit has transformed how we build and deploy our DeFi application. Their reliable infrastructure and comprehensive APIs have cut our development time in half while providing exceptional performance."
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="md:flex-shrink-0">
                  <Avatar className="mx-auto h-10 w-10">
                    <AvatarImage src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=256&h=256&q=80" alt="Alex Rivera" />
                    <AvatarFallback>AR</AvatarFallback>
                  </Avatar>
                </div>
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">Alex Rivera</div>
                  <svg className="hidden md:block mx-1 h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>
                  <div className="text-base font-medium text-gray-500">CTO, DefiProtocol</div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
