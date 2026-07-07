import { useState } from 'react'
import Navbar from './Navbar'
import Division from './Division'
import Story from './Story'
import Footer from './Footer'
import Heritage from './Heritage'
import Maison from './Maison'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>

      <div id="hero" className='container'>
        <div className='row'>
          <div className='col-6'>
            <h5>AUTUMN / WINTER 2026 — MAISON NOIRE</h5>
            <h1>Dressed in</h1>
            <h1><span className="gold-italic">Darkness.</span></h1>
            <h1>crowned in</h1>
            <h1>Gold.</h1>
            <p>For those who speak in silhouettes. A new collection shaped by obsidian nights and the weight of gold thread.</p>
            <button className="explore" type="submit">EXPLORE THE COLLECTION</button>
            <a className="next">WATCH THE FILM →</a>
          </div>
          <div className='col-6' style={{position: 'relative'}}>
            <img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?w=700&q=80"/>
            <div className='featured-tag'>
              <p>FEATURED PIECE</p>
              <h3>The Obsidian Drape</h3>
            </div>
          </div>
        </div>
      </div>

      <div className='divider'>
        <div className='divider-line'></div>
          <span>EXCLUSIVELY CRAFTED — PARIS · MILAN · NEW YORK</span>
        <div className='divider-line'></div>
      </div>

      <h1 className='heading'>The <span className='gold-italics'>New</span> Collection</h1>

      <div id="collections" className='container'>
        <div className='collection-grid'>
          <div className='grid-main'>
            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"/>
            <div className='featured-tag'>
              <h1>La Robe Éternelle</h1>
              <p>Silk charmeuse · Limited edition</p>
            </div>
          </div>
          <div className='grid-small'>
            <div className='grid-item'>
              <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80"/>
              <div className='featured-tag'>
                <h1>Manteau Noir</h1>
                <p>Cashmere blend</p>
              </div>
            </div>
            <div className='grid-item'>
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"/>
              <div className='featured-tag'>
                <h1>L'Or Ring</h1>
                <p>24k gold plate</p>
              </div>
            </div>
            <div className='grid-item'>
              <img src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&q=80"/>
              <div className='featured-tag'>
                <h1>Soirée</h1>
                <p>Hand-embroidered</p>
              </div>
            </div>
            <div className='grid-item'>
              <img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?w=400&q=80"/>
              <div className='featured-tag'>
                <h1>Sac Minuit</h1>
                <p>Full grain leather</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Division/>

      <div id="atelier">
        <Story/>
      </div>

      <div id="heritage"></div>

      <div id="maison">
        <Footer/>
      </div>
    </>
  )
}

export default App