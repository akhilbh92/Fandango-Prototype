import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

class NavBar extends Component {
    render(){
        return (
            <Navbar inverse collapseOnSelect>
            <Navbar.Collapse>
                <Nav>
                <NavItem eventKey={1} href="/admin">
                    Edit Movies/Halls
                </NavItem>
                <NavItem eventKey={2} href="/admin/addMovie">
                    Add Movies
                </NavItem>
                <NavItem eventKey={3} href="/admin/addHall">
                    Add Halls
                </NavItem>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            );
        }
}

export default NavBar;