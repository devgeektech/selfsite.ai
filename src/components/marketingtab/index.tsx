"use client";
import Image from "next/image";
import React from "react";
import "./style.scss";
import learnmoreIcon from "../../assets/images/learnmoreIcon.svg";
import tabImage from "../../assets/images/tabImage.png";
import Link from "next/link";

function Tabssection() {
  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5">
            <div className="content-tab-left">
              <h5>Marketing</h5>
              <h2>The easiest way to drive traffic.</h2>
              <p>
                Grow your business with built-in SEO, automated blogging, ad
                generation, and review management.
              </p>
              <Link className="learnmore" href={"/"}>
                Learn more
                <Image src={learnmoreIcon} alt="icon" />
              </Link>
            </div>
          </div>
          <div className="col-md-7">
            <div className="fullImage">
              <Image className="w-100" src={tabImage} alt="tabImage" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tabssection;
