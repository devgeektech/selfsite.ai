"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import crossEyeIcon from "../../assets/images/crossEyeIcon.svg";
import googleIcon from "../../assets/images/googleIcon.svg";
import "./style.scss";
import Link from "next/link";

function Signup(props: any) {
  // const [signup, setSignup] = useState(false);
  // const signupfun = () => { setSignup(true); };
  // const signupClose = () => setSignup(false);

  useEffect(() => {
    console.log("prop---", props);
  }, []);

  return (
    <>
      <Modal
        className="signupModal"
        show={props.show}
        onHide={props.signupClose}
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>Sign Up</Modal.Title>
          <p>Welcome & Join us by creating a free account !</p>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your Email" />
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
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Confirm Password</Form.Label>
              <div className="position-relative">
                <Form.Control type="password" placeholder="Confirm Password" />
                <button className="showpassword">
                  <Image src={crossEyeIcon} alt="crossEyeIcon" />
                </button>
                <div className="error d-none">Enter the correct Password</div>
              </div>
            </Form.Group>
           
            <Form.Group className="mb-3">
              <div className="d-flex">
              <Form.Check
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
               <p className="ms-2 mb-0">By creating a account you agree to our{" "}
                <Link href={"/"}>Terms & Conditions</Link> and{" "}
                <Link href={"/"}>Privacy Policy.</Link>
              </p>
            </div>
            </Form.Group>
            

            <Button
              className="btnprimary w-100 signin_btn"
              // onClick={props.handleClose}
            >
              Sign Up
            </Button>
          </Form>
          <div className="btns_text text-center">
            <p className="text-center">Already have an account?{" "}<button
              // onClick={props.openReset}
              >
                Sign In
              </button>
            </p>
            <p className="or_text text-center">OR</p>
            <button className="gmail_login">
              <Image src={googleIcon} alt="googleIcon" />
              Login With Google
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Signup;
