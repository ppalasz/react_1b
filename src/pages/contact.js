import React from 'react';
import '../App.css';
import Header from '../components/header.js';
import TextSection from '../components/text-section.js';
import Footer from '../components/footer.js';
import Menu from '../menu.js';

function Contact() {
  return (
    <div className="App">
      <Menu/>
    <Header title="Kontakt" />
    <TextSection title="telefon" text="111 222 333" />
    <Footer title="Stopka kontaktu" />
    </div>
  );
}

export default Contact;
