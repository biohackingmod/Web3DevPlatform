import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Globe, Code, LineChart, Users, Zap, Shield } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Founded", value: "2023" },
    { label: "Employees", value: "50+" },
    { label: "Countries", value: "12" },
    { label: "Developers", value: "1000+" },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in Web3.",
      icon: Zap,
    },
    {
      title: "Reliability",
      description: "Our infrastructure is built for 99.99% uptime and enterprise-grade reliability.",
      icon: Shield,
    },
    {
      title: "Developer-First",
      description: "Every feature we build starts with the developer experience in mind.",
      icon: Code,
    },
    {
      title: "Transparency",
      description: "We believe in open communication with our community and customers.",
      icon: Globe,
    },
    {
      title: "Data-Driven",
      description: "We make decisions based on metrics and feedback from our users.",
      icon: LineChart,
    },
    {
      title: "Community",
      description: "We're building a global community of Web3 developers and enthusiasts.",
      icon: Users,
    },
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      bio: "Previously led blockchain initiatives at a Fortune 500 tech company.",
      imageSrc: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Michael Chen",
      role: "CTO",
      bio: "10+ years experience in distributed systems and blockchain development.",
      imageSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Aisha Patel",
      role: "Head of Product",
      bio: "Former product lead at a major crypto exchange.",
      imageSrc: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "James Wilson",
      role: "Head of Engineering",
      bio: "Architected several popular open-source blockchain tools.",
      imageSrc: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Our mission is to</span>
                  <span className="block text-indigo-400">accelerate Web3 adoption</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0 md:mt-5 md:text-xl">
                  We're building the infrastructure that powers the decentralized internet, making blockchain technology accessible to developers worldwide.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/register">
                      <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer">
                        Join our team
                      </Button>
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link href="/contact">
                      <Button variant="outline" className="w-full text-white border-white hover:bg-gray-800 cursor-pointer">
                        Contact us
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="bg-gray-50 pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Trusted by developers around the world
            </h2>
            <p className="mt-3 text-xl text-gray-500 sm:mt-4">
              We're helping teams build the next generation of decentralized applications.
            </p>
          </div>
        </div>
        <div className="mt-10 pb-12 bg-white sm:pb-16">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-gray-50"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <div className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                      <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500">
                        {stat.label}
                      </dt>
                      <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Values</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What we believe in
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our values guide everything we do, from product development to customer interactions.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {values.map((value) => (
                <div key={value.title} className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-600 text-white">
                      <value.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">{value.title}</h3>
                    <p className="mt-2 text-base text-gray-500">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team section */}
      <div className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet our leadership team
            </h2>
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              A diverse group of experts passionate about blockchain technology.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-48 w-48 rounded-full object-cover"
                    src={member.imageSrc}
                    alt={member.name}
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-indigo-600">{member.role}</p>
                  <p className="mt-1 text-sm text-gray-500">{member.bio}</p>
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
            <span className="block">Join us in building the future</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-100">
            Whether you're a developer, investor, or enthusiast, there's a place for you in our ecosystem.
          </p>
          <Link href="/register">
            <Button size="lg" className="mt-8 w-full sm:w-auto bg-white text-indigo-700 border border-transparent rounded-md shadow-sm hover:bg-indigo-50 cursor-pointer">
              Get started for free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}