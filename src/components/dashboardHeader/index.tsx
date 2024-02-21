"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../assets/images/logo.svg";
import menuToggle from "../../assets/images/menuToggle.svg";
import user from "../../assets/images/user.png";
import lightIcon from "../../assets/images/lightIcon.svg";

import "./style.scss";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  Dropdown,
} from "react-bootstrap";

export default function Dashboardheader() {
  return (
    <div className="dashboardPage">
      <div className="dashboardHeader">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <div className="logo_toggle">
              <button className="toogleMenu">
                <Image src={menuToggle} alt="menuToggle" />
              </button>
              <Navbar.Brand href={"/"}>
                <Image src={logo} alt="logo" />
              </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav className=" my-2 my-lg-0 align-items-center" navbarScroll>
                <button className="btnThemeChange">
                  <Image src={lightIcon} alt="lightIcon" />
                </button>
                <Nav.Link href="#action1">Website</Nav.Link>
                <Nav.Link href="#action2">Domains</Nav.Link>
                <Dropdown className="user_info">
                  <Dropdown.Toggle id="dropdown-basic">
                    <div className="d-flex align-items-center">
                      <p>info@faryarghazanfari.com</p>
                      <Image src={user} alt="user" />
                    </div>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                      Something else
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}
