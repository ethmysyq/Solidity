import '../styles/globals.css'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }) {
  return (
    <MetaMaskAccountProvider>
      <Toaster />
      <Component {...pageProps} />
      </MetaMaskAccountProvider>
  )
}

export default MyApp
