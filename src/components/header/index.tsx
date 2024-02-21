"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./style.scss";
import logo from "../../assets/images/logo.svg";
// import Signin from "../signin";
import {
  Button,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import Signin from "../signin";
import Resetpassword from "../resetpassword";
import Link from "next/link";

function Header() {
  /* signin state */
  const [signIn, setSignIn] = useState(false);
  const signfun = () => { setSignIn(true); };
  const handleClose = () => setSignIn(false);
/* Reset state */
const [reset, setReset] = useState(false);
const resetfun = () => { setReset(true); };
const resetClose = () => setReset(false);

const openReset=()=>{
  setSignIn(false)
  setReset(true)
}


  return (
    <>
      <header className="header">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#">
              <Image src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
                <Nav.Link href="#action1">Product</Nav.Link>
                <NavDropdown title="Resources" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">
                    Resources 1
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Resources 2
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Resources 3
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Tools" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Tools 1</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Tools 2</NavDropdown.Item>
                  <NavDropdown.Item href="#action5">Tools 3</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <div className="btns_wrap">
                <Button variant="btnSecondary" onClick={signfun}>
                  Sign In
                </Button>
                <Link href={"/stepsprocess"} className="btnprimary buildBtn">Build Your Site</Link>
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      {signIn && (
        <Signin
          signInValue={signIn}
          handleClose={handleClose}
          openReset={openReset}
        />
      )}


      {reset && (
      <Resetpassword
      resetValue={reset}
      resetClose={resetClose}
      />
      )}


    </>
  );
}
export default Header;
