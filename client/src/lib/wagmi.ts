import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, base, bsc, avalanche } from 'viem/chains';
import { defineChain } from 'viem';
import ethIcon from '@assets/eth.png';
import baseIcon from '@assets/base.png';
import bnbIcon from '@assets/bnb.png';
import avaxIcon from '@assets/avax.png';
import plasmaIcon from '@assets/plasma.png';

// Define Plasma chain configuration using defineChain for better RainbowKit integration
const plasma = defineChain({
  id: 9745, // Correct Chain ID: 0x2611
  name: 'Plasma',
  network: 'plasma',
  nativeCurrency: {
    decimals: 18,
    name: 'Plasma',
    symbol: 'XPL',
  },
  rpcUrls: {
    public: { http: ['https://rpc.plasma.to'] },
    default: { http: ['https://rpc.plasma.to'] },
  },
  blockExplorers: {
    etherscan: { name: 'Plasma Explorer', url: 'https://explorer.plasma.to' },
    default: { name: 'Plasma Explorer', url: 'https://explorer.plasma.to' },
  },
  iconUrl: '/plasma.png', // Icon URL for RainbowKit
  iconBackground: '#8B5CF6', // Purple background for the icon
});

export const config = getDefaultConfig({
  appName: 'xLog',
  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || 'your-project-id',
  chains: [mainnet, base, bsc, avalanche, plasma],
  ssr: false,
});

export const supportedChains = [
  {
    id: mainnet.id,
    name: 'Ethereum',
    color: 'bg-blue-500',
    icon: ethIcon,
  },
  {
    id: base.id,
    name: 'Base',
    color: 'bg-blue-600',
    icon: baseIcon,
  },
  {
    id: bsc.id,
    name: 'BNB Chain',
    color: 'bg-yellow-500',
    icon: bnbIcon,
  },
  {
    id: avalanche.id,
    name: 'Avalanche',
    color: 'bg-red-500',
    icon: avaxIcon,
  },
  {
    id: plasma.id,
    name: 'Plasma',
    color: 'bg-purple-500',
    icon: plasmaIcon,
  },
];
