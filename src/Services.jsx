import React from 'react'

function Services() {
  return (
    <section id='services'>
        <div id='serviceText'>
            <h1>Services</h1>
        </div>
        <div id='serviceCardDiv'>
            <div className='serviceCard' id='serviceCard1'>
                <img src='./assets/undraw_web_development_0l6v.svg'/>
                <h3>Web Development</h3>
            </div>
            <div className='serviceCard' id='serviceCard2'>
                <img src='./assets/undraw_search_re_x5gq.svg' />
                <h3>Search Engine<br/>Optimization</h3>
            </div>
            <div className='serviceCard' id='serviceCard3'>
                <img src='./assets/undraw_mobile_marketing_re_p77p.svg' />
                <h3>Social Media<br/>Marketing</h3>
            </div>
        </div>
    </section>
  )
}

export default Services
