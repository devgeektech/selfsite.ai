"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import sucessIcon from "../../assets/images/sucessIcon.svg";
import crossEyeIcon from "../../assets/images/crossEyeIcon.svg";
import './style.scss';

function Passwordchange(props: any) {

  // const [passwordchange, setPasswordchange] = useState(false);
  // const passwordchangeFun = ()=> {setPasswordchange (true);};
  // const passwordchangeClose = ()=> {setPasswordchange (false)};

  return (
    <>
      <Modal
        className="passwordChangeModal"
        show={props.changePassword}
        onHide={props.resetChangePasswordClose}
        keyboard={false}
        centered
      >
        
        <Modal.Body>
          <Image src={sucessIcon} alt='sucessIcon'/>
          <h2>Password Changed!</h2>
          <p>Your password has been changed successfully.</p>
            <Button className="redirectBtn w-100" 
                // onClick={props.resetClose}
            >
              Login Now
            </Button>
            
        
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Passwordchange;
