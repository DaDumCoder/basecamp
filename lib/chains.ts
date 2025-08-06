import type { Chain } from 'viem'

// Define the Camp network chain configuration. Replace the id and RPC URLs as needed for your setup.
export const campChain: Chain = {
  id: 1234,
  name: 'Camp',
  network: 'camp',
  nativeCurrency: {
    name: 'CAMP',
    symbol: 'CAMP',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.camp.network'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Camp Explorer',
      url: 'https://explorer.camp.network',
    },
  },
  testnet: true,
}