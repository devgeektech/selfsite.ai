"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import lockIcon from "../../assets/images/lockIcon.svg";
import "./style.scss";
import { Form, Button } from "react-bootstrap";
import Dashboardheader from "@/components/dashboardHeader";
import Signup from "@/components/signup";
import Signin from "@/components/signin";

export default function Stepsprocess() {
  /* signin state */
  const [signIn, setSignIn] = useState(false);
  const signfun = () => {
    setSignIn(true);
  };
  const handleClose = () => setSignIn(false);

  // Signup state
  const [signup, setSignUp] = useState(false);

  const openSignUp = () => {
    setSignIn(false);
    setSignUp(true);
  };

  const openSignIn = () => {
    setSignUp(false);
    setSignIn(true);
  };

  const signUpClose = () => {
    setSignUp(false);
  };

  return (
    <>
      <div className="stepsProcessPage">
        {/* <Dashboardheader /> */}
        <div className="sites_page-content">
          <div className="signup_signin_wrapper">
            <Image src={lockIcon} alt="lockIcon" />
            <div className="readyText">
              Website is ready <button>Sign in</button> /{" "}
              <button onClick={() => openSignUp()}>Sign Up</button> to <br />
              access your website.
            </div>
          </div>

          {signIn && (
            <Signin
              signInValue={signIn}
              handleClose={handleClose}
              openSignUp={openSignUp}
            />
          )}

          {signup && (
            <Signup show={signup} hide={signUpClose} openSignIn={openSignIn} />
          )}
        </div>
      </div>
    </>
  );
}
