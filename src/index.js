import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Test from './Test';
import reportWebVitals from './reportWebVitals';

function RenderThis() {

    ReactDOM.render(
        <React.StrictMode>
            <div>
                {/*<App />*/}
                <Test/>
            </div>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

RenderThis()

setInterval(RenderThis, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
