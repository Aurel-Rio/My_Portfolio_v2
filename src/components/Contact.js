
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Footer from "./Footer";
import Navbar from "./Navbar";
import '../Contact.css';


const Contact = () => {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm(
          "service_wekq10f",
          "template_alsbe55",
          form.current,
          "eVkdTD1Dd-4uy1Z8M"
        )
        .then((result) => {
          setMessageSent(true);
        }, (error) => {
          console.log(error.text);
        });
    };
  
    return (
      <div id="contact">
        <Navbar />
        <h3>Me contacter:</h3>
        <p>Mail: servant.aurelien.developer@gmail.com</p>
        <p> Tel: 06.66.90.68.67</p>
        <Footer />
  
        {messageSent ? (
          <p>E-mail envoyé !</p>
        ) : (
          <form ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="msg" />
            <input type="submit" value="Send" />
          </form>
        )}
      </div>
    );
  };
  
  export default Contact;