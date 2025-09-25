import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, base, bsc, avalanche } from 'viem/chains';

export const config = getDefaultConfig({
  appName: 'ChainBlog',
  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || 'your-project-id',
  chains: [mainnet, base, bsc, avalanche],
  ssr: false,
});

export const supportedChains = [
  {
    id: mainnet.id,
    name: 'Ethereum',
    color: 'bg-blue-500',
  },
  {
    id: base.id,
    name: 'Base',
    color: 'bg-blue-600',
  },
  {
    id: bsc.id,
    name: 'BNB Chain',
    color: 'bg-yellow-500',
  },
  {
    id: avalanche.id,
    name: 'Avalanche',
    color: 'bg-red-500',
  },
];
