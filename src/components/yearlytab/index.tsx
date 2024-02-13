"use client";
import Image from "next/image";
import React from "react";
import "./style.scss";
import cricleTick from "../../assets/images/cricleTick.svg";
import Link from "next/link";
import { Button } from "react-bootstrap";

function Yearlytab() {
  return (
    <>
      <div className="yearly_wrapper">
        <div className="row align-items-center">
          <div className="col-sm-4 px-0">
            <div className="price_block free_block">
              <h2 className="text-center">Free</h2>
              <ul>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  one website
                </li>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  selfsite.ai url
                </li>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  basic analytics
                </li>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  basic support
                </li>
              </ul>
              <Button className="btn-btnSecondary btnget w-100">
                Get Started
              </Button>
            </div>
          </div>
          <div className="col-sm-4 px-0">
            <div className="price_block starter_block">
              <h4 className="text-center">Starter</h4>
              <div className="priceBox text-center">
                <span>$</span>
                <strong>15</strong>
              </div>
              <p className="text-center">billed monthly</p>
              <ul>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  one website
                </li>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  custom domain
                </li>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  basic analytics
                </li>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  basic support
                </li>
              </ul>
              <Button className="btn-btnSecondary btnget w-100">
                Get Started
              </Button>
            </div>
          </div>
          <div className="col-sm-4 px-0">
            <div className="price_block professional_block">
              <h4 className="text-center">Professional</h4>
              <div className="priceBox text-center">
                <span>$</span>
                <strong>20</strong>
              </div>
              <p className="text-center">billed monthly</p>
              <ul>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  Three website
                </li>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  custom domains
                </li>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  basic analytics
                </li>
                <li>
                  <Image src={cricleTick} alt="cricleTick" />
                  basic support
                </li>
              </ul>
              <Button className="btn-btnSecondary btnget w-100">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Yearlytab;
