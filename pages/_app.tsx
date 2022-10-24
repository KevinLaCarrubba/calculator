import { AppProps } from 'next/app'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main>
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp
