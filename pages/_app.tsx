import { AppProps } from 'next/app'
import ToggleProvidver from '../utilities/ToggleContext'
import ThemeProvider from '../utilities/ThemeContext'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main>
            <ToggleProvidver>
                <ThemeProvider>
                    <Component {...pageProps} />
                </ThemeProvider>
            </ToggleProvidver>
        </main>
    )
}

export default MyApp
