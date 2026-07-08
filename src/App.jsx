import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import GooeyNav from './component/GooeyNav'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup'
import About from './Pages/About'
import Login from './Pages/Login'
import { useState, useEffect } from 'react'
import Home from './Pages/Home'
import { getCurrentUser, logout } from './utils/auth'
import './App.css'

function AppContent() {
  const [scrolled, setScrolled] = useState(false);
  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setCurrentUser(getCurrentUser());
  }, [location]);

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    navigate('/');
  };

  const items = [
    { label: "Home", href: "/" },
    { label: "About", href: "/About" },
    { label: "Contact", href: "/Contact" },
    ...(currentUser ? [] : [{ label: "Login", href: "/login" }]),
  ];

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 100,
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.6)' : 'rgba(0, 0, 0, 0)',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        transition: 'all 0.3s ease',
        padding: '20px 0',
      }}>
        <GooeyNav
          items={items}
          particleCount={15}
          particleDistances={[90, 10]}
          particleR={100}
          initialActiveIndex={0}
          animationTime={600}
          timeVariance={300}
          colors={[1, 2, 3, 1, 2, 3, 1, 4]}
        />
        {currentUser && (
          <span className="logout-link" onClick={handleLogout}>
            log out
          </span>
        )}
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App