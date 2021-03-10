// Here we will be doing the React tutorial no. 9

import React from "react"

class Forms extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ""}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(

            // formComponent(this)
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>


        )
    }
}

// I am pretty sure that this is wrong, passing in "this" rather than the state?
function formComponent(props) {
    return (
        <form onSubmit={props.handleSubmit}><label>
            Name:
            <input type="text" value={props.value} onChange={props.handleChange} />        </label>
            <input type="submit" value="Submit" />
        </form>
    )
}

class Select extends React.Component {

    constructor(props){
        super(props);
        this.state = {value: "coconut"};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your fave flave is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your fave flave:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="submit" />
            </form>
        );
    }
}


export default {Forms, Select}