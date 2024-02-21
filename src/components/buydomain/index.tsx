"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import domainIcon from "../../assets/images/domainIcon.svg";
import arrowRight from "../../assets/images/arrowRight.svg";
import arrowRightgradientIcon from "../../assets/images/arrowRightgradientIcon.svg";
import paypalText from "../../assets/images/paypalText.svg";
import cardWhiteIcon from "../../assets/images/cardWhiteIcon.svg";
import './style.scss';

function Buydomain(props: any) {
  // Buy Domain Modal State
  const [buydomain, setBuydomain] = useState(false);
  const buydomainfun = () => { setBuydomain(true); };
  const BuydomainClose = () => setBuydomain(false);

  return (
    <>
      <Modal
        className="buydomainModal"
        show={props.show}
        onHide={props.BuydomainClose}
        keyboard={false}
        centered
      >
        <Modal.Header 
        // closeButton
        >
          <div className="domainIcon text-center">
            <h2>Purchase</h2>
            <p>Domain selfsitefaryar.com</p>
            <p>Price 23.00$</p>
          </div>  
        </Modal.Header>
        <Modal.Body>
          <Form>
            <div className="row">
              <div className="col-sm-6">
                <Form.Group className="mb-3">
                  <Form.Label>First Name<span> *</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter your first name" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email<span> *</span></Form.Label>
                  <Form.Control type="email" placeholder="Enter your email address" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Address Line 1<span> *</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter your  address" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>City<span> *</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter your  City" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Zip Code<span> *</span></Form.Label>
                  <Form.Control type="text" placeholder="Enter your  address" />
                </Form.Group>
                </div>
                <div className="col-sm-6">
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name<span> *</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter your last name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Phone Number<span> *</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter your phone number" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Address Line 2<span> *</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter your last name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>State<span> *</span></Form.Label>
                    <Form.Control type="text" placeholder="Enter your last name" />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label>Country<span> *</span></Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>Select  your Country</option>
                      <option value="1">India</option>
                      <option value="2">USA</option>
                      <option value="3">AUS</option>
                    </Form.Select>
                  </Form.Group>
                </div>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3">
                <Button className="btnprimary w-100 signin_btn"> Modify Contact Data <Image src={arrowRight} alt="arrowRight"/></Button>
              </div>  
              <div className="col-md-6 mb-3">
                <Button className="w-100 contactDatabtn"><span>Save Contact Data</span> <Image src={arrowRightgradientIcon} alt="arrowRightgradientIcon"/></Button>
              </div>  
            </div>  
            <div className="row">
              <div className="col-md-6 mb-3">
                <Button className="paypalBtn w-100">  <Image src={paypalText} alt="paypalText"/></Button>
              </div>  
              <div className="col-md-6 mb-3">
                <Button className="cardBtn w-100"> <Image src={cardWhiteIcon} alt="cardWhiteIcon"/> Debit or Credit Card</Button>
              </div>  
            </div> 
            <div className="row">
              <div className="col-sm-12">
                <p className="poweredBy">Powered by<Image src={paypalText} alt='paypalText'/></p>
              </div>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Buydomain;