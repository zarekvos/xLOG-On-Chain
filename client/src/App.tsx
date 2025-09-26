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
import CreateBlog from "@/pages/create-blog";
import PostDetail from "@/pages/post-detail";
import ApiReferences from "@/pages/api-references";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import NotFound from "@/pages/not-found";

// Documentation pages
import QuickStartGuide from "@/pages/docs/quick-start";
import WalletSetup from "@/pages/docs/wallet-setup";
import NetworkSelection from "@/pages/docs/network-selection";
import PublishingFirstPost from "@/pages/docs/publishing-first-post";
import ContentManagement from "@/pages/docs/content-management";
import MultiChainPublishing from "@/pages/docs/multi-chain-publishing";
import ContentMonetization from "@/pages/docs/content-monetization";
import { 
  SmartContractIntegration,
  SDKDocumentation,
  CustomThemes,
  CommunityFeatures,
  GasOptimization,
  IPFSIntegration,
  CustomSmartContracts,
  CrossChainBridging
} from "@/pages/docs/additional-pages";

import '@rainbow-me/rainbowkit/styles.css';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/docs" component={Docs} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/create-blog" component={CreateBlog} />
      <Route path="/posts/:id" component={PostDetail} />
      <Route path="/api-references" component={ApiReferences} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/terms" component={Terms} />
      
      {/* Documentation routes */}
      <Route path="/docs/quick-start" component={QuickStartGuide} />
      <Route path="/docs/wallet-setup" component={WalletSetup} />
      <Route path="/docs/network-selection" component={NetworkSelection} />
      <Route path="/docs/publishing-first-post" component={PublishingFirstPost} />
      <Route path="/docs/content-management" component={ContentManagement} />
      <Route path="/docs/multi-chain-publishing" component={MultiChainPublishing} />
      <Route path="/docs/content-monetization" component={ContentMonetization} />
      <Route path="/docs/smart-contract-integration" component={SmartContractIntegration} />
      <Route path="/docs/sdk-documentation" component={SDKDocumentation} />
      <Route path="/docs/custom-themes" component={CustomThemes} />
      <Route path="/docs/community-features" component={CommunityFeatures} />
      <Route path="/docs/gas-optimization" component={GasOptimization} />
      <Route path="/docs/ipfs-integration" component={IPFSIntegration} />
      <Route path="/docs/custom-smart-contracts" component={CustomSmartContracts} />
      <Route path="/docs/cross-chain-bridging" component={CrossChainBridging} />
      
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
