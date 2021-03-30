// Here will be some code for a homepage
// Just some ideas, pretty rough outline
// Will create multiple components, will split them up after

import {Fragment} from "react";
import Navbar_1 from "./Navbar_1";
import './Stylesheets/Home.css'
import {Container} from "react-bootstrap"

function Home() {
    return (
        <Fragment>
            <Navbar_1 />
            <Container className="Header">

            </Container>
        </Fragment>

    )


}

export default Home