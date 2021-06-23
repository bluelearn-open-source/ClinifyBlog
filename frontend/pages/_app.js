// import '../styles/globals.css'
import 'tailwindcss/tailwind.css'

import Header from '../src/components/header'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header/>
  <Component {...pageProps} />
  </>
  )
  
}

export default MyApp
