import { Code, Terminal, Cpu, Palette, Users, Zap, Database, Link as LinkIcon, Archive, Network } from 'lucide-react';
import DocPageTemplate from '../../components/doc-page-template';

// Smart Contract Integration
export function SmartContractIntegration() {
  return (
    <DocPageTemplate
      title="Smart Contract Integration"
      description="Integrate with xLog contracts"
      difficulty="Advanced"
      icon={<Code className="w-6 h-6 text-white" />}
      externalLink="https://github.com/xlog-app/contracts"
    />
  );
}

// SDK Documentation
export function SDKDocumentation() {
  return (
    <DocPageTemplate
      title="SDK Documentation"
      description="JavaScript/TypeScript SDK guide"
      difficulty="Intermediate"
      icon={<Terminal className="w-6 h-6 text-white" />}
      externalLink="https://npm.js/package/@xlog/sdk"
    />
  );
}

// Custom Themes
export function CustomThemes() {
  return (
    <DocPageTemplate
      title="Custom Themes"
      description="Build and deploy custom blog themes"
      difficulty="Intermediate"
      icon={<Palette className="w-6 h-6 text-white" />}
      externalLink="https://github.com/xlog-app/themes"
    />
  );
}

// Community Features
export function CommunityFeatures() {
  return (
    <DocPageTemplate
      title="Community Features"
      description="Engage with other creators"
      difficulty="Beginner"
      icon={<Users className="w-6 h-6 text-white" />}
    />
  );
}

// Gas Optimization
export function GasOptimization() {
  return (
    <DocPageTemplate
      title="Gas Optimization"
      description="Reduce transaction costs"
      difficulty="Advanced"
      icon={<Zap className="w-6 h-6 text-white" />}
    />
  );
}

// IPFS Integration
export function IPFSIntegration() {
  return (
    <DocPageTemplate
      title="IPFS Integration"
      description="Decentralized storage solutions"
      difficulty="Advanced"
      icon={<Database className="w-6 h-6 text-white" />}
      externalLink="https://ipfs.io/docs/"
    />
  );
}

// Custom Smart Contracts
export function CustomSmartContracts() {
  return (
    <DocPageTemplate
      title="Custom Smart Contracts"
      description="Deploy your own publishing contracts"
      difficulty="Expert"
      icon={<Cpu className="w-6 h-6 text-white" />}
      externalLink="https://docs.soliditylang.org/"
    />
  );
}

// Cross-Chain Bridging
export function CrossChainBridging() {
  return (
    <DocPageTemplate
      title="Cross-Chain Bridging"
      description="Move content between networks"
      difficulty="Expert"
      icon={<Network className="w-6 h-6 text-white" />}
    />
  );
}
