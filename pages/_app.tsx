import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

export default function App({ Component, pageProps }: AppProps) {
    config.autoAddCss = false // Disable automatic adding of CSS
    library.add(fas) // Add the desired icon packs

    return <Component {...pageProps} />
}
