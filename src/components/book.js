import React from 'react';

class Book extends React.Component {

    title = "";
    constructor(props) {
        super();
        this.id = props.id;
        this.title = props.title;
        this.text = props.text;
    }

    render() {
        return <p><b>{this.title}</b> {this.text}</p>
    }
}

export default Book