import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Player from './Components/Player'
import Albums from './pages/Albums'
import About from './pages/About'
import Tour from './pages/Tour'
import Navbar from './Components/Navbar'
import { useEffect, useState } from 'react'
import { exchangeCodeForToken, getStoredToken, getSpotifyProfile } from './spotify'

function App() {
  const [token, setToken] = useState(null);
  const [deviceId, setDeviceId] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    if (code) {
      window.history.replaceState({}, '', '/');
      exchangeCodeForToken(code).then((token) => {
        if (token) setToken(token);
      });
    } else {
      const stored = getStoredToken();
      if (stored) setToken(stored);
    }
  }, []);

  useEffect(() => {
    if (!token) return;
    getSpotifyProfile(token).then((data) => {
      if (data.id) setProfile(data);
    });
  }, [token]);

  useEffect(() => {
  if (!token) return;
  const interval = setInterval(async () => {
    const fresh = await getValidToken();
    if (fresh) setToken(fresh);
  }, 45 * 60 * 1000); // refresh every 45 mins
  return () => clearInterval(interval);
}, [token]);
  return (
    <div className="app">
      <Navbar profile={profile}/>
      <Routes>
        <Route path="/" element={<Home token={token}/>}/>
        <Route path="/albums" element={<Albums token={token} deviceId={deviceId}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/tour" element={<Tour/>}/>
      </Routes>
      <Player token={token} onDeviceReady={setDeviceId}/>
    </div>
  )
}

export default App