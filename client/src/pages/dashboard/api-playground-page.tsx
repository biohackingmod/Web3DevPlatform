import React from "react";
import ApiPlayground from "@/components/ApiPlayground";
import { ArrowLeft, BookOpen, Code, Copy, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function ApiPlaygroundPage() {
  return (
    <div>
      <div className="bg-secondary/30 border-b px-8 py-4">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold">API Playground</h1>
          </div>
          <p className="text-muted-foreground">
            Test and explore our API endpoints with live responses. 
            No additional configuration needed — just select an endpoint and start experimenting.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <a 
              href="/documentation/api-reference" 
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <BookOpen className="h-4 w-4" /> API Reference
            </a>
            <a 
              href="/documentation/sdks" 
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Code className="h-4 w-4" /> SDK Documentation
            </a>
            <a 
              href="/documentation/cli" 
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Terminal className="h-4 w-4" /> CLI Tools
            </a>
            <a 
              href="/dashboard/settings" 
              className="flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Copy className="h-4 w-4" /> API Keys
            </a>
          </div>
        </div>
      </div>
      
      <ApiPlayground />
    </div>
  );
}