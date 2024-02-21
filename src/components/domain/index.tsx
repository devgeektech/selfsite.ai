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

function Domain(props: any) {
  // Domain Modal State
  const [domain, setDomain] = useState(false);
  const domainfun = () => { setDomain(true); };
  const DomainClose = () => setDomain(false);

  useEffect(() => {
    console.log("prop---", props);
  }, []);

  return (
    <>
      <Modal
        className="domainModal"
        show={props.domianValue}
        onHide={props.DomainClose}
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
            <h2>Search for domain</h2>
          </div>  
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-4">
              <div className="position-relative">
                <Form.Control type="text" placeholder="Search for domain" />
                <button className="searchBtn"><Image src={searchIcon} alt='searchIcon'/></button>
                <div className="error d-none">Enter the correct email</div>
              </div>
              <p className="error d-none">Domain not available</p>
              <p className="domainPrice d-none">selfsitefaryar.com available for 23.00$/year</p>
            </Form.Group>
            <Button className="btnprimary w-100 signin_btn"  onClick={props.openBuydomain}> Search <Image src={arrowRight} alt="arrowRight"/></Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Domain;