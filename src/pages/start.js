import React from 'react';
import '../App.css';
import Header from '../components/header.js';
import TextSection from '../components/text-section.js';
import Footer from '../components/footer.js';
import Counter from '../components/counter.js';
import Menu from '../menu.js';


function Start() {
  return (
    <div className="App">
      <Menu/>
    <Header title="Start" />
    <Counter name="licznik" id="66" />
    <TextSection title="ble ble" text="Lorem Ipsum" />
    <TextSection title="bla bla" text="Jakiś tekst" />
    <Footer title="Stopka start" />
    </div>
  );
}

export default Start;
