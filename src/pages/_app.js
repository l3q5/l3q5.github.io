import '../global.css'
import Navbar from '../components/navbar'
import Torus from '../components/torus'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Torus />
      <div className="flex justify-center">
        <Component {...pageProps} />
      </div>
    </>
  )
}
