import React from 'react'
import "./Contact.css"
function Contact() {
  return (
    <>
      
      
    
  <div class="contact-form-wrapper d-flex justify-content-center ">
    <form action="#" class="contact-form">
      <h3 class="title">Reach Us</h3>
      <p class="description">Feel free to contact us if you need any help.
      </p>
      <div>
        <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required></input>
      </div>
      <div>
        <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required></input>
      </div>
      <div>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
      </div>
      <div class="submit-button-wrapper">
        <input type="submit" value="Send"></input>
      </div>
    </form>
  </div>

    </>
  )
}

export default Contact