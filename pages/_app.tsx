import type { AppProps } from 'next/app'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { AppKitProvider } from '@reown/appkit/react'
import Para, { Environment, OAuthMethod } from '@getpara/web-sdk'
import { paraConnector } from '@getpara/wagmi-v2-integration'
import { campChain } from '../lib/chains'

// Initialize Para with your API key. This uses the Beta environment by default.
const para = new Para(Environment.BETA, process.env.NEXT_PUBLIC_PARA_API_KEY!)

// Build a Wagmi connector using the Para SDK and the Camp network definition.
const connector = paraConnector({
  para,
  chains: [campChain],
  appName: 'Camp dApp',
  oAuthMethods: [OAuthMethod.GOOGLE, OAuthMethod.DISCORD],
})

// Your Reown project ID must be provided via environment variables.
const projectId = process.env.NEXT_PUBLIC_REOWN_PROJECT_ID!

// Configure the Wagmi adapter for Reown AppKit.
const wagmiAdapter = new WagmiAdapter({
  networks: [campChain],
  projectId,
  connectors: [connector],
})

// Create the AppKit instance with metadata about your dApp.
const appKit = createAppKit({
  adapters: [wagmiAdapter],
  networks: [campChain],
  projectId,
  metadata: {
    name: 'Camp dApp',
    description: 'Para + Reown on Camp',
    url: 'http://localhost:3000',
    icons: [],
  },
})

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <AppKitProvider appKit={appKit}>
          <Component {...pageProps} />
        </AppKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default MyApp