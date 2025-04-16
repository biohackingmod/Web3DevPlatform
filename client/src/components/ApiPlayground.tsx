import React, { useState, useEffect } from "react";
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Play, Copy, Check, Code, Info, BookOpen } from "lucide-react";

interface Endpoint {
  id: string;
  name: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  path: string;
  description: string;
  requiresAuth: boolean;
  queryParams?: ParamSpec[];
  bodyParams?: ParamSpec[];
  pathParams?: ParamSpec[];
  headers?: ParamSpec[];
  codeExamples: {
    curl: string;
    javascript: string;
    python: string;
  };
  category: "blockchain" | "nft" | "account" | "smartcontract" | "analytics";
}

interface ParamSpec {
  name: string;
  type: "string" | "number" | "boolean" | "object" | "array";
  description: string;
  required?: boolean;
  default?: string | number | boolean;
  enum?: string[];
}

const ENDPOINTS: Endpoint[] = [
  {
    id: "chains",
    name: "List Chains",
    method: "GET",
    path: "/api/chains",
    description: "Get a list of all supported blockchain networks",
    requiresAuth: false,
    codeExamples: {
      curl: 'curl -X GET "https://api.blockchainkit.com/api/chains" \\\n  -H "x-api-key: YOUR_API_KEY"',
      javascript: `const response = await fetch('https://api.blockchainkit.com/api/chains', {
  headers: {
    'x-api-key': 'YOUR_API_KEY'
  }
});
const data = await response.json();
console.log(data);`,
      python: `import requests

response = requests.get(
    'https://api.blockchainkit.com/api/chains',
    headers={'x-api-key': 'YOUR_API_KEY'}
)
data = response.json()
print(data)`
    },
    category: "blockchain"
  },
  {
    id: "gas",
    name: "Gas Prices",
    method: "GET",
    path: "/api/gas",
    description: "Get current gas prices for a specified blockchain",
    requiresAuth: false,
    queryParams: [
      {
        name: "chain",
        type: "string",
        description: "Blockchain network ID",
        required: false,
        default: "ethereum",
        enum: ["ethereum", "polygon", "arbitrum", "optimism", "avalanche"]
      }
    ],
    codeExamples: {
      curl: 'curl -X GET "https://api.blockchainkit.com/api/gas?chain=ethereum" \\\n  -H "x-api-key: YOUR_API_KEY"',
      javascript: `const response = await fetch('https://api.blockchainkit.com/api/gas?chain=ethereum', {
  headers: {
    'x-api-key': 'YOUR_API_KEY'
  }
});
const data = await response.json();
console.log(data);`,
      python: `import requests

response = requests.get(
    'https://api.blockchainkit.com/api/gas',
    params={'chain': 'ethereum'},
    headers={'x-api-key': 'YOUR_API_KEY'}
)
data = response.json()
print(data)`
    },
    category: "blockchain"
  },
  {
    id: "nfts",
    name: "Get NFTs by Address",
    method: "GET",
    path: "/api/nfts/:address",
    description: "Get all NFTs owned by a specific address",
    requiresAuth: true,
    pathParams: [
      {
        name: "address",
        type: "string",
        description: "Wallet address to check for NFTs",
        required: true
      }
    ],
    queryParams: [
      {
        name: "chain",
        type: "string",
        description: "Blockchain network ID",
        required: false,
        default: "ethereum",
        enum: ["ethereum", "polygon", "solana"]
      }
    ],
    codeExamples: {
      curl: 'curl -X GET "https://api.blockchainkit.com/api/nfts/0x123...abc?chain=ethereum" \\\n  -H "x-api-key: YOUR_API_KEY"',
      javascript: `const address = '0x123...abc';
const response = await fetch(\`https://api.blockchainkit.com/api/nfts/\${address}?chain=ethereum\`, {
  headers: {
    'x-api-key': 'YOUR_API_KEY'
  }
});
const data = await response.json();
console.log(data);`,
      python: `import requests

address = '0x123...abc'
response = requests.get(
    f'https://api.blockchainkit.com/api/nfts/{address}',
    params={'chain': 'ethereum'},
    headers={'x-api-key': 'YOUR_API_KEY'}
)
data = response.json()
print(data)`
    },
    category: "nft"
  },
  {
    id: "contracts",
    name: "List Contracts",
    method: "GET",
    path: "/api/contracts",
    description: "Get a list of all deployed smart contracts for your account",
    requiresAuth: true,
    codeExamples: {
      curl: 'curl -X GET "https://api.blockchainkit.com/api/contracts" \\\n  -H "x-api-key: YOUR_API_KEY"',
      javascript: `const response = await fetch('https://api.blockchainkit.com/api/contracts', {
  headers: {
    'x-api-key': 'YOUR_API_KEY'
  }
});
const data = await response.json();
console.log(data);`,
      python: `import requests

response = requests.get(
    'https://api.blockchainkit.com/api/contracts',
    headers={'x-api-key': 'YOUR_API_KEY'}
)
data = response.json()
print(data)`
    },
    category: "smartcontract"
  },
  {
    id: "ai-code",
    name: "Generate Smart Contract Code",
    method: "POST",
    path: "/api/ai/code",
    description: "Generate smart contract code or examples based on a prompt",
    requiresAuth: true,
    bodyParams: [
      {
        name: "prompt",
        type: "string",
        description: "Description of the smart contract or code you want to generate",
        required: true
      },
      {
        name: "language",
        type: "string",
        description: "The programming language or smart contract language",
        required: false,
        default: "solidity"
      }
    ],
    codeExamples: {
      curl: 'curl -X POST "https://api.blockchainkit.com/api/ai/code" \\\n  -H "Content-Type: application/json" \\\n  -H "x-api-key: YOUR_API_KEY" \\\n  -d \'{"prompt": "Create an ERC721 NFT contract with royalties", "language": "solidity"}\'',
      javascript: `const response = await fetch('https://api.blockchainkit.com/api/ai/code', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': 'YOUR_API_KEY'
  },
  body: JSON.stringify({
    prompt: 'Create an ERC721 NFT contract with royalties',
    language: 'solidity'
  })
});
const data = await response.json();
console.log(data);`,
      python: `import requests

response = requests.post(
    'https://api.blockchainkit.com/api/ai/code',
    json={
        'prompt': 'Create an ERC721 NFT contract with royalties',
        'language': 'solidity'
    },
    headers={'x-api-key': 'YOUR_API_KEY'}
)
data = response.json()
print(data)`
    },
    category: "smartcontract"
  },
  {
    id: "usage",
    name: "Get API Usage",
    method: "GET",
    path: "/api/usage",
    description: "Get usage statistics for your account",
    requiresAuth: true,
    codeExamples: {
      curl: 'curl -X GET "https://api.blockchainkit.com/api/usage" \\\n  -H "x-api-key: YOUR_API_KEY"',
      javascript: `const response = await fetch('https://api.blockchainkit.com/api/usage', {
  headers: {
    'x-api-key': 'YOUR_API_KEY'
  }
});
const data = await response.json();
console.log(data);`,
      python: `import requests

response = requests.get(
    'https://api.blockchainkit.com/api/usage',
    headers={'x-api-key': 'YOUR_API_KEY'}
)
data = response.json()
print(data)`
    },
    category: "account"
  }
];

export function ApiPlayground() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [selectedEndpoint, setSelectedEndpoint] = useState<Endpoint | null>(ENDPOINTS[0] || null);
  const [queryParams, setQueryParams] = useState<Record<string, string>>({});
  const [bodyParams, setBodyParams] = useState<Record<string, string>>({});
  const [pathParams, setPathParams] = useState<Record<string, string>>({});
  const [apiKey, setApiKey] = useState<string>(user?.apiKey || "");
  const [responseData, setResponseData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("curl");
  const [copySuccess, setCopySuccess] = useState<string | null>(null);
  const [category, setCategory] = useState<string>("all");

  useEffect(() => {
    if (user?.apiKey) {
      setApiKey(user.apiKey);
    }
  }, [user?.apiKey]);

  useEffect(() => {
    // Reset params when endpoint changes
    if (selectedEndpoint) {
      setQueryParams({});
      setBodyParams({});
      setPathParams({});
      
      // Set default values for query params
      const defaultQueryParams: Record<string, string> = {};
      selectedEndpoint.queryParams?.forEach(param => {
        if (param.default !== undefined) {
          defaultQueryParams[param.name] = String(param.default);
        }
      });
      setQueryParams(defaultQueryParams);
    }
  }, [selectedEndpoint]);

  const handleSelectEndpoint = (endpointId: string) => {
    const endpoint = ENDPOINTS.find(e => e.id === endpointId);
    if (endpoint) {
      setSelectedEndpoint(endpoint);
      setResponseData(null);
    }
  };

  const handleQueryParamChange = (name: string, value: string) => {
    setQueryParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleBodyParamChange = (name: string, value: string) => {
    setBodyParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePathParamChange = (name: string, value: string) => {
    setPathParams(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const buildUrl = () => {
    if (!selectedEndpoint) return "";

    // Replace path params
    let url = selectedEndpoint.path;
    Object.entries(pathParams).forEach(([key, value]) => {
      url = url.replace(`:${key}`, encodeURIComponent(value));
    });

    // Add query params
    const queryString = Object.entries(queryParams)
      .filter(([_, value]) => value !== "")
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join("&");

    if (queryString) {
      url = `${url}?${queryString}`;
    }

    return url;
  };

  const filteredEndpoints = category === "all" 
    ? ENDPOINTS 
    : ENDPOINTS.filter(endpoint => endpoint.category === category);

  const executeRequest = async () => {
    if (!selectedEndpoint) return;

    const url = buildUrl();
    if (!url) return;

    if (selectedEndpoint.requiresAuth && !apiKey) {
      toast({
        title: "API Key Required",
        description: "Please enter your API key to make this request",
        variant: "destructive"
      });
      return;
    }

    // Check required path params
    const missingPathParams = selectedEndpoint.pathParams?.filter(
      param => param.required && !pathParams[param.name]
    );
    
    if (missingPathParams && missingPathParams.length > 0) {
      toast({
        title: "Missing Required Path Parameters",
        description: `Please provide values for: ${missingPathParams.map(p => p.name).join(", ")}`,
        variant: "destructive"
      });
      return;
    }

    // Check required body params
    const missingBodyParams = selectedEndpoint.bodyParams?.filter(
      param => param.required && !bodyParams[param.name]
    );
    
    if (missingBodyParams && missingBodyParams.length > 0) {
      toast({
        title: "Missing Required Body Parameters",
        description: `Please provide values for: ${missingBodyParams.map(p => p.name).join(", ")}`,
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    setResponseData(null);

    try {
      const options: RequestInit = {
        method: selectedEndpoint.method,
        headers: {
          "Content-Type": "application/json",
        },
      };

      if (apiKey) {
        options.headers = {
          ...options.headers,
          "x-api-key": apiKey
        };
      }

      if (selectedEndpoint.method !== "GET" && selectedEndpoint.bodyParams) {
        options.body = JSON.stringify(bodyParams);
      }

      const response = await fetch(url, options);
      const data = await response.json();
      
      setResponseData({
        status: response.status,
        data: data
      });
    } catch (error) {
      console.error("API request failed:", error);
      setResponseData({
        status: 500,
        data: { error: "Failed to execute request. Check your browser console for details." }
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopySuccess(selectedLanguage);
        setTimeout(() => setCopySuccess(null), 2000);
      })
      .catch(() => {
        toast({
          title: "Copy Failed",
          description: "Failed to copy code to clipboard",
          variant: "destructive"
        });
      });
  };

  const formatJson = (obj: any): string => {
    return JSON.stringify(obj, null, 2);
  };

  return (
    <div className="container mx-auto p-4 my-8 space-y-8">
      <div className="flex flex-col sm:flex-row gap-6">
        {/* Endpoints List */}
        <div className="w-full sm:w-1/3 space-y-4">
          <div className="p-4 bg-card rounded-lg border">
            <h2 className="text-xl font-bold mb-4">API Endpoints</h2>
            
            <div className="mb-4">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="blockchain">Blockchain</SelectItem>
                  <SelectItem value="nft">NFT</SelectItem>
                  <SelectItem value="smartcontract">Smart Contracts</SelectItem>
                  <SelectItem value="account">Account</SelectItem>
                  <SelectItem value="analytics">Analytics</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              {filteredEndpoints.map((endpoint) => (
                <div 
                  key={endpoint.id}
                  onClick={() => handleSelectEndpoint(endpoint.id)}
                  className={`p-3 rounded-md cursor-pointer border flex justify-between items-center
                    ${selectedEndpoint?.id === endpoint.id ? 'bg-primary/10 border-primary' : 'hover:bg-muted'}`}
                >
                  <div>
                    <div className="font-medium">{endpoint.name}</div>
                    <div className="text-sm text-muted-foreground">{endpoint.path}</div>
                  </div>
                  <div className={`px-2 py-1 text-xs rounded-md uppercase font-semibold
                    ${endpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' : 
                      endpoint.method === 'PUT' ? 'bg-amber-100 text-amber-800' : 
                      'bg-red-100 text-red-800'}`}
                  >
                    {endpoint.method}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Endpoint Details & Testing */}
        <div className="w-full sm:w-2/3 space-y-4">
          {selectedEndpoint && (
            <>
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>{selectedEndpoint.name}</CardTitle>
                      <CardDescription className="mt-1">{selectedEndpoint.description}</CardDescription>
                    </div>
                    <div className={`px-2 py-1 text-xs rounded-md uppercase font-semibold
                      ${selectedEndpoint.method === 'GET' ? 'bg-green-100 text-green-800' : 
                        selectedEndpoint.method === 'POST' ? 'bg-blue-100 text-blue-800' : 
                        selectedEndpoint.method === 'PUT' ? 'bg-amber-100 text-amber-800' : 
                        'bg-red-100 text-red-800'}`}
                    >
                      {selectedEndpoint.method}
                    </div>
                  </div>
                  <div className="mt-2 text-sm font-mono bg-secondary/40 p-2 rounded-md">
                    {selectedEndpoint.path}
                  </div>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="parameters">
                    <TabsList className="mb-4">
                      <TabsTrigger value="parameters">Parameters</TabsTrigger>
                      <TabsTrigger value="code-examples">Code Examples</TabsTrigger>
                      <TabsTrigger value="auth">Authentication</TabsTrigger>
                    </TabsList>

                    {/* Parameters Tab */}
                    <TabsContent value="parameters" className="space-y-4">
                      {/* Path Parameters */}
                      {selectedEndpoint.pathParams && selectedEndpoint.pathParams.length > 0 && (
                        <div className="space-y-2">
                          <h3 className="font-semibold">Path Parameters</h3>
                          {selectedEndpoint.pathParams.map(param => (
                            <div key={param.name} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                              <div className="space-y-1">
                                <Label htmlFor={`path-${param.name}`} className="flex items-center gap-1">
                                  {param.name}
                                  {param.required && <span className="text-red-500">*</span>}
                                </Label>
                                <div className="text-xs text-muted-foreground">{param.description}</div>
                                <div className="text-xs text-muted-foreground font-mono">{param.type}</div>
                              </div>
                              <div className="md:col-span-2">
                                <Input 
                                  id={`path-${param.name}`}
                                  value={pathParams[param.name] || ""}
                                  onChange={(e) => handlePathParamChange(param.name, e.target.value)}
                                  placeholder={param.required ? "Required" : "Optional"}
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Query Parameters */}
                      {selectedEndpoint.queryParams && selectedEndpoint.queryParams.length > 0 && (
                        <div className="space-y-2">
                          <h3 className="font-semibold">Query Parameters</h3>
                          {selectedEndpoint.queryParams.map(param => (
                            <div key={param.name} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                              <div className="space-y-1">
                                <Label htmlFor={`query-${param.name}`} className="flex items-center gap-1">
                                  {param.name}
                                  {param.required && <span className="text-red-500">*</span>}
                                </Label>
                                <div className="text-xs text-muted-foreground">{param.description}</div>
                                <div className="text-xs text-muted-foreground font-mono">{param.type}</div>
                                {param.default !== undefined && (
                                  <div className="text-xs text-muted-foreground">Default: {String(param.default)}</div>
                                )}
                              </div>
                              <div className="md:col-span-2">
                                {param.enum ? (
                                  <Select 
                                    value={queryParams[param.name] || ""} 
                                    onValueChange={(value) => handleQueryParamChange(param.name, value)}
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder={param.required ? "Required" : "Optional"} />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {param.enum.map(option => (
                                        <SelectItem key={option} value={option}>{option}</SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                ) : (
                                  <Input 
                                    id={`query-${param.name}`}
                                    value={queryParams[param.name] || ""}
                                    onChange={(e) => handleQueryParamChange(param.name, e.target.value)}
                                    placeholder={param.required ? "Required" : "Optional"}
                                  />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Body Parameters */}
                      {selectedEndpoint.bodyParams && selectedEndpoint.bodyParams.length > 0 && (
                        <div className="space-y-2">
                          <h3 className="font-semibold">Body Parameters</h3>
                          {selectedEndpoint.bodyParams.map(param => (
                            <div key={param.name} className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
                              <div className="space-y-1">
                                <Label htmlFor={`body-${param.name}`} className="flex items-center gap-1">
                                  {param.name}
                                  {param.required && <span className="text-red-500">*</span>}
                                </Label>
                                <div className="text-xs text-muted-foreground">{param.description}</div>
                                <div className="text-xs text-muted-foreground font-mono">{param.type}</div>
                              </div>
                              <div className="md:col-span-2">
                                {param.type === "object" ? (
                                  <Textarea 
                                    id={`body-${param.name}`}
                                    value={bodyParams[param.name] || ""}
                                    onChange={(e) => handleBodyParamChange(param.name, e.target.value)}
                                    placeholder={`{\n  "key": "value"\n}`}
                                    rows={5}
                                  />
                                ) : (
                                  <Input 
                                    id={`body-${param.name}`}
                                    value={bodyParams[param.name] || ""}
                                    onChange={(e) => handleBodyParamChange(param.name, e.target.value)}
                                    placeholder={param.required ? "Required" : "Optional"}
                                  />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {(!selectedEndpoint.pathParams || selectedEndpoint.pathParams.length === 0) &&
                       (!selectedEndpoint.queryParams || selectedEndpoint.queryParams.length === 0) &&
                       (!selectedEndpoint.bodyParams || selectedEndpoint.bodyParams.length === 0) && (
                        <div className="text-muted-foreground italic">
                          This endpoint does not require any parameters.
                        </div>
                      )}
                    </TabsContent>

                    {/* Code Examples Tab */}
                    <TabsContent value="code-examples">
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          <Button 
                            variant={selectedLanguage === "curl" ? "default" : "outline"} 
                            size="sm"
                            onClick={() => setSelectedLanguage("curl")}
                          >
                            cURL
                          </Button>
                          <Button 
                            variant={selectedLanguage === "javascript" ? "default" : "outline"} 
                            size="sm"
                            onClick={() => setSelectedLanguage("javascript")}
                          >
                            JavaScript
                          </Button>
                          <Button 
                            variant={selectedLanguage === "python" ? "default" : "outline"} 
                            size="sm"
                            onClick={() => setSelectedLanguage("python")}
                          >
                            Python
                          </Button>
                        </div>

                        <div className="relative">
                          <pre className="bg-black text-white p-4 rounded-md overflow-x-auto">
                            <code>{selectedEndpoint.codeExamples[selectedLanguage as keyof typeof selectedEndpoint.codeExamples]}</code>
                          </pre>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="absolute top-2 right-2"
                            onClick={() => handleCopyCode(selectedEndpoint.codeExamples[selectedLanguage as keyof typeof selectedEndpoint.codeExamples])}
                          >
                            {copySuccess === selectedLanguage ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                    </TabsContent>

                    {/* Authentication Tab */}
                    <TabsContent value="auth">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="api-key">API Key</Label>
                          <Input 
                            id="api-key"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            placeholder="Enter your API key"
                            className="font-mono"
                          />
                          {selectedEndpoint.requiresAuth ? (
                            <div className="flex items-center text-sm text-amber-600 gap-2 mt-2">
                              <Info className="h-4 w-4" />
                              This endpoint requires authentication
                            </div>
                          ) : (
                            <div className="flex items-center text-sm text-green-600 gap-2 mt-2">
                              <Info className="h-4 w-4" />
                              This endpoint can be accessed without an API key
                            </div>
                          )}
                        </div>

                        <div className="bg-secondary/30 p-4 rounded-md space-y-2">
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold">Authentication Guide</h3>
                          </div>
                          <p className="text-sm">API keys should be included in the <code className="bg-secondary px-1 rounded">x-api-key</code> HTTP header.</p>
                          <p className="text-sm">You can generate or regenerate your API key in the <a href="/dashboard/settings" className="text-primary hover:underline">Account Settings</a> page.</p>
                          <div className="pt-2 flex flex-col gap-3">
                            <p className="text-sm font-semibold">For security best practices:</p>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Never expose your API key in client-side code</li>
                              <li>Use environment variables to store your key</li>
                              <li>Rotate your API key regularly</li>
                              <li>Set appropriate CORS and referrer policies</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    onClick={executeRequest}
                    disabled={isLoading}
                    className="gap-2"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Executing...
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4" />
                        Execute Request
                      </>
                    )}
                  </Button>
                  <div className="text-sm text-muted-foreground font-mono">
                    {selectedEndpoint.method} {buildUrl()}
                  </div>
                </CardFooter>
              </Card>

              {/* Response Display */}
              {responseData && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      Response
                      <span className={`text-sm font-mono px-2 py-1 rounded-md ${
                        responseData.status >= 200 && responseData.status < 300
                          ? "bg-green-100 text-green-800"
                          : "bg-red-100 text-red-800"
                      }`}>
                        Status: {responseData.status}
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-black text-white p-4 rounded-md overflow-x-auto">
                      <pre>{formatJson(responseData.data)}</pre>
                    </div>
                  </CardContent>
                </Card>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ApiPlayground;