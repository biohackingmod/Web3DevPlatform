import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Documentation from "@/pages/Documentation";
import Pricing from "@/pages/Pricing";
import Products from "@/pages/Products";
import Blog from "@/pages/Blog";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Contact from "@/pages/Contact";
import About from "@/pages/About";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import Cookies from "@/pages/Cookies";
import Careers from "@/pages/Careers";
import Partners from "@/pages/Partners";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DashboardPage from "@/pages/dashboard";
import ApiPlaygroundPage from "@/pages/dashboard/api-playground-page";
import SettingsPage from "@/pages/dashboard/settings";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "@/lib/protected-route";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/documentation" component={Documentation} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/products" component={Products} />
          <Route path="/blog" component={Blog} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/cookies" component={Cookies} />
          <Route path="/careers" component={Careers} />
          <Route path="/partners" component={Partners} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
