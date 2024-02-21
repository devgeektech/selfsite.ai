"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import crossEyeIcon from "../../assets/images/crossEyeIcon.svg";
import './style.scss';
import Passwordchange from "../passwordsuccessfullychanged";

function Resetpassword(props: any) {
  useEffect(() => {
    console.log("prop---jkl", props);
  }, []);
  
  const [reset, setReset] = useState(false);
  const resetfun = () => { setReset(true); };
  const resetClose = () => setReset(false);
  
  const [passwordchange, setPasswordchange] = useState(false);
  const passwordchangeFun = ()=> {setPasswordchange (true);};
  const passwordchangeClose = ()=> {setPasswordchange (false)};
  
  // const openpasswordchange = () => { setPasswordchange(true)};
  const openpasswordchange = () => {
    setReset(false)
    setPasswordchange(true)
  }

  return (
    <>
      <Modal
        className="resetpasswordModal"  show={props.resetValue} onHide={props.resetClose} keyboard={false} centered >
        <Modal.Header>
          <Modal.Title>Reset  Password</Modal.Title>
          <p>Hello Faryar Ghazanfari </p>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Current Password</Form.Label>
              <div className="position-relative">
                <Form.Control type="password" placeholder="Current Password" />
                <button className="showpassword">
                  <Image src={crossEyeIcon} alt="crossEyeIcon" />
                </button>
                <div className="error ">Enter the correct Password</div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>New Password</Form.Label>
              <div className="position-relative">
                <Form.Control type="password" placeholder="New Password" />
                <button className="showpassword">
                  <Image src={crossEyeIcon} alt="crossEyeIcon" />
                </button>
                <div className="error ">Enter the correct Password</div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Confirm Password</Form.Label>
              <div className="position-relative">
                <Form.Control type="password" placeholder="Confirm Password" />
                <button className="showpassword">
                  <Image src={crossEyeIcon} alt="crossEyeIcon" />
                </button>
                <div className="error ">Enter the Confirm Password</div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Remember password?"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <Button className="btnprimary w-100 signin_btn" 
               //  onClick={props.resetClose}
                 onClick={openpasswordchange}
            >
              Create
            </Button>
            
          </Form>
        </Modal.Body>
      </Modal>

      <Passwordchange show={passwordchange} passwordchangeClose={passwordchangeClose}/>

    </>
  );
}

export default Resetpassword;
