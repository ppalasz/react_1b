import React from 'react';
import '../App.css';
import Header from '../components/header.js';
import TextSection from '../components/text-section.js';
import Footer from '../components/footer.js';
import Menu from '../menu.js';

function Author() {
  return (
    <div className="App">
      <Menu/>
    <Header title="Autor" />
    <TextSection title="Zdzisław Sośnina" text="Lorem Ipsum" />
    <Footer title="Stopka" />
    </div>
  );
}

export default Author;
