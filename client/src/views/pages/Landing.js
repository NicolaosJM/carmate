import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import CarForm from '../elements/CarForm';
import Logo from './images/CARMATE-Logo.png';

const Landing = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark">
  <Navbar.Brand href="/dashboard"><img src={Logo} alt="CarMate Logo"></img></Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Nav className="ml-auto float-right">
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>


<CarForm/>

    </div>
  );
};

export default Landing;