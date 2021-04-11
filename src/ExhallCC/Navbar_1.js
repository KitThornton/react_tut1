// So, let's test out some code for some nav-bars!
import * as React from "react";
import {Navbar, NavDropdown, Nav, Form, Button, FormControl } from "react-bootstrap";
import logo from '../exhall_logo.jpg';

class Navbar_1 extends React.Component{

    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="../home">
                    Exhall and Wixford CC
                    {/*<img*/}
                    {/*    src={logo}*/}
                    {/*    width="30"*/}
                    {/*    height="30"*/}
                    {/*    className="d-inline-block align-top"*/}
                    {/*    alt="Exhall CC logo"*/}
                    {/*/>*/}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="../club">The Club</Nav.Link>
                        {/*<Nav.Link href="../hallOfFame">Hall of Fame</Nav.Link>*/}
                        <NavDropdown title="Trophy Cabinet" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="../trophies/players">Players</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="../trophies/club">Club</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="../players">Players</Nav.Link>
                        {/*<Nav.Link href="#aboutTheClub">About the Club</Nav.Link>*/}
                        <NavDropdown title="Batting" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="../batting/firstXI">First XI</NavDropdown.Item>
                            <NavDropdown.Item href="../batting/secondXI">Second XI</NavDropdown.Item>
                            <NavDropdown.Item href="../batting/thirdXI">Third XI</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="../batting/career">Career</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Bowling" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="../bowling/firstXI">First XI</NavDropdown.Item>
                            <NavDropdown.Item href="../bowling/secondXI">Second XI</NavDropdown.Item>
                            <NavDropdown.Item href="../bowling/thirdXI">Third XI</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="../bowling/career">Career</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="../top10s">Top 10s</Nav.Link>
                        <Nav.Link href="../achievements">Achievements</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search for a player..." className="mr-sm-2" />
                        <Button variant="outline-light">Search</Button>
                    </Form>
                    {/*<Nav>*/}
                    {/*    <Nav.Link href="../about">About the Developer</Nav.Link>*/}
                    {/*    <Nav.Link eventKey={2} href="#memes">Contact</Nav.Link>*/}
                    {/*</Nav>*/}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Navbar_1