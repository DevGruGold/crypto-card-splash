
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { WagmiProvider } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { createConfig, http } from 'wagmi'
import Index from "./pages/Index";

const queryClient = new QueryClient();

// 1. Get projectId from custom instructions
const projectId = '5f8e07430b1c35015c470f5cd86dbde3'

// 2. Create wagmiConfig
const metadata = {
  name: 'CryptoCard',
  description: 'CryptoCard Web3 Application',
  url: 'https://cryptocard.lovable.app', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const config = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http()
  },
})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  metadata
})

const App = () => (
  <WagmiProvider config={config}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </WagmiProvider>
);

export default App;
