import React from 'react';

class Footer extends React.Component {

    title = "";
    constructor(props) {
        super();
        this.title = props.title;
    }

    render() {
        return <h3>{this.title}</h3>
    }
}

export default Footer