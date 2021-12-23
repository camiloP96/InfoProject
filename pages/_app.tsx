import type { AppProps } from 'next/app'
import '/styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  //aca se acen los layouts y todo
  return <Component {...pageProps} />
}

export default MyApp
