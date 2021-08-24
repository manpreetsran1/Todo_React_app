import React from 'react';
import PropTypes from 'prop-types';
import {Navbar, Container, Nav } from 'react-bootstrap';

 function Header(props) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>


                        {props.Searchbar ?<Nav.Link href="#link">Search</Nav.Link> : ""}
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

Header.defaultProps = {
    Searchbar: true,
}


Header.propTypes = {
    Searchbar: PropTypes.bool.isRequired,
}

export default Header;

