// Here will be some code for a homepage
// Just some ideas, pretty rough outline
// Will create multiple components, will split them up after

import {Fragment, React} from "react";
import Navbar_1 from "./ExhallCC/Navbar_1";
import './Stylesheets/Home.css'
import {Container} from "react-bootstrap"
import {MDBContainer} from "mdbreact"
import JumbotronPage2 from "./ExhallCC/Jumbotron";

function Home() {
    return (
        <Fragment>
            {/*<MDBContainer>*/}
                <Navbar_1 />
                {/*<JumbotronPage />*/}
                <JumbotronPage2 />
            {/*</MDBContainer>*/}
        </Fragment>

    )


}

export default Home