"use client";
import Image from "next/image";
import Link from "next/link";
import React from 'react'
import cricleTick from '../../assets/images/cricleTick.svg';
import deanLogo from '../../assets/images/dean-logo.png';
import EstateSkillslogo from '../../assets/images/Estate-Skills-logo.png';
import BallpointMarketing from '../../assets/images/Ballpoint-marketing.png';
import WholesalingIncLogo from '../../assets/images/Wholesaling-inc-logo.png';

import "./style.scss";
import { Accordion, Button, Col, Nav, Row, Tab } from "react-bootstrap";
import Monthlytab from "@/components/monthlytab";
import Yearlytab from "@/components/yearlytab";

export default function Pricing() {
  return (
    <div className='PricePage'>
        {/* banner Html start  */}
        <div className="priceBanner">
            <div className="container">
                <div className="col-sm-12">
                    <div className="priceBannerContent">
                        <h1>Pricing Plans</h1>
                        <div className="breadcrumb">
                            <ul>
                                <li><Link href={"/"}>Home</Link></li>
                                <li><span>Pricing Plans</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* banner Html end  */}
        {/* price section Html start */}
        <section className="price_section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="price_content text-center">
                            <h2>Pricing plans for teams<br/> of all sizes</h2>
                            <p>Choose an affordable plan that’s packed with the best features<br/> for engaging your audience.</p>
                        </div>
                    </div>
                    <div className="col-sm-12">
                        <div className="price_wrapper">
                        <Tab.Container id="left-tabs-example" defaultActiveKey="monthly">
                            <Row>
                                <Col sm={12}>
                                    <div className="price_tab_buttons d-flex justify-content-center align-items-center">
                                        <Nav variant="pills">
                                            <Nav.Item>
                                                <Nav.Link eventKey="monthly">Monthly </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="yearly">Yearly</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </Col>
                                <Col sm={12}>
                                    <div className="price_tab_content">
                                        <Tab.Content>
                                            <Tab.Pane eventKey="monthly">
                                                <Monthlytab/>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="yearly">
                                                <Yearlytab/>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Col>
                            </Row>
                            </Tab.Container>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* price section Html end */}
        {/* trusted by html start */}
        <section className="trusted_section text-center">
            <div className="container">
                <div className="row">
                    <div className="col-m-12">
                        <h2>Trusted By Industry Leaders</h2>
                        <ul>
                            <li>
                                <Image src={deanLogo} alt='dean-logo'/>
                            </li>
                            <li>
                                <Image src={EstateSkillslogo} alt='dean-logo'/>
                            </li>
                            <li>
                                <Image src={BallpointMarketing} alt='dean-logo'/>
                            </li>
                            <li>
                                <Image src={deanLogo} alt='dean-logo'/>
                            </li>
                            <li>
                                <Image src={WholesalingIncLogo} alt='WholesalingIncLogo'/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        {/* trusted by html end */}
        {/* faq section html start */}
        <section className="faq_section">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h2 className="text-center">Frequently Asked Questions</h2>
                        <div className="faq_wrapper">
                            <Accordion defaultActiveKey="0" flush>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Do I need Podio? </Accordion.Header>
                                            <Accordion.Body>
                                                Absolutely not! REsimpli is 100% Podio-free. We wouldn’t even touch Podio with a 10 foot pole.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>How is REsimpli different from other software? </Accordion.Header>
                                                <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                                culpa qui officia deserunt mollit anim id est laborum.
                                                </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>How long does it take to set up REsimpli? </Accordion.Header>
                                                <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>How long does it take to set up REsimpli? </Accordion.Header>
                                                <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>How long does it take to set up REsimpli? </Accordion.Header>
                                                <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>How long does it take to set up REsimpli? </Accordion.Header>
                                                <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>How long does it take to set up REsimpli? </Accordion.Header>
                                                <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                    <div className="col-sm-6">
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>How long does it take to set up REsimpli? </Accordion.Header>
                                                <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8">
                                            <Accordion.Header>How long does it take to set up REsimpli? </Accordion.Header>
                                                <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="9">
                                            <Accordion.Header>How long does it take to set up REsimpli? </Accordion.Header>
                                                <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="10">
                                            <Accordion.Header>How long does it take to set up REsimpli? </Accordion.Header>
                                                <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="11">
                                            <Accordion.Header>How long does it take to set up REsimpli? </Accordion.Header>
                                                <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="12">
                                            <Accordion.Header>How long does it take to set up REsimpli? </Accordion.Header>
                                                <Accordion.Body>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </div>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* faq section html end */}
    </div>
  )
}
