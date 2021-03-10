// This is tutorial no. 10 -> Lifting state up
// We'll be creating a little calculator to see if water will boil or not

import React from "react";

const scaleNames = {
    C: 'Celsius',
    F: 'Fahrenheit'
};

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'C'}
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'C', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'F', temperature});
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === "F" ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === "C" ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput
                    scale="C"
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="F"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        )
    }
}

class TemperatureInput extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const temp = this.props.temperature;
        const scale = this.props.scale;

        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}: </legend>
                <input
                    value={temp}
                    onChange={this.handleChange} />
                    {/*<BoilingVerdict scale={scale} temp={parseFloat(temp)} />*/}
            </fieldset>
        );
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

export default Calculator
