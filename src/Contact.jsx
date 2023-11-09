import React from 'react'

function Contact() {
  return (
    <section id='Contact'>
        <div>
            <form>
                <h3>Contact Us</h3>
                <input placeholder='Name'></input>
                <input placeholder='Email'></input>
                <textarea placeholder='Message' type='text' id='message'></textarea>
                <button type='submit' id='formButton'>Send</button>
            </form>
        </div>
        <div id='info'>
            <h3>Info</h3>
            <p>Email: marky@gmail.com</p>
            <p>Phone: 123-456-789</p>
            <p>Address: 24 Marky street, Lagos</p>
        </div>
    </section>
  )
}

export default Contact