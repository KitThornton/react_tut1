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
import reportWebVitals from './reportWebVitals';

function RenderThis() {

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
        </React.StrictMode>,
        document.getElementById('root')
    );
}

// RenderThis()

setInterval(RenderThis, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
