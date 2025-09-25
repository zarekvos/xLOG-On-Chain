import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { config } from './lib/wagmi';
import Home from "@/pages/home";
import Features from "@/pages/features";
import Blogs from "@/pages/blogs";
import Docs from "@/pages/docs";
import Dashboard from "@/pages/dashboard";
import PostDetail from "@/pages/post-detail";
import NotFound from "@/pages/not-found";

import '@rainbow-me/rainbowkit/styles.css';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/docs" component={Docs} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/post/:id" component={PostDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
