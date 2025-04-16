import React, { useState } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest, queryClient } from "@/lib/queryClient";
import { ArrowLeft, Copy, Eye, EyeOff, RefreshCw, Shield, User } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Link } from "wouter";

export default function SettingsPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [showApiKey, setShowApiKey] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mutation for generating a new API key
  const generateApiKeyMutation = useMutation({
    mutationFn: async () => {
      const res = await apiRequest("POST", "/api/user/apikey");
      return await res.json();
    },
    onSuccess: (data: { apiKey: string }) => {
      queryClient.setQueryData(["/api/user"], (oldData: any) => ({
        ...oldData,
        apiKey: data.apiKey
      }));
      toast({
        title: "API Key Generated",
        description: "Your new API key has been generated successfully. The old key is no longer valid.",
      });
    },
    onError: () => {
      toast({
        title: "Failed to Generate API Key",
        description: "An error occurred while generating your API key. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleCopyApiKey = () => {
    if (user?.apiKey) {
      navigator.clipboard.writeText(user.apiKey)
        .then(() => {
          toast({
            title: "API Key Copied",
            description: "Your API key has been copied to clipboard.",
          });
        })
        .catch(() => {
          toast({
            title: "Copy Failed",
            description: "Failed to copy API key to clipboard.",
            variant: "destructive",
          });
        });
    }
  };

  const handleGenerateApiKey = () => {
    const confirmGenerate = window.confirm(
      "Generating a new API key will invalidate your current key. Any applications using the old key will stop working. Are you sure you want to continue?"
    );
    
    if (confirmGenerate) {
      generateApiKeyMutation.mutate();
    }
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Please log in to access settings</h1>
          <Link href="/auth">
            <Button>Log in</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 my-8 space-y-8 max-w-4xl">
      <div className="flex items-center gap-4">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Account Settings</h1>
      </div>

      <Tabs defaultValue="api-keys">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">
            <User className="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="api-keys">
            <Shield className="h-4 w-4 mr-2" />
            API Keys
          </TabsTrigger>
          <TabsTrigger value="security">
            <Shield className="h-4 w-4 mr-2" />
            Security
          </TabsTrigger>
        </TabsList>

        {/* Profile Tab */}
        <TabsContent value="profile" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>Update your account details and preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input id="username" defaultValue={user.username} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" defaultValue={user.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company (Optional)</Label>
                <Input id="company" placeholder="Your company name" />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full sm:w-auto">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* API Keys Tab */}
        <TabsContent value="api-keys" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>API Key Management</CardTitle>
              <CardDescription>
                Your API key grants access to your account via our API. Keep it secure and never share it publicly.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-col space-y-2">
                  <Label htmlFor="api-key">API Key</Label>
                  <div className="flex">
                    <div className="relative flex-1">
                      <Input 
                        id="api-key" 
                        value={user.apiKey} 
                        readOnly 
                        type={showApiKey ? "text" : "password"} 
                        className="pr-10 font-mono"
                      />
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute right-0 top-0 h-full"
                        onClick={() => setShowApiKey(!showApiKey)}
                      >
                        {showApiKey ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                    <Button 
                      variant="outline" 
                      className="ml-2"
                      onClick={handleCopyApiKey}
                    >
                      <Copy className="h-4 w-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 text-amber-800 rounded-md p-4 text-sm">
                  <p className="font-medium">Important Security Notice</p>
                  <p className="mt-1">
                    Protect your API key like a password. It grants access to your account and resources.
                    Don't include it in client-side code, public repositories, or share it with others.
                  </p>
                </div>

                <Button 
                  variant="destructive" 
                  onClick={handleGenerateApiKey}
                  disabled={generateApiKeyMutation.isPending}
                  className="mt-4"
                >
                  {generateApiKeyMutation.isPending ? (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <RefreshCw className="h-4 w-4 mr-2" />
                      Generate New API Key
                    </>
                  )}
                </Button>
              </div>

              <div className="space-y-4 pt-4 border-t">
                <h3 className="font-medium">API Access Settings</h3>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">CORS Allowed Origins</p>
                    <p className="text-sm text-muted-foreground">Control which domains can access your API</p>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Rate Limiting</p>
                    <p className="text-sm text-muted-foreground">Set custom rate limits for your API key</p>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">IP Restrictions</p>
                    <p className="text-sm text-muted-foreground">Restrict API access to specific IP addresses</p>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>API Usage Statistics</CardTitle>
              <CardDescription>
                Monitor your API usage and ensure you stay within your plan limits
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">Current Plan</p>
                    <p className="text-lg font-bold">Free Developer</p>
                  </div>
                  <Button>Upgrade Plan</Button>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <p>API Calls (Monthly)</p>
                    <p className="font-medium">5,240 / 10,000</p>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: '52.4%' }}></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  <div className="border rounded-md p-4">
                    <p className="text-sm text-muted-foreground">Daily Calls (Avg)</p>
                    <p className="text-2xl font-bold">174</p>
                  </div>
                  <div className="border rounded-md p-4">
                    <p className="text-sm text-muted-foreground">Error Rate</p>
                    <p className="text-2xl font-bold">2.1%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security Tab */}
        <TabsContent value="security" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
              <CardDescription>Manage your account security preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                <Switch id="2fa" />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="font-medium">Session Timeout</p>
                  <p className="text-sm text-muted-foreground">Automatically log out after a period of inactivity</p>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <p className="font-medium">Login History</p>
                  <p className="text-sm text-muted-foreground">View your recent login activity</p>
                </div>
                <Button variant="outline" size="sm">View History</Button>
              </div>
              
              <div className="pt-4">
                <Button variant="destructive" className="w-full sm:w-auto">
                  Change Password
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}