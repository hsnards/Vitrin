import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
        <div className="max-w-screen-lg mx-auto">
        <Component {...pageProps} />
        </div>
  )
}

export default MyApp
