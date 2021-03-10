import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Clock from './Clock'
import Test from './Test';
import Toggle from './HandlingEvents';
import Cond from './ConditionalRendering';
import Lists from './ListsAndKeys';
import Form from './Forms';
import Calculator from './LiftingStateUp';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <div>
            {/*<App />*/}
            <Test/>
            <Clock/>
            <Toggle/>
            <Cond/>
        </div>
        <div>
            <Lists/>
        </div>
        <br/>
        <div>
            <Form.Forms/>
            <Form.Select/>
        </div>
        <br/>
        <div>
            <Calculator />
        </div>
    </React.StrictMode>,
    document.getElementById('root')
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
