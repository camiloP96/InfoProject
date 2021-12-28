
import type { AppProps } from 'next/app'
import type { NextPage } from 'next'
import type { ReactElement, ReactNode } from 'react'
import '/styles/globals.css'
import Layout from '../components/layout'


type NextPageWithLayout = NextPage & {
  getLayout?:(Home:ReactElement)=>ReactNode
}
type AppPropswithLayout= AppProps & {
  Component: NextPageWithLayout
}


export default function MyApp({ Component, pageProps }: AppPropswithLayout) {
  const getLayout = Component.getLayout ??((Home)=>Home)
  //aca se acen los layouts y todo
  return getLayout(
  <Layout>

    <Component {...pageProps} />
  </Layout>
  
  )
}


