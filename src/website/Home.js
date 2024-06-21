import { Box } from '@mui/material'
import React from 'react'
import './animate.min.css'
import './aos.css'
import './bootstrap.min.css'
import './default.css'
import './style.css'
// import './fontawesome-all.min.css'
import './magnific-popup.css'
import './meanmenu.css'
import './odometer.css'
// import './owl.carousel.min.css'
import './responsive.css'
import './slick.css'
// import './style'
import { NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import aviater from './img/41aeqyY7vML._SL500_.jpg'
import k3 from './img/DD6E84771ADB7D4058491095BA8A5229.png'
import slider_img01 from './img/bg/1 (3).92ba2f71f9464e5ba3e7.png'
import casino from './img/casino-logo-on-a-green-background-flying-gold-coins-free-vector.jpg'
import ludo from './img/download.jpg'
import trx from './img/download.png'
import facebook from './img/facebook (5).png'
import instagram from './img/instagram.png'
import slider_circle from './img/slider/slider_circle.png'
import telegram from './img/telegram.png'
import twitter from './img/twitter.png'
import wingo from './img/wingo.jpg'
import { download_app_url } from '../services/urls';


function Home() {
  return (
    <Box>
      <header>
        <div id="sticky-header" className="transparent-header">
          <div className="row">
            <div className="col-12">
              <div className="main-menu menu-style-two" style={{ background: '#fff' }}>
                <nav>
                  <div className="logo">
                    <Box component='img' src={logo} alt="Logo" sx={{ width: '130px' }} className="logohh"></Box>
                  </div>
                  <div id="mobile-menu" className="navbar-wrap  d-lg-flex media440" >
                    <ul>
                      <li className="show"><a href="#"  
                      onClick={() => (document.location.href = `${download_app_url}`)}>Download</a> </li>
                      <li><a href="/login">Sign in</a></li>
                      <li><a href="/register">Register</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="mobile-menu"></div>
            </div>

            <div className="modal fade" id="search-modal" tabindex="-1" role="dialog" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <form>
                    <input type="text" placeholder="Search here..." />
                    <button><i className="fa fa-search"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>

        </div>
      </header>
      <main>
        <section className="slider-area" style={{ background: '#e6740133' }}>
          <div className="slider-active">
            <div className="single-slider slider-bg slider-style-two"
            >
              <div className="container-fluid container-full-padding">
                <div className="row">
                  <div className="col-xl-6 col-lg-7 col-md-11">
                    <div className="slider-content">
                      <h6 data-animation="fadeInUp" data-delay=".4s">Zupeeter</h6>
                      <h2 data-animation="fadeInUp" data-delay=".4s" style={{ color: 'white' }}>Online   <span >Cash</span> Games</h2>
                      <p data-animation="fadeInUp" data-delay=".6s">50 game Coming Soon 12 Game Live 5 Game In Pipe Line
                      </p>
                      <a href="/login" className="btn btn-style-two" data-animation="fadeInUp"
                        data-delay=".8s">Play Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slider-img" data-animation="slideInRightS" data-delay=".6s">
                <Box component='img' src={slider_img01} alt="Logo" ></Box>
              </div>
              {/* <div className="slider-img slider-img2" data-animation="slideInLeftS" data-delay=".6s">
                <Box component='img' src={slider_img02} alt="Logo"></Box>
              </div> */}
              <div className="slider-circle-shape">
                {/* <img src="./img/slider/slider_circle.png" alt="" className="rotateme" /> */}
                <Box component='img' src={slider_circle} className="rotateme"></Box>
              </div>
            </div>
          </div>
        </section>
        <section className="released-games-area gray-bg pt-115 pb-70">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-8">
                <div className="section-title title-style-three text-center mb-20">
                  <h2>released <span>GAMES</span></h2>
                  <p>SKILL-BASED GAMES ON ZUPEETER MONEY GAME APP</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="just-gamers-area just-gamers-bg pt-115 pb-150 mb-200">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="section-title title-style-three white-title mb-70">
                  <h2>JUST FOR <span>GAMERS</span></h2>
                  <p>Compete with 100 player on a remote island for winner
                    known issue where certain strategic</p>
                </div>
                <div className="just-gamers-list">

                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', mb: 3, }}>
                    <Box>
                      <div className="just-gamers-list-icon">
                        <Box component='img' src={wingo} alt="game" ></Box>
                      </div>
                      <div className="just-gamers-list-content fix">
                        <h5 style={{ color: 'white' }}>Wingo</h5>
                      </div>
                    </Box>
                    <Box>
                      <div className="just-gamers-list-icon">
                        <Box component='img' src={k3} alt="game" ></Box>
                      </div>
                      <div className="just-gamers-list-content fix">
                        <h5 style={{ color: 'white' }}>K3 Lottery</h5>
                      </div>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', mb: 3, }}>
                    <Box>
                      <div className="just-gamers-list-icon">
                        <Box component='img' src={trx} alt="game" ></Box>
                      </div>
                      <div className="just-gamers-list-content fix">
                        <h5 style={{ color: 'white' }}>TRX</h5>
                      </div>
                    </Box>
                    <Box>
                      <div className="just-gamers-list-icon">
                        <Box component='img' src={aviater} alt="game" ></Box>
                      </div>
                      <div className="just-gamers-list-content fix">
                        <h5 style={{ color: 'white' }}>Aviater</h5>
                      </div>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', mb: 3, }}>
                    <Box>
                      <div className="just-gamers-list-icon">
                        <Box component='img' src={ludo} alt="game" ></Box>
                      </div>
                      <div className="just-gamers-list-content fix">
                        <h5 style={{ color: 'white' }}>Ludo</h5>
                      </div>
                    </Box>
                    <Box>
                      <div className="just-gamers-list-icon">
                        <Box component='img' src={casino} alt="game" ></Box>
                      </div>
                      <div className="just-gamers-list-content fix">
                        <h5 style={{ color: 'white' }}>Casino</h5>
                      </div>
                    </Box>
                  </Box>


                </div>
              </div>
              {/* <div className="col-xl-6 col-lg-6 col-md-10">
                <div className="just-gamers-list">
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </main>
      <footer >
        <div className="footer-top footer-bg s-footer-bg pt-100">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget mb-50">
                  <div className="footer-logo mb-35">
                    <Box component='img' src={logo} alt="Logo" sx={{ width: '130px' }}></Box>
                  </div>
                  <div className="footer-text">
                    <p>We have very good strength in innovative
                      technology and tools with over 35 years of
                      experience. We make long-term investments goal
                      in global companies in different sectors, mainly in
                      Europe and other countries.</p>
                    <div className="footer-contact">
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-sm-6">
                <div className="footer-widget mb-50">
                  <div className="fw-title mb-35">
                    <h5>Useful Links</h5>
                  </div>
                  <div className="fw-link">
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="/login">Sign In</a></li>
                      <li><a href="/register">Register</a></li>
                      <li><a href="#">Download</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="footer-widget mb-50">
                  <div className="fw-title mb-35">
                    <h5>Follow us</h5>
                  </div>
                  <div className="footer-social">
                    <ul>
                      <li>
                        <NavLink to='https://www.facebook.com/people/Zupeeter-Token/61559027016227/?mibextid=ZbWKwL' target='_blank'>
                          <Box component='img' src={facebook} alt="Logo" sx={{ width: '35px' }}></Box>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to='https://x.com/zupeetertoken?t=1b-yGXdikXhHMzdjmOz-mA&s=08' target='_blank'>
                          <Box component='img' src={twitter} alt="Logo" sx={{ width: '35px' }}></Box>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to='https://www.instagram.com/zupeetertoken?igsh=NGt3MzViNnZzMXcxs' target='_blank'>
                          <Box component='img' src={instagram} alt="Logo" sx={{ width: '35px' }}></Box>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to='https://t.me/zupeeter' target='_blank'>
                          <Box component='img' src={telegram} alt="Logo" sx={{ width: '35px' }}></Box>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-widget mb-50">
                  <div className="fw-title mb-35">
                    <h5>Newsletter Sign Up</h5>
                  </div>
                  <div className="footer-newsletter">
                    <form action="#">
                      <input type="text" placeholder="Enter your email" />
                      <button><i className="fas fa-rocket"></i></button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-fire"><img src="./img/images/footer_fire.png" alt="" /></div>
          <div className="footer-fire footer-fire-right"><img src="./img/images/footer_fire.png" alt="" /></div>
        </div>
        <div className="copyright-wrap s-copyright-wrap">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="copyright-text">
                  <p>Copyright © 2020 <a href="#">zupeeter</a> All Rights Reserved.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 d-none d-md-block">
                <div className="payment-method-img text-right">
                  <Box component='img' src={logo} alt="Logo" sx={{ width: '100px' }}></Box>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Box>
  )
}
export default Home
