"use client";
import Image from "next/image";
import React from "react";
import  logo from '../../assets/images/logo.svg';
import "./style.scss";
import { Button } from "react-bootstrap";
import Link from "next/link";

export default function footer() {
  return (
    <footer className="footer">
      <div className="container trySelf">
        <div className="row">
          <div className="col-sm-12">
            <div className="selfsite">
              <div className="selfsite_inner">
                <h2>Try Selfsite free today</h2>
                <p>
                  Build a website and get your business online in minutes.
                  <br /> No credit card required.
                </p>
                <Button className="whitebtn">Generate your website</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container footerMenus">
        <div className="row">
          <div className="col-xl-4 col-md-3">
            <div className="logo_wrapper">
              <Link href={"/"}><Image src={logo} alt='logo'/></Link>
              <p>Selfsite makes owning a business<br/> easier than having a job</p>
              <div className="contact_info">
                <h4>CONTACT</h4>
                <Link href={'mailto:info@selfsite.ai'}>info@selfsite.ai</Link>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-md-3">
            <div className="footerMenu">
              <h4>Product</h4>
              <ul>
                <li><Link href={"/"}>AI Assistant</Link></li>
                <li><Link href={"/"}>CRM</Link></li>
                <li><Link href={"/"}>Invoicing</Link></li>
                <li><Link href={"/"}>Pricing</Link></li>
                <li><Link href={"/"}>Website builder</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-md-3">
            <div className="footerMenu">
              <h4>Company</h4>
              <ul>
                <li><Link href={"/"}>About</Link></li>
                <li><Link href={"/"}>Affiliate program</Link></li>
                <li><Link href={"/"}>Careers</Link></li>
                <li><Link href={"/"}>Newsletter</Link></li>
                <li><Link href={"/"}>Privacy policy</Link></li>
                <li><Link href={"/"}>Support</Link></li>
                <li><Link href={"/"}>Terms of service</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-xl-2 col-md-3">
            <div className="footerMenu">
              <h4>Connect with us</h4>
              <ul>
                <li><Link href={"/"}>LinkedIn</Link></li>
                <li><Link href={"/"}>Instagram</Link></li>
                <li><Link href={"/"}>YouTube</Link></li>
                <li><Link href={"/"}>Twitter</Link></li>
                <li><Link href={"/"}>Discord</Link></li>
                <li><Link href={"/"}>Facebook</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="copyright">
            <p>©2024 Selfsite. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
