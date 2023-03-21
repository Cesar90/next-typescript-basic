import { FC } from 'react';
import App, { AppProps} from "next/app";
import '../styles/global.css';
import type { Page } from '../types/page'

// this should give a better typing
type Props = AppProps & {
  Component: Page
}

function MyApp({ Component, pageProps }: Props) {
    const getLayout = Component.getLayout || ((page) => page)
    return getLayout(<Component {...pageProps} />)
}


export default MyApp