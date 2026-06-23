import { Link } from 'react-router-dom'
import { loginWithSpotify } from '../spotify'

function Home({ token }) {
  return (
  <div className="hero">

    <p className="hero-eyebrow">The Life of</p>
    <h1 className="hero-title">KAN<span className="gold">YE</span></h1>
    <p className="hero-tagline">Not just a rapper. A god.</p>

    <div className="hero-line"></div>

    <div className="hero-buttons">
      <Link to="/albums" className="btn-gold">Discography</Link>
      <Link to="/tour" className="btn-ghost">Tour Dates</Link>
      {!token && (
        <button onClick={loginWithSpotify} className="btn-gold">Login with Spotify</button>
      )}
    </div>
  </div>
  )
}

export default Home