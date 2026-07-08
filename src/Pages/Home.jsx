import GridMotion from '../component/GridMotion';
import TextType from '../component/TextType'
import { useState, useEffect } from 'react'
import Video from '../assets/Video.mp4'
import Stack from '../component/Stack'
import '../App.css'

const images = [
  { src: "https://sm.pcmag.com/pcmag_me/news/a/ai-enhance/ai-enhanced-m4-chips-reportedly-coming-to-apples-full-mac-li_bc5x.jpg", link: "https://www.apple.com/mac/" },
  { src: "https://helios-i.mashable.com/imagery/articles/00qu49CZEREUqKQJepLaJSk/hero-image.fill.size_1248x702.v1694790476.webp", link: "https://www.apple.com/iphone/" },
  { src: "https://www.myg.in/images/thumbnails/300/300/detailed/121/ipad_pro_11-in_m5_wifi_space_black_pdp_image_position_1__en-in_1__5-removebg-preview__1_.png.png", link: "https://www.apple.com/ipad/" },
  { src: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/airpods-max-hero-select-202409_FMT_WHH?wid=752&hei=636&fmt=jpeg&qlt=90&.v=WXBZVEZCOUNiUWlBYUtjZmtBc0J2MGkxeEVQUXVsbFk4WEhBc0JFOWdSN2pmMHBIdXRoME5iSzRYUmF4Y3dVRy81NGMrcU1sYkxwTFJaVHI1NEQzenBJRnRzZXYwZVJMZmZQVjdBR0RkVVNpdi91OXpsc3gvUHZvVGU1aUpOaFE", link: "https://www.apple.com/airpods-max/" },
  { src: "https://www.apple.com/assets-www/en_IN/watch1/og/watch_og_c64ec6c67.png", link: "https://www.apple.com/watch/" },
];
const items = [
  // 'Item 1',
  <div key='jsx-item-1'>iCloud sync across devices</div>,
  'https://help.apple.com/assets/677EB6990E35CFE25809758B/677EB69E5AFECC5ECD0B4978/en_US/bb367610e281ca4ab6285995491b414f.png',
  // 'Item 2',
  <div key='jsx-item-2'>Face ID / security</div>,
  'https://help.apple.com/assets/65FB187228A2DC0EA40F7FA1/65FB1874091E210DAD023753/en_US/c009e5a1744ec9bbfee199bd5de119ed.png',
  // 'Item 3',
  <div key='jsx-item-3'>Battery life</div>,
  'https://media.idownloadblog.com/wp-content/uploads/2024/06/Security-Delay-Required-to-Change-Face-ID-on-iPhone.png',
  // 'Item 4',
  <div key='jsx-item-4'>AI features (Apple Intelligence)</div>,
  'https://media.idownloadblog.com/wp-content/uploads/2024/06/Set-Up-Face-ID-on-iPhone.png',
  // 'Item 5',
  <div key='jsx-item-5'>Build quality (titanium, aluminum, etc.)</div>,
  'https://cdsassets.apple.com/live/7WUAS350/images/ios/ios-17-iphone-15-pro-setup-face-id.png',
  // 'Item 6',
  <div key='jsx-item-6'>Continuity (Handoff between devices)</div>,
  'https://media.idownloadblog.com/wp-content/uploads/2024/12/Battery-Charging-settings-on-iPhone.jpg',
  // 'Item 7',
  <div key='jsx-item-7'>iCloud sync across devices</div>,
  'https://cdsassets.apple.com/live/7WUAS350/images/ios/ios-18-iphone-15-pro-settings-battery-charging.png',
  // 'Item 8',
  <div key='jsx-item-8'>Face ID / security</div>,
  'https://www.tonyreviewsthings.com/wp-content/uploads/2025/06/ios-26-apple-intelligence-features-banner.jpg',
  // 'Item 9',
  <div key='jsx-item-9'>Battery life</div>,
  'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/05/Apple-Handoff-MacBook-iPhone-Continuity.jpg',
  // 'Item 10',
  <div key='jsx-item-10'>AI features (Apple Intelligence)</div>,
  'https://media.idownloadblog.com/wp-content/uploads/2024/10/Allow-Handoff-between-this-Mac-and-your-iCloud-devices-in-System-Settings.png',
  // 'Item 11',
  <div key='jsx-item-11'>Build quality (titanium, aluminum, etc.)</div>,
  'https://i.pcmag.com/imagery/reviews/016HshvVv4QPcZC6wf87cSI-14..v1663119788.jpg',
  // 'Item 12',
  <div key='jsx-item-12'>Continuity (Handoff between devices)</div>,
  'https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  
];

function Home() {
  const [showVideo, setshowVideo] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setshowVideo(true), 1575)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className='apple'>
        <div>
          {!showVideo && (
            <TextType
              text={["APPLE."]}
              typingSpeed={200}
              pauseDuration={300}
              showCursor
              cursorCharacter="|"
              texts={["Apple."]}
              deletingSpeed={75}
              variableSpeedEnabled={false}
              variableSpeedMin={60}
              variableSpeedMax={120}
              cursorBlinkDuration={0.5}
            />
          )}
        </div>

        <div>
          {showVideo && (
            <video autoPlay loop muted style={{ position: 'relative', top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'cover', zIndex: 50 }}>
              <source src={Video} type="video/mp4" />
            </video>
          )}
        </div>
      </div>

      <div style={{ height: '2px', width: '95%', backgroundColor: 'white', boxShadow: '0 0 10px white', marginTop: '40px', marginBottom: '20px', marginLeft: 'auto', marginRight: 'auto' }}></div>

          <h1 className='store'>Store</h1>

      <div style={{ width: '350px', height: '350px', marginTop: '80px', marginBottom: '150px', marginLeft: 'auto', marginRight: 'auto', display: 'flex', justifyContent: 'center', padding: 'none' }}>
        <Stack
          randomRotation={false}
          sensitivity={200}
          sendToBackOnClick={false}
          mobileClickOnly={true}
          cards={images.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'block', width: '100%', height: '100%' }}
            >
              <img
                src={item.src}
                alt={`card-${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', border: '5px solid rgb(0, 0, 0)', boxShadow: '0 0 90px rgba(224, 195, 82, 0.74)', borderRadius: 0}}
              />
            </a>
          ))}
          autoplay={false}
          autoplayDelay={3000}
          pauseOnHover={false}
        />
      </div>

      <div style={{ height: '2px', width: '95%', backgroundColor: 'white', boxShadow: '0 0 10px white', marginTop: '20px', marginBottom: '40px', marginLeft: 'auto', marginRight: 'auto' }}></div>

      <GridMotion items={items}
      />

      <div style={{ height: '2px', width: '95%', backgroundColor: 'white', boxShadow: '0 0 10px white', marginTop: '100px', marginBottom: '60px', marginLeft: 'auto', marginRight: 'auto' }}></div>
          

      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Shop and Learn</h6>
          <a className="link link-hover" href = "https://www.apple.com/in/store">store</a>
          <a className="link link-hover"  href="https://www.apple.com/in/mac/">Mac</a>
          <a className="link link-hover" href="https://www.apple.com/in/iPad/">iPad</a>
          <a className="link link-hover" href="https://www.apple.com/in/iPhone/">iPhone</a>
          <a className="link link-hover" href="https://www.apple.com/in/Watch/">Watch</a>
          <a className="link link-hover" href="https://www.apple.com/in/airpods/">AirPods</a>
          <a className="link link-hover" href="https://www.apple.com/in/tv-home/">TV & Home</a>
          <a className="link link-hover" href="https://www.apple.com/in/airtag/">AirTag</a>
          <a className="link link-hover" href="https://www.apple.com/in/shop/accessories/all">Accessories</a>
          <a className="link link-hover" href="https://www.apple.com/in/shop/gift-cards">Gift Cards</a>
          <h6 className="footer-title"> </h6>
          <h6 className="footer-title">Apple Wallet</h6>
          <a className="link link-hover" href="https://www.apple.com/in/wallet/">Wallet</a>
        </nav>
        <nav>
          <h6 className="footer-title">Account</h6>
          <a className="link link-hover" href="https://account.apple.com/in/">Manage Your Apple Account</a>
          <a className="link link-hover" href="https://secure8.store.apple.com/in/shop/signIn/account?ssi=4AAABnzN_VrEBIGfNiux6VsYf6pLhV1ym5sug9SnkZ5uPzRjKgyBKGZJSAAAAN2h0dHBzOi8vc2VjdXJlOC5zdG9yZS5hcHBsZS5jb20vaW4vc2hvcC9hY2NvdW50L2hvbWV8fHwAAgGiG51YlMz_NegMNOruKSvmoZI2su1YsFc2-wMsIjklPg">Apple Store Account</a>
          <a className="link link-hover" href="https://www.icloud.com/">iCloud.com</a>
          <h6 className="footer-title"> </h6>
          <h6 className="footer-title">Entertainment</h6>
          <a className="link link-hover" href="https://www.apple.com/in/apple-one/">Apple One</a>
          <a className="link link-hover" href="https://www.apple.com/in/apple-tv/">Apple TV</a>
          <a className="link link-hover" href="https://www.apple.com/in/apple-music/">Apple Music</a>
          <a className="link link-hover" href="https://www.apple.com/in/apple-arcade/">Apple Arcade</a>
          <a className="link link-hover" href="https://www.apple.com/in/apple-fitness-plus/">Apple Fitness+</a>
          <a className="link link-hover" href="https://www.apple.com/in/apple-podcasts/">Apple Podcasts</a>
          <a className="link link-hover" href="https://www.apple.com/in/apple-books/">Apple Books</a>
          <a className="link link-hover" href="https://www.apple.com/in/app-store/">App Store</a>
        </nav>
        <nav>
          <h6 className="footer-title">Apple Store</h6>
          <a className="link link-hover" href="https://www.apple.com/in/retail/">Find a Store</a>
          <a className="link link-hover" href="https://www.apple.com/in/geniusbar/">Genius Bar</a>
          <a className="link link-hover" href="https://www.apple.com/in/today/">Today at Apple</a>
          <a className="link link-hover" href="https://www.apple.com/in/today/groups/">Group Reservations</a>
          <a className="link link-hover" href="https://www.apple.com/in/today/event/apple-camp-fy26/">Apple Camp</a>
          <a className="link link-hover" href="https://www.apple.com/in/shop/trade-in">Apple Trade In</a>
          <a className="link link-hover" href="https://www.apple.com/in/shop/ways-to-buy">Ways to Buy</a>
          <a className="link link-hover" href="https://www.apple.com/in/reuse-recycle/">Recycling Programme</a>
          <a className="link link-hover" href="https://secure8.store.apple.com/in/shop/signIn/orders?ssi=4AAABnzOYlWIBIMzmVzT7AG2uiubA9UJMJbzskdiu8iskhiDsRb_sYEwdAAAANWh0dHBzOi8vc2VjdXJlOC5zdG9yZS5hcHBsZS5jb20vaW4vc2hvcC9vcmRlci9saXN0fHx8AAIBxYjbHWbcihBTAxVzDZ9MfL1RjzDGIu9zsgkSiAeyBnM">Order Status</a>
          <a className="link link-hover" href="https://www.apple.com/in/shop/help">Shopping Help</a>
        </nav>
        <nav>
          <h6 className="footer-title">For Business</h6>
          <a className="link link-hover" href="https://www.apple.com/in/business/">Apple and Business</a>
          <a className="link link-hover" href="https://www.apple.com/in/retail/business/">Shop for Business</a>
          <h6 className="footer-title"> </h6>
          <h6 className="footer-title">For Education</h6>
          <a className="link link-hover" href="https://www.apple.com/in/education/">Apple and Education</a>
          <a className="link link-hover" href="https://www.apple.com/in/education/k12/#how-to-buy">Shop for Education</a>
          <a className="link link-hover" href="https://www.apple.com/in-edu/store">Shop for University</a>
          <h6 className="footer-title"> </h6>
          <h6 className="footer-title">For Healthcare</h6>
          <a className="link link-hover" href="https://www.apple.com/in/healthcare/">Apple and Healthcare</a>
          <h6 className="footer-title"> </h6>
          <h6 className="footer-title">For Government</h6>
          <a className="link link-hover" href="https://www.apple.com/in/government/">Apple and Government</a>
        </nav>
        <nav>
          <h6 className="footer-title">Apple Values</h6>
          <a className="link link-hover" href="https://www.apple.com/in/accessibility/">Accessibility</a>
          <a className="link link-hover" href="https://www.apple.com/in/education-initiative/">Education</a>
          <a className="link link-hover" href="https://www.apple.com/in/environment/">Environment</a>
          <a className="link link-hover" href="https://www.apple.com/in/privacy/">Privacy</a>
          <a className="link link-hover" href="https://www.apple.com/in/supply-chain/">Supple Chain Innovation</a>
          <h6 className="footer-title"> </h6>
          <h6 className="footer-title">About Apple</h6>
          <a className="link link-hover" href="https://www.apple.com/in/newsroom/">Newsroom</a>
          <a className="link link-hover" href="https://www.apple.com/in/leadership/">Apple Leadership</a>
          <a className="link link-hover" href="https://www.apple.com/careers/in/">Career Opportunities</a>
          <a className="link link-hover" href="https://investor.apple.com/investor-relations/default.aspx">Investors</a>
          <a className="link link-hover" href="https://www.apple.com/compliance/">Ethics & Compliance</a>
          <a className="link link-hover" href="https://www.apple.com/in/apple-events/">Events</a>
          <a className="link link-hover" href="https://www.apple.com/in/contact/">Contact Apple</a>
        </nav>
      </footer>

      <div className="bg-base-300" style={{fontSize: '15px', padding: '10px 0 10px 15px', textAlign: 'left'}}>More ways to shop: <a className='retailerrr' href="https://www.apple.com/in/retail/" style={{color: '#4CA0E5', fontSize: '15px'}}>Find an Apple Store</a> or <a className='localstore' href="https://locate.apple.com/in/en/" style={{color: '#4CA0E5', fontSize: '15px'}}>other retailer</a> near you. Or call <a className='num' href="tel:0008000401966" style={{color: '#4CA0E5', fontSize: '15px'}}>000800 040 1966</a>.
        <div style={{ height: '1px', width: '95%', backgroundColor: '#3a3a3a', marginTop: '10px', marginLeft: 'auto', marginRight: 'auto' }}></div>
      </div>

      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-4 flex justify-between items-center">
        <aside className="flex flex-wrap items-center gap-4">
          <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
          <a className="link link-hover" href="https://www.apple.com/in/legal/privacy/">Privacy Policy</a>
          <a className="link link-hover" href="https://www.apple.com/in/legal/internet-services/terms/site.html">Terms of Use</a>
          <a className="link link-hover" href="https://www.apple.com/in/shop/browse/story/salespolicies">Sales Policy</a>
          <a className="link link-hover" href="https://www.apple.com/in/legal/">Legal</a>
          <a className="link link-hover" href="https://www.apple.com/in/sitemap/">Site Map</a>
        </aside>
        <nav>
          <a className="link link-hover" href="https://www.apple.com/choose-country-region/">India</a>
        </nav>
      </footer>
    
    </>
  );
}

export default Home;