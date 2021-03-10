// This is tutorial no. 10 -> Lifting state up
// We'll be creating a little calculator to see if water will boil or not

import React from "react";

const scaleNames = {
    C: 'Celsius',
    F: 'Fahrenheit'
};

class TemperatureInput extends React.Component{
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature:''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temp = this.state.temperature;
        const scale = this.props.scale;

        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}: </legend>
                <input
                    value={temp}
                    onChange={this.handleChange} />
                    <BoilingVerdict scale={scale} temp={parseFloat(temp)} />
            </fieldset>
        );
    }
}

function BoilingVerdict(props) {

    let boilingTemp;
    let scale = props.scale;

    scale === 'C' ? boilingTemp = 100 : boilingTemp = 212;

    if (props.temp >= boilingTemp) {
        return <p>Defs gonna boil mate.</p>;
    } else {
        return <p>Not gonna boil mate</p>;
    }
}

class Calculator extends React.Component {
    render() {
        return (
            <div>
                <TemperatureInput scale="C" />
                <TemperatureInput scale="F" />
            </div>
        )
    }
}

export default Calculator
