import React, { useEffect } from 'react'
import Hero from './Hero'
import Contact from './Contact'
import Services from './Services'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import About from './About'

function Navbar() {
    useEffect(() =>{
        const hamburger = document.getElementById("hbDiv");
        const link = document.getElementsByClassName("link");

        link.onclick = () =>{
            link.classList.toggle("activeLink")
        }

        hamburger.onclick = () =>{
            const navbar = document.getElementById("ul");
            navbar.classList.toggle("active");

            const overlay = document.getElementById("overlay");
            overlay.classList.toggle("overlayClass");

            const hbDiv = document.getElementById("hbDiv");
            hbDiv.classList.toggle("lineAni");
        }
    }, []);

  return (
    <>
        <div id='overlay'></div>
        <nav>
            <div>
                <h1>DigiCraft</h1>
            </div>
            <ul id='ul'>
                <li id='closeMenuDiv'>
                    <img src='src/assets/close_FILL1_wght400_GRAD0_opsz48.svg' id='closeMenu'/>
                </li>
                <li>
                    <Link className='link' to="/">Home</Link>
                </li>
                <li>
                    <Link className='link' to="/aboutus">About Us</Link>
                </li>
                <li>
                    <Link className='link' to="/services">Services</Link>
                </li>
                <li>
                    <Link className='link' to="/contact">Contact</Link>
                </li>
            </ul>
            <div id='hbParent'>
                <Link className='link' id='navButtonLink' to="/contact">
                    <button className='button'>Contact Us</button>
                </Link>
                <div id='hbDiv'>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
            </div>
        </nav>

        <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<About />} />
        </Routes>
    </>
  )
}

export default Navbar