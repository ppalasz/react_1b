import React from 'react';
import {Link} from 'react-router-dom'

class Menu extends React.Component {

    constructor(props) {
        super();
    }

    render() {
        return (<div className="menu">
        <Link to='/start'>Start</Link>-
        <Link to='/author'>Author</Link>-
        <Link to='/contact'>Contact</Link>-
        <Link to='/data'>Data</Link>-
        <Link to='/404'>404</Link>
        </div>);
    }
}

export default Menu