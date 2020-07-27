import React from "react";
import "../../Styles/style.css";
import Header from "../../Components/Header";
import ContactForm from "../../Components/ContactForm";

function Contact() {
  return (
    <div>
        <Header value="Contact" />
        <ContactForm />
    </div>
  );
}

export default Contact;