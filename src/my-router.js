import React from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import Start from './pages/start.js';
import Author from './pages/author.js';
import Contact from './pages/contact.js';
import Redirect404 from './pages/Redirect404.js';
import Data from './pages/data.js';

class MyRouter extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (<BrowserRouter>
            <Switch>
              <Route exact path="/" render={() => (<Redirect to="/start" />)}/>
              <Route exact path="/start" component={Start}/>
              <Route exact path="/author" component={Author}/>
              <Route exact path="/data" component={Data}/>
              <Route exact path="/contact" component={Contact}/>
              <Route component={Redirect404} />
            </Switch>
            </BrowserRouter>);
    }
}

export default MyRouter