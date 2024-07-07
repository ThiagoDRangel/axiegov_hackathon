import { createWeb3Modal, useWeb3Modal } from '@web3modal/wagmi/react';
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config';
import { WagmiProvider } from 'wagmi';
import { ronin, mainnet } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import Home from './pages/Home';

const queryClient = new QueryClient();

const projectId = 'YOUR_PROJECT_ID';

const metadata = {
  name: 'Ronin Wallet Web3Modal',
  description: 'Ronin Wallet Web3Modal example',

  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [ ronin, mainnet ] as const
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  // Remove Coinbase from the modal's main view
  enableCoinbase: false,
  // Set to "true" to enable detection of the Ronin Wallet extension, which will also enable other wallets that support EIP6963
  enableEIP6963: true,
  // Set to "false" because the Ronin Wallet extension can't be detected this way
  enableInjected: false,
});

interface Web3ModalProviderProps {
  children: ReactNode;
}

// 4. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  // Set Ronin as a desired chain for the initial connection
  defaultChain: ronin,
  // Remove the "All Wallets" button on the modal
  allWallets: 'HIDE',
  // Add this to connect to Ronin Wallet when browsing on mobile
  featuredWalletIds: ['541d5dcd4ede02f3afaf75bf8e3e4c4f1fb09edb5fa6c4377ebf31c2785d9adf'],
})

export function Web3ModalProvider({ children }: Web3ModalProviderProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export function ConnectButton() {
  const { open } = useWeb3Modal();
  return open;
}

function App() {
  return (
    <Web3ModalProvider>
      <div className="App">
        <Home />
      </div>
    </Web3ModalProvider>
  )
}

export default App;
