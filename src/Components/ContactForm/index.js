//I wanted to try to use the react 'useRef' here to set the value of the name, email, and message inputs to ""
//after submit is pressed.  However, using 'ref' in the input attributes caused the email in emailjs to send an empty
//email. So, I used javascript instead to get the elements, which appears to work fine.

import React, { useState } from "react";
import "../../Styles/ContactForm.css";
import "../../Styles/style.css";
import emailjs from 'emailjs-com';
import SimpleModal from "../SimpleModal";

function ContactForm() {

  const [isOpen, setIsOpen] = useState({
    modalVisible: false,
    modalText: ""
  });  

  const showModal = (message) => {
    setIsOpen({modalVisible: true, modalText: message});
  };

  const hideModal = () => {
    setIsOpen(false);
  };  


  function sendEmail(e) {
    e.preventDefault();  

    //using refs caused email js to send emails with no data.
    //nameRef.current.value = "";
    // emailRef.current.value = "";
    // messageRef.current.value = "";       

    emailjs.sendForm('gmail', 'contact_form', e.target, 'user_cUeBxGevFya5FJOZR0YzF')
      .then((result) => {
        showModal("Contact form has been submitted.");
      }, (error) => {
        showModal(`the contact form has encountered an error with message ${error.text}`);
      });

    document.getElementById('inputName').value = "";
    document.getElementById('emailAddress').value = "";
    document.getElementById('textArea').value = "";
  }

  return (
    <>    
    <form className="contact-form" onSubmit={sendEmail}>
          <div className="form-group mt-4">
            <label htmlFor="inputName">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputName" 
              placeholder="John Smith" 
              name="user_name"
              required>                                
            </input>
            <div className="valid-feedback">
            </div>
            <div className="invalid-feedback">
              Please include your name.
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="emailAddress">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="emailAddress" 
              placeholder="example@gmail.com" 
              name="user_email"
              required>
            </input>
            <div className="valid-feedback">
            </div>
            <div className="invalid-feedback">
              Please include your email address and use a correct email format (for example, test@gmail.com).
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="textArea">Message</label>
            <textarea 
              className="form-control" 
              id="textArea" 
              rows="3" 
              name="message"
              required>
            </textarea>
            <div className="valid-feedback">
            </div>
            <div className="invalid-feedback">
              Please include a message.
            </div>
          </div>
          <button 
            type="submit" 
            className="btn btn-primary mb-3">Submit            
          </button>
        </form>

        <SimpleModal 
          show={isOpen.modalVisible}
          onHide={hideModal}
          body={isOpen.modalText}/>
    </>
  );
}

export default ContactForm;