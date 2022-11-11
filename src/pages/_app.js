import '../shared/styles/globals.scss'
import Dashboard from "../components/Dashboard"

function App({ Component, pageProps }) {
  return (
    <Dashboard>
      <Component {...pageProps} />
    </Dashboard>
  )
}

export default App
