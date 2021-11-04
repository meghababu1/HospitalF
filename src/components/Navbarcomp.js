import React, { Component } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link,Switch} from "react-router-dom";
import Docreg from './Docreg';
import {Patireg} from './Patireg'
import { Home } from './Home';
import {Doctor} from './Doctor';
import { Ward } from './Ward';


export default class Navbarcomp extends Component {
    render() {
        return (
            <Router>
            <div>

                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Care-A-Million</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to ={"/home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to ={"/doctor"}>Doctor</Nav.Link>
                            <Nav.Link as={Link} to ={"/ward"}>Ward</Nav.Link>
                            <NavDropdown title="Register" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to ={"/docreg"}>Doctor</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to ={"patireg"}>Patient</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to ={"staffreg"}>Other Staffs</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Container>
                </Navbar>

            </div>
            <div>
            <Switch>
            <Route path="/doctor">
            <Doctor/>
            </Route>
            <Route path="/ward">
            <Ward/>
            </Route>
          <Route path="/docreg">
            <Docreg/>
          </Route>
          <Route path="/patireg">
            <Patireg />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
            </div>
            </Router>
        )
    }
}
