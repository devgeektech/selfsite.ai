"use client";
import Image from "next/image";
import React from "react";
import "./style.scss";
import logo from '../../assets/images/logo.svg';
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";

function Header() {
  return (
    <header className="header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#"><Image src={logo} alt='logo'/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="#action1">Product</Nav.Link>
              <NavDropdown title="Resources" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Resources 1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Resources 2</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Resources 3</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Tools" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Tools 1</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Tools 2</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Tools 3</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="btns_wrap">
              <Button variant="btnSecondary">Sign In</Button>
              <Button className="btnprimary">Build Your Site</Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default Header;
