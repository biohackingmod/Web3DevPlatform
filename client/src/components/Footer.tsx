import { Link } from "wouter";
import { Logo } from "@/lib/icons";
import { Separator } from "@/components/ui/separator";
import { FaTwitter, FaGithub, FaDiscord, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white mt-auto w-full">
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
              <Link href="/social/twitter">
                <span className="text-gray-400 hover:text-gray-300 cursor-pointer">
                  <span className="sr-only">Twitter</span>
                  <FaTwitter className="h-5 w-5" />
                </span>
              </Link>
              <Link href="/social/github">
                <span className="text-gray-400 hover:text-gray-300 cursor-pointer">
                  <span className="sr-only">GitHub</span>
                  <FaGithub className="h-5 w-5" />
                </span>
              </Link>
              <Link href="/social/discord">
                <span className="text-gray-400 hover:text-gray-300 cursor-pointer">
                  <span className="sr-only">Discord</span>
                  <FaDiscord className="h-5 w-5" />
                </span>
              </Link>
              <Link href="/social/linkedin">
                <span className="text-gray-400 hover:text-gray-300 cursor-pointer">
                  <span className="sr-only">LinkedIn</span>
                  <FaLinkedin className="h-5 w-5" />
                </span>
              </Link>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Products</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/products#node">
                      <span className="text-base text-gray-400 hover:text-white cursor-pointer">Node Infrastructure</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products#nft">
                      <span className="text-base text-gray-400 hover:text-white cursor-pointer">NFT APIs</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products#data">
                      <span className="text-base text-gray-400 hover:text-white cursor-pointer">Data Analytics</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/products#security">
                      <span className="text-base text-gray-400 hover:text-white cursor-pointer">Security</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Resources</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/documentation">
                      <span className="text-base text-gray-400 hover:text-white cursor-pointer">Documentation</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/documentation#api-reference">
                      <span className="text-base text-gray-400 hover:text-white cursor-pointer">API Reference</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/documentation#tutorials">
                      <span className="text-base text-gray-400 hover:text-white cursor-pointer">Tutorials</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <span className="text-base text-gray-400 hover:text-white cursor-pointer">Blog</span>
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
                      <span className="text-base text-gray-400 hover:text-white cursor-pointer">About</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers">
                      <span className="text-base text-gray-400 hover:text-white cursor-pointer">Careers</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/partners">
                      <span className="text-base text-gray-400 hover:text-white cursor-pointer">Partners</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <span className="text-base text-gray-400 hover:text-white cursor-pointer">Contact</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Legal</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link href="/privacy">
                      <span className="text-base text-gray-400 hover:text-white cursor-pointer">Privacy</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms">
                      <span className="text-base text-gray-400 hover:text-white cursor-pointer">Terms</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/cookies">
                      <span className="text-base text-gray-400 hover:text-white cursor-pointer">Cookie Policy</span>
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