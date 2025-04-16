import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, DollarSign, Clock, Users, Zap, BookOpen, Globe, Heart } from "lucide-react";
import { Link } from "wouter";

export default function Careers() {
  const perks = [
    {
      title: "Remote-First Culture",
      description: "Work from anywhere in the world with flexible hours.",
      icon: Globe,
    },
    {
      title: "Competitive Compensation",
      description: "Salary, equity, and bonuses that reward your contributions.",
      icon: DollarSign,
    },
    {
      title: "Continuous Learning",
      description: "Professional development budget and regular learning sessions.",
      icon: BookOpen,
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive healthcare and wellness programs.",
      icon: Heart,
    },
    {
      title: "Team Retreats",
      description: "Regular company retreats to build relationships and have fun.",
      icon: Users,
    },
    {
      title: "Growth Opportunities",
      description: "Clear career paths and mentorship programs.",
      icon: Zap,
    },
  ];

  const openings = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote (US/Europe)",
      type: "Full-time",
      description: "Build beautiful, responsive interfaces for our Web3 developer tools and dashboards.",
      skills: ["React", "TypeScript", "UI/UX", "Web3.js"],
      salary: "$130K - $160K",
    },
    {
      title: "Blockchain Engineer",
      department: "Engineering",
      location: "Remote (Global)",
      type: "Full-time",
      description: "Design and implement high-performance services that interact with multiple blockchain networks.",
      skills: ["Ethereum", "Solidity", "Go or Rust", "Distributed Systems"],
      salary: "$140K - $180K",
    },
    {
      title: "Developer Relations",
      department: "Marketing",
      location: "Remote (US/Europe)",
      type: "Full-time",
      description: "Build relationships with blockchain developers and help them succeed with our platform.",
      skills: ["Technical Communication", "Community Building", "Web3 Knowledge", "Public Speaking"],
      salary: "$120K - $150K",
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote (US/Europe)",
      type: "Full-time",
      description: "Lead product development for our API products, from conception to launch and beyond.",
      skills: ["Product Strategy", "Technical Background", "User Research", "Data Analysis"],
      salary: "$140K - $170K",
    },
    {
      title: "Technical Support Specialist",
      department: "Customer Success",
      location: "Remote (Global)",
      type: "Full-time",
      description: "Help developers implement our APIs and troubleshoot issues with our platform.",
      skills: ["Web3 Knowledge", "Problem Solving", "Communication", "Technical Writing"],
      salary: "$90K - $110K",
    },
    {
      title: "Growth Marketing Manager",
      department: "Marketing",
      location: "Remote (US/Europe)",
      type: "Full-time",
      description: "Develop and execute strategies to grow our user base and increase platform adoption.",
      skills: ["B2B Marketing", "Analytics", "Campaign Management", "Technical Background"],
      salary: "$110K - $140K",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative overflow-hidden">
        <div className="bg-indigo-900 py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
                Join Our Team
              </h1>
              <p className="mt-6 max-w-2xl mx-auto text-xl text-indigo-200">
                Help us build the future of blockchain infrastructure and empower the next generation of Web3 developers.
              </p>
              <div className="mt-8">
                <Link href="#openings">
                  <Button size="lg" className="bg-white text-indigo-700 hover:bg-indigo-50 cursor-pointer">
                    View Open Positions
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our mission section */}
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              At BlockchainKit, we're building the infrastructure that powers the decentralized internet.
            </p>
          </div>
          <div className="mt-12 max-w-3xl mx-auto text-lg text-gray-500 leading-7">
            <p>
              We believe that blockchain technology has the potential to transform industries, empower individuals, and create a more accessible financial system. Our mission is to provide developers with the tools they need to build this future.
            </p>
            <p className="mt-6">
              As a team, we value technical excellence, user empathy, and bold innovation. We're looking for passionate individuals who are excited about Web3, care deeply about developer experience, and want to make a real impact in this space.
            </p>
            <p className="mt-6">
              If you're motivated by tackling complex technical challenges, creating products that developers love, and working in a fast-paced, high-growth environment, we'd love to hear from you.
            </p>
          </div>
        </div>
      </div>

      {/* Perks section */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Life at BlockchainKit
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We believe in taking care of our team and creating an environment where everyone can do their best work.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <perk.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">{perk.title}</h3>
                  <p className="mt-2 text-base text-gray-500">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Open positions section */}
      <div id="openings" className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Open Positions
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Find the perfect role for your skills and interests.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {openings.map((job, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{job.title}</CardTitle>
                      <CardDescription className="mt-1">{job.department}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge variant="outline" className="flex items-center gap-1 border-gray-300">
                        <MapPin className="h-3 w-3" /> {job.location}
                      </Badge>
                      <Badge variant="outline" className="flex items-center gap-1 border-gray-300">
                        <Clock className="h-3 w-3" /> {job.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-500 mb-2">Skills & Requirements:</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <Badge key={idx} className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center text-gray-500">
                      <DollarSign className="h-4 w-4 mr-1" />
                      <span className="text-sm">{job.salary}</span>
                    </div>
                    <Link href={`/careers/${job.title.toLowerCase().replace(/\s+/g, '-')}`}>
                      <Button className="cursor-pointer">Apply Now</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-indigo-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Don't see the perfect fit?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            We're always looking for talented individuals to join our team. Send us your resume and we'll reach out when a suitable position opens up.
          </p>
          <Link href="/contact">
            <Button size="lg" className="mt-8 w-full sm:w-auto bg-white text-indigo-700 border border-transparent rounded-md shadow-sm hover:bg-indigo-50 cursor-pointer">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}