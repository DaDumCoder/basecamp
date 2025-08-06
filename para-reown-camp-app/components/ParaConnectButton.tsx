import { useAppKit } from '@reown/appkit/react'

/**
 * A minimal button component that triggers the Reown AppKit modal.
 * When clicked, it opens the connection modal where users can sign in via Para.
 */
export function ParaConnectButton() {
  const { open } = useAppKit()
  return (
    <button onClick={() => open()}>
      Connect with Para
    </button>
  )
}