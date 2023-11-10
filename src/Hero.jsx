import React from 'react'
import { Link } from 'react-router-dom'


function Hero() {
  return (
    <section id='heroSection'>
      <div id='hero'>
        <div id='heroText'>
          <h1>Grow Your<br/>Business With<br/>Us</h1>
          <p>We provide services for your business to be<br/>better than ever</p>
          <Link className='link' to="/contact">
            <button className='button'>Get Started</button>
          </Link>
        </div>
        <div>
          <img src='./assets/undraw_online_ad_re_ol62.svg'/>
        </div>
      </div>
    </section>
  )
}

export default Hero
