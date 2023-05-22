// import React from "react";
// function Contact() {
//     return (
//         <div>
//             <section class="contact" id="contact">
//             <h2 class="heading">Contact <span>Me</span> </h2>

//             <form action="#">
//                 <div class="input-box">
//                     <input type="text" placeholder="Full Name" />
//                     <input type="email" placeholder="Email Address"/>
//                 </div>
//                 <div class="input-box">
//                     <input type="number" placeholder="Mobile Number"/>
//                     <input type="text" placeholder="Email subject"/>
//                 </div>
//                 <textarea name="" id="" cols="30" rows="10" placeholder="Your Meassage"></textarea>
//                 <input type="submit" value="Send Meassage" class="btn"/>
//             </form>
//         </section>
//         </div>
//                         )
// }
// export default Contact;


import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/api/send-email', {
        name,
        email,
        message
      });

      // Clear form inputs on successful submission
      setName('');
      setEmail('');
      setMessage('');

      alert('Email sent successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to send email.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
