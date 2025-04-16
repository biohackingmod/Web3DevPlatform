import { useAuth } from "@/hooks/use-auth";
import { Redirect } from "wouter";
import ApiPlayground from "@/components/ApiPlayground";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PlaygroundPage() {
  const { user, isLoading } = useAuth();

  // If user is not logged in, redirect to auth page
  if (!isLoading && !user) {
    return <Redirect to="/auth" />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
              API Playground
            </h1>
            <p className="text-xl text-muted-foreground">
              Test and explore our API endpoints interactively
            </p>
          </div>

          {!user ? (
            <Card>
              <CardHeader>
                <CardTitle>Authentication Required</CardTitle>
                <CardDescription>
                  Please log in to access the API Playground and test endpoints with your API key.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild>
                  <a href="/auth">Sign In</a>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <ApiPlayground />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}