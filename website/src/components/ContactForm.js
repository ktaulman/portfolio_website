import React from 'react';

const ContactForm=(props)=>{

if(props.buttonClicked){
  return(
    <div className="contactform-wrapper">

    <button onClick={props.onClick}className="contactform-button">Contact Me</button>


    <form
      action="https://formspree.io/xbwlzqom"
      method="POST"
      className="contactform-form"
    >
    <label className="contactform-label">Your name:<input type="text" name="name" id="name"/></label>
      
      <label className="contactform-label">Your company:  <input type="text" name="phone" id="phone"/></label>

      <label className="contactform-label">
        Your email:  
        <input type="text" name="_replyto"/>
      </label>
      
      <label className="contactform-label" htmlFor="message">
        Your message:  
        <textarea name="message" id="message"></textarea>
      </label>

    <button type="submit" className="contactform-submit">Send</button>
    </form>
    </div>
    )
  }
else{
return (
<div className="contactform-wrapper">

  <button onClick={props.onClick} className="contactform-button">Contact Me</button>

</div>
)}
}

export default ContactForm