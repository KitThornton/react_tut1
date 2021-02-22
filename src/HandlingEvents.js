// Main Concepts #6: Handling Events
import React from "react";

class Toggle extends React.Component {

    constructor(props){
        super(props);
        this.state = {isToggleOn: true};

        // We need to bind
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'On' : 'Off'}
            </button>
        )
    }
}

export default Toggle

// class InputField extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state =  {text: ""}
//
//         // We need to bind
//
//     }
//
//     handleInput() {
//         this.setState(state => ({
//             text: state.text
//         }))
//     }
//
// }
//
