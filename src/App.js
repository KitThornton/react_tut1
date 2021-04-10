import './Stylesheets/App.css';
import {React, Fragment} from 'react';
import './Stylesheets/index.css';
import Clock from './Clock'
import Test from './Test';
import Toggle from './HandlingEvents';
import Cond from './ConditionalRendering';
import Lists from './ListsAndKeys';
import Form from './Forms';
import Calculator from './LiftingStateUp';
import WelcomeDialog from './Composition_Inheritance';
import reportWebVitals from './reportWebVitals';
import SignUpDialog from "./Composition_Inheritance";
import DynamicTable from './Table';
import Navbar_1 from './ExhallCC/Navbar_1';

function App() {
  return (
      <Fragment>
          <div>
              <Navbar_1 />
          </div>
        <div className="App">
          <header className="App-header">
            <p>
              Here we have a collection of tutorials getting to know React...
            </p>
          </header>
        {/*</div>*/}
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
        {/*<div>*/}
        {/*  <DynamicTable />*/}
        </div>
      </Fragment>
  )
}

export default App;
