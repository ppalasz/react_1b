import React from 'react';

class Counter extends React.Component {
    state = {
        name : "",
        id:0
      }

    constructor(props) {
        super();
        this.state = {
             id: parseInt(props.id),
             name: props.name
        };

        this.handleClick = this.handleClickPlus.bind(this)
        this.handleClick = this.handleClickMinus.bind(this)
        this.handleClick = this.handleClickReset.bind(this)
    }

    handleClickPlus = () =>
        this.setState(prevState => {
            return{
                id: prevState.id + 1
            }
        })

    handleClickMinus = () =>
        this.setState(prevState => {
            return{
                id: prevState.id - 1
            }
        })

    handleClickReset = () =>
        this.setState(prevState => {
            return{
                id: 0
            }
        })

    render() {

       // setCookie('counter', this.state.id, { path: '/' });
        return(
            <div>
                <button onClick={this.handleClickMinus}>-</button>
                {this.state.name} {this.state.id}
                <button onClick={this.handleClickPlus}>+</button>
                <button onClick={this.handleClickReset}>reset</button>
            </div>
        )
    }
}
export default Counter