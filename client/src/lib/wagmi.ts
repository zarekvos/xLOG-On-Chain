import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { mainnet, base, bsc, avalanche } from 'viem/chains';
import ethIcon from '@assets/eth.png';
import baseIcon from '@assets/base.png';
import bnbIcon from '@assets/bnb.png';
import avaxIcon from '@assets/avax.png';

export const config = getDefaultConfig({
  appName: 'xLog',
  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || 'your-project-id',
  chains: [mainnet, base, bsc, avalanche],
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
];
