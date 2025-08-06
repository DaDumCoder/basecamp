import Head from 'next/head'
import { ParaConnectButton } from '../components/ParaConnectButton'

/**
 * The home page displays a basic greeting and a button to open the Para/Reown modal.
 */
export default function Home() {
  return (
    <>
      <Head>
        <title>Camp dApp</title>
      </Head>
      <main>
        <h1>Welcome to Camp dApp</h1>
        <ParaConnectButton />
      </main>
    </>
  )
}