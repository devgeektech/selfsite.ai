"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import crossEyeIcon from "../../assets/images/crossEyeIcon.svg";
import googleIcon from "../../assets/images/googleIcon.svg";
import './style.scss';
import Link from "next/link";

function Signin(props: any) {
//   const [show, setShow] = useState(props.signInValue);
  //   const [show, setShow] = useState(props.signInValue);

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  useEffect(() => {
    console.log("prop---", props);
  }, []);

  return (
    <>
      <Modal
        className="signinModal"
        show={props.signInValue}
        onHide={props.handleClose}
        keyboard={false}
        centered
      >
        <Modal.Header 
        // closeButton
        >
          <Modal.Title>Sign In</Modal.Title>
          <p>Welcome back Selfsite.ai</p>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your Email" />
              <div className="error d-none">Enter the correct email</div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <div className="position-relative">
                <Form.Control type="password" placeholder="Password" />
                <button className="showpassword">
                  <Image src={crossEyeIcon} alt="crossEyeIcon" />
                </button>
                <div className="error d-none">Enter the correct Password</div>
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
                // onClick={props.handleClose}
            >
              Sign In
            </Button>
            <div className="btns_text text-center">
              <button onClick={props.openReset}>Forgot Password ?</button>
              <p>
                Don't have an account? <Link href={"/stepsprocess"}>Sign Up</Link>
              </p>
              <p className="or_text text-center">OR</p>
              <button className="gmail_login">
                <Image src={googleIcon} alt="googleIcon" />
                Login With Google
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signin;
