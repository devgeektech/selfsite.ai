"use client";
import React, { useRef, useState } from "react";

import "./style.scss";
import Buildsitestepone from "@/components/buildsitestepone";
import Buildsitesteptwo from "@/components/buildsitesteptwo";
import Buildsitestepthree from "@/components/buildsitestepthree";

export default function Buildsitesteps() {

    /* Reset state */
    const [stepOne, setStepOne] = useState(true);
    const [steptwo, setStepTwo] = useState(false);
    const [stepthree, setStepThree] = useState(false);
  
    const closeStepOne = () =>{
      setStepOne(false);
    } 

    const proceedStepTwo = () =>{
      console.log('STEP TWO');
      setStepOne(false);
      setStepTwo(true);
    } 

    const proceedStepThree = () =>{
      console.log('STEP THREE');
      setStepTwo(false);
      setStepThree(true);
    } 

    const closeStepTwo = () =>{
      setStepTwo(false);
    } 

    const closeStepThree = () =>{
      setStepThree(false);
    } 


  return (
    <>
      <div className="stepsProcessPage">
        <div className="sites_page-content">
          <>
            <Buildsitestepone
            show={stepOne}
            hide={closeStepOne}
            proceedStepTwo={proceedStepTwo}
            />

           <Buildsitesteptwo
            show={steptwo}
            hide={closeStepTwo}
            proceedStepThree={proceedStepThree}
            />

           <Buildsitestepthree
            show={stepthree}
            hide={closeStepThree}
            />            
         </>  
        </div>
      </div>
    </>
  );
}