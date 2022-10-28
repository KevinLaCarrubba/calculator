import { AppProps } from 'next/app'
import ToggleProvidver from '../utilities/ToggleContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main>
            <ToggleProvidver>
                <Component {...pageProps} />
            </ToggleProvidver>
        </main>
    )
}

export default MyApp
