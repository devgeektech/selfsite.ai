"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import domainIcon from "../../assets/images/domainIcon.svg";
import arrowRight from "../../assets/images/arrowRight.svg";
import searchIcon from "../../assets/images/searchIcon.svg";
import './style.scss';

function Assigndomain(props: any) {
  // Assign Domain Modal State
  const [assigndomain, setAssignDomain] = useState(false);
  const assigndomainfun = () => { setAssignDomain(true); };
  const AssignDomainClose = () => setAssignDomain(false);

  useEffect(() => {
    console.log("prop---", props);
  }, []);

  return (
    <>
      <Modal
        className="domainModal"
        show={props.assigndomianValue}
        onHide={props.AssignDomainClose}
        keyboard={false}
        centered
      >
        <Modal.Header 
        // closeButton
        >
          <div className="domainIcon text-center">
            <div className="domainIconWrapper">
              <span>
                <Image src={domainIcon} alt='domainIcon'/>
              </span>
            </div>  
            <h2>Assign Own Domain</h2>
          </div>  
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4">
              <div className="position-relative">
                <Form.Control type="text" placeholder="https://photograhy.com" />
                <div className="error d-none">This is not a valid domain</div>
              </div>
            </Form.Group>
            <Button className="btnprimary w-100 signin_btn"  onClick={props.openAssignedDomain}> Proceed <Image src={arrowRight} alt="arrowRight"/></Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Assigndomain;