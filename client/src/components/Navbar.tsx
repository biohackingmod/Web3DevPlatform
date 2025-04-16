import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronDown, Menu } from "lucide-react";
import { Logo } from "@/lib/icons";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { 
      name: "Products", 
      path: "/products",
      dropdown: [
        { name: "Node Infrastructure", path: "/products#node" },
        { name: "NFT APIs", path: "/products#nft" },
        { name: "Data APIs", path: "/products#data" },
      ]
    },
    { name: "Documentation", path: "/documentation" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
  ];

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <a className="flex items-center">
                  <Logo className="h-8 w-auto" />
                  <span className="ml-2 text-xl font-bold text-gray-900">BlockchainKit</span>
                </a>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navLinks.map((link) => 
                link.dropdown ? (
                  <DropdownMenu key={link.name}>
                    <DropdownMenuTrigger asChild>
                      <button className={`
                        inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 
                        ${isActive(link.path) 
                          ? 'border-primary text-gray-900' 
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                        transition-colors
                      `}>
                        {link.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center">
                      {link.dropdown.map((item) => (
                        <DropdownMenuItem key={item.name} asChild>
                          <Link href={item.path}>
                            <span className="w-full cursor-pointer block">{item.name}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link key={link.name} href={link.path}>
                    <span className={`
                      inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer
                      ${isActive(link.path) 
                        ? 'border-primary text-gray-900' 
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}
                      transition-colors
                    `}>
                      {link.name}
                    </span>
                  </Link>
                )
              )}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/login">
              <span className="text-gray-500 hover:text-gray-700 px-3 py-2 text-sm font-medium cursor-pointer">
                Sign in
              </span>
            </Link>
            <Link href="/register">
              <Button className="cursor-pointer">
                Start Building
              </Button>
            </Link>
          </div>
          <div className="flex items-center sm:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-4">
                  {navLinks.map((link) => (
                    <Link key={link.name} href={link.path}>
                      <span 
                        className={`px-3 py-2 text-base font-medium rounded-md block cursor-pointer ${
                          isActive(link.path) 
                            ? 'bg-primary-50 text-primary' 
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </span>
                    </Link>
                  ))}
                  <div className="border-t border-gray-200 pt-4 mt-4">
                    <Link href="/login">
                      <span 
                        className="px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 rounded-md block cursor-pointer"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign in
                      </span>
                    </Link>
                    <Link href="/register">
                      <Button className="w-full mt-3 cursor-pointer" onClick={() => setIsOpen(false)}>
                        Start Building
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
