import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    let activeStyle = {
        color: "#EE4B2B",
    };
    return (
        <div className="header">
            <Navbar expand="lg" fixed="top">
                <Container>
                    <Navbar.Brand>Hafidz Radhival</Navbar.Brand>
                    <Navbar.Toggle/>
                    <Navbar.Collapse className='justify-content-end'>
                        <Nav className='ml-auto'>
                            <NavLink to="/" style= {({isActive}) => (isActive ? activeStyle: undefined)} className="nav-link">Home</NavLink>
                            <NavLink to="/projects" style= {({isActive}) => (isActive ? activeStyle: undefined)} className="nav-link">Projects</NavLink>
                            <NavLink to="/services" style= {({isActive}) => (isActive ? activeStyle: undefined)} className="nav-link">Services</NavLink>
                            <NavLink to="/about" style= {({isActive}) => (isActive ? activeStyle: undefined)} className="nav-link">About</NavLink>
                            <NavLink to="/contact" style= {({isActive}) => (isActive ? activeStyle: undefined)} className="nav-link">Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;