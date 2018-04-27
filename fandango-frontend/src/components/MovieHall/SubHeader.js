import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

class SubHeader extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/movieschedule">
                            Schedule Movie
                        </NavItem>
                        <NavItem eventKey={2} href="/movierevenue">
                            View Movies Revenues
                         </NavItem>
                        <NavItem eventKey={3} href="/cancelbooking">
                            Cancel User Booking
                        </NavItem>
                        <NavItem eventKey={3} href="/searchbill">
                            View Bill Information
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default SubHeader;