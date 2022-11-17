import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "./../assets/logoE.png";

export default function TheNavbar() {
  return (
    <>
      <Navbar collapseOnSelect className="headerOne" expand="lg" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="nav-link" to="/auth">Become An Instructor</NavLink>
              <NavLink className="nav-link" to="/auth">Signin</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar
        collapseOnSelect
        className="headerTwo"
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img className="h-20" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <NavLink className="buttons nav-link" to="/">
                Home
              </NavLink>
              <NavLink className="buttons nav-link" to="/courses">
                Courses
              </NavLink>
            </Nav>
            <Nav>
              <NavLink
                className="nav-link registerBtn text-light p-3 rounded hover:opacity-95 transtion"
                to="/auth"
              >
                Regester Now
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
