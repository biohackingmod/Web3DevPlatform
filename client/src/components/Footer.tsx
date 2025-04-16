import { Link } from "wouter";
import { Logo } from "@/lib/icons";
import { Separator } from "@/components/ui/separator";
import { FaTwitter, FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center">
              <Logo className="h-8 w-auto text-white" />
              <span className="ml-2 text-xl font-bold text-white">BlockchainKit</span>
            </div>
            <p className="text-gray-400 text-base">
              Building the future of blockchain development with powerful, reliable tools designed for developers.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">GitHub</span>
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Discord</span>
                <FaDiscord className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Products</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/products#node">
                      <a className="text-base text-gray-400 hover:text-white">Node Infrastructure</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products#nft">
                      <a className="text-base text-gray-400 hover:text-white">NFT APIs</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products#data">
                      <a className="text-base text-gray-400 hover:text-white">Data Analytics</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products#security">
                      <a className="text-base text-gray-400 hover:text-white">Security</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/documentation">
                      <a className="text-base text-gray-400 hover:text-white">Documentation</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/documentation#api-reference">
                      <a className="text-base text-gray-400 hover:text-white">API Reference</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/documentation#tutorials">
                      <a className="text-base text-gray-400 hover:text-white">Tutorials</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a className="text-base text-gray-400 hover:text-white">Blog</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/about">
                      <a className="text-base text-gray-400 hover:text-white">About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers">
                      <a className="text-base text-gray-400 hover:text-white">Careers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners">
                      <a className="text-base text-gray-400 hover:text-white">Partners</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a className="text-base text-gray-400 hover:text-white">Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/privacy">
                      <a className="text-base text-gray-400 hover:text-white">Privacy</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms">
                      <a className="text-base text-gray-400 hover:text-white">Terms</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies">
                      <a className="text-base text-gray-400 hover:text-white">Cookie Policy</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Separator className="mt-12 border-gray-700" />
        <div className="mt-8 pt-4">
          <p className="text-base text-gray-400 xl:text-center">
            &copy; 2023 BlockchainKit, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
