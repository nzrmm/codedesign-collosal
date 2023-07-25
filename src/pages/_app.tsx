import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import {Content} from '@/layouts';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Content>
      <Component {...pageProps} />
    </Content>
  )
}
