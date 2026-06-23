import { Link } from 'react-router-dom'

function Navbar({ profile }) {
  return (

        <nav className="navbar">
      <div className="nav-left">
        {profile && (
          <a href="https://www.spotify.com/account/overview/" target="_blank" rel="noreferrer" className="nav-spotify-profile">
            <img src={profile.images?.[0]?.url || 'https://i.scdn.co/image/ab6761610000e5eb7da39dea0a72f581535fb11f'} alt="Spotify Profile" className="nav-profile-pic" />
          </a>
        )}
        <Link to="/" className="nav-logo">YE</Link>
      </div>
      <div className="nav-links">
        <Link to="/albums">Albums</Link>
        <Link to="/about">About</Link>
        <Link to="/tour">Tour</Link>
      </div>
    </nav>

  )
}

export default Navbar