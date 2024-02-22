"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import domainIcon from "../../assets/images/domainIcon.svg";
import arrowRight from "../../assets/images/arrowRight.svg";
import searchIcon from "../../assets/images/searchIcon.svg";
import "./style.scss";

function Buildsitesteptwo(props: any) {
  return (
    <>
      <Modal className="builsteponeModal" show={props.show}  onHide={props.hide} keyboard={false} centered>
        <Modal.Header>
          <div className="builstepone text-center">
            <div className="builsteponeWrapper">
              <strong>
                <Image src={domainIcon} alt="domainIcon" />
              </strong>
            </div>
            <h2>What is the address of your business?</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4">
              <div className="position-relative">
                <Form.Control type="text" />
                <button className="searchBtn">
                  <Image src={searchIcon} alt="searchIcon" />
                </button>
              </div>
            </Form.Group>
            <Button className="btnprimary w-100 signin_btn" onClick={()=>{props?.proceedStepThree()}}>
              {" "}
              Next <Image src={arrowRight} alt="arrowRight" />
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Buildsitesteptwo;
