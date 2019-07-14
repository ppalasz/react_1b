import React from 'react';
import '../App.css';
import Header from '../components/header.js';
import TextSection from '../components/text-section.js';
import Footer from '../components/footer.js';
import Menu from '../menu.js';
import {Redirect} from 'react-router-dom'


class Redirect404 extends React.Component  {

  state = {
    redirect: false,
    counter:20
  }
  constructor(props) {
    super();
}

render() {

  setTimeout(() => this.setState({ redirect: (this.state.counter<=0), counter: this.state.counter-1 }), 100)

  return this.state.redirect
      ? <Redirect to="/start?redirected=1" />
      : <div className="App">
      <Menu/>
    <Header title="404" />
    <TextSection title="you got lost" text="go back or something" />
    <h1>{this.state.counter}</h1>
    <Footer title="footer 404" />
    </div>;
}



}



export default Redirect404;
