"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import loaderIcon from "../../assets/images/loaderIcon.svg";
import "./style.scss";

export default function Loader() {


  return (
    <>
      <div className="stepsProcessPage">
          <div className="centerLoader">
          <div className="containloader">
          </div>
            <Image src={loaderIcon} alt='loaderIcon'/>



          </div>
      </div>
    </>
  );
}
