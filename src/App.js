import './App.css';
import {React, Fragment} from 'react';
import './index.css';
import Clock from './Clock'
import Test from './Test';
import Toggle from './HandlingEvents';
import Cond from './ConditionalRendering';
import Lists from './ListsAndKeys';
import Form from './Forms';
import Calculator from './LiftingStateUp';
import WelcomeDialog from './Composition_Inheritance';
import reportWebVitals from './reportWebVitals';
import DynamicTable from './Table';
import SignUpDialog from "./Composition_Inheritance";

function App() {
  return (
      <Fragment>
        <div className="App">
          <header className="App-header">
            <p>
              Here we have a collection of tutorials getting to know React...
            </p>
          </header>
        </div>
        {/*<div>*/}
        {/*  <Test/>*/}
        {/*  <Clock/>*/}
        {/*  <Toggle/>*/}
        {/*  <Cond/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <Lists/>*/}
        {/*</div>*/}
        {/*<br/>*/}
        {/*<div>*/}
        {/*  <Form.Forms/>*/}
        {/*  <Form.Select/>*/}
        {/*</div>*/}
        {/*<br/>*/}
        {/*<div>*/}
        {/*  <Calculator/>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <SignUpDialog/>*/}
        {/*</div>*/}
        <div>
          <DynamicTable />
        </div>
      </Fragment>
  )
}

export default App;
