import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import LinkContainer from "react-router-bootstrap/LinkContainer";
import NavLink from "react-bootstrap/NavLink";

function NavbarProject() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        data-bs-theme="light"
        fixed="top"
      >
        <Container fluid>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="me-auto">
              <LinkContainer to="/">
                <NavLink>Home</NavLink>
              </LinkContainer>
              <LinkContainer to="/projects">
                <NavLink>Projects</NavLink>
              </LinkContainer>
              <LinkContainer to="/contacts">
                <NavLink>Contacts</NavLink>
              </LinkContainer>
              <Button
                variant="outline-success"
                href="./Resume - Bruno Mota.pdf"
                target="blank"
              >
                Resume
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarProject;
