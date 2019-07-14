import React from 'react';

class TextSection extends React.Component {

    text = "";
    title = "";

    constructor(props) {
        super();
        this.text = props.text;
        this.title = props.title;
    }

    render() {
        return <p>
            <b>{this.title}</b><br/>
        {this.text}</p>
    }
}

export default TextSection