"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./style.scss";
import logo from "../../assets/images/logo.svg";
import Carousel from "react-bootstrap/Carousel";
import viewsite from "../../assets/images/viewsite.jpg";
import { type } from "os";
import { Form } from "react-bootstrap";

function Carouselslider() {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <Image className="w-100 h-auto" src={viewsite} alt="viewsite" />
          <Carousel.Caption>
            
            <p>Photography</p>
            <Form.Check className="radioCheck"
            name="group1"
            type="radio"
          />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Image className="w-100 h-auto" src={viewsite} alt="viewsite" />
          <Carousel.Caption>
            
            <p>Photography</p>
            <Form.Check className="radioCheck"
            name="group1"
            type="radio"
          />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <Image className="w-100 h-auto" src={viewsite} alt="viewsite" />
          <Carousel.Caption>
            
            <p>Photography</p>
            <Form.Check className="radioCheck"
            name="group1"
            type="radio"
          />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
export default Carouselslider;
