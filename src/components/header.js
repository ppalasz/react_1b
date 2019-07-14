import React from 'react';

class Header extends React.Component {

    title = "";
    constructor(props) {
        super();
        this.title = props.title;
    }

    render() {
        return <h1 className="header">{this.title}</h1>
    }
}

export default Header