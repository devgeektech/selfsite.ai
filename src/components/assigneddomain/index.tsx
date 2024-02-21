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

function Assigneddomain(props: any) {
  // Assign Domain Modal State
  const [assigneddomain, setAssignedDomain] = useState(false);
  const assigneddomainfun = () => {
    setAssignedDomain(true);
  };
  const AssignedDomainClose = () => setAssignedDomain(false);

  useEffect(() => {
    console.log("prop---", props);
  }, []);

  return (
    <>
      <Modal
        className="assigneddomainModal"
        show={props.show}
        onHide={props.AssignedDomainClose}
        keyboard={false}
        centered
      >
        <Modal.Header
        // closeButton
        >
          <div className="domainIcon text-center">
            <div className="domainIconWrapper">
              <span>
                <Image src={domainIcon} alt="domainIcon" />
              </span>
            </div>
            <h2>Assign Own Domain</h2>
            <p>Add this TXT record to you DNS</p>
            <p>TXT self-site-verification=ddwFKntwke3fv9P1kCvLVmOmutI=</p>
          </div>
        </Modal.Header>
      </Modal>
    </>
  );
}

export default Assigneddomain;
