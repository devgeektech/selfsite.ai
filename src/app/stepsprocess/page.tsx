"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

import "./style.scss";
import { Form, Button } from "react-bootstrap";
import Dashboardheader from "@/components/dashboardHeader";
import Signup from "@/components/signup";

export default function Stepsprocess() {
    const [signup, setSignup] = useState(true);
    const signupfun = () => { setSignup(true); };
    const signupClose = () => setSignup(false);


  return (
    <>
      <div className="stepsProcessPage">
        <Dashboardheader />
        <div className="sites_page-content">
          {/* <Signup signupValue={signup} show={setSignup}/> */}
          <Signup show={true}/>

         

      
        </div>
      </div>

    </>
  );
}