"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import siteOne from "../../assets/images/siteOne.jpg";
import siteTwo from "../../assets/images/siteTwo.jpg";
import arrowRight from "../../assets/images/arrowRight.svg";
import searchIcon from "../../assets/images/searchIcon.svg";
import doubleArrowIcon from "../../assets/images/doubleArrowIcon.svg";
import "./style.scss";
import Link from "next/link";

function Buildsitestepthree(props: any) {

  const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <Modal className="builsteponeModal" show={props.show}  onHide={props.hide} keyboard={false} centered>
        <Modal.Header>
          <div className="builstepone text-center">
            <h2>Pick one of the templates</h2>
          </div>
        </Modal.Header>
        <Modal.Body>
          
            <div className={isActive ? 'active expandTemplate' : 'inactive expandTemplate'}>
              <div className="row">
                <div className="col-6 mb-3">
                  <div className="siteTemplate">
                      <Image src={siteOne} alt='siteOne'/>
                    <div className="d-flex justify-content-between name_radioBtn align-items-center">
                      <h4>Agency</h4>  
                      <div className="radioWrapper">
                            <Form.Check label="" name="group" type="radio" />
                      </div>
                    </div>  
                  </div>
                </div>
                <div className="col-6 mb-3">
                <div className="siteTemplate">
                      <Image src={siteTwo} alt='siteTwo'/>
                    <div className="d-flex justify-content-between name_radioBtn align-items-center">
                      <h4>Agency</h4>  
                      <div className="radioWrapper">
                            <Form.Check label="" name="group" type="radio" />
                      </div>
                    </div>  
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="siteTemplate">
                      <Image src={siteOne} alt='siteOne'/>
                    <div className="d-flex justify-content-between name_radioBtn align-items-center">
                      <h4>Agency</h4>  
                      <div className="radioWrapper">
                            <Form.Check label="" name="group" type="radio" />
                      </div>
                    </div>  
                  </div>
                </div>
                <div className="col-6 mb-3">
                <div className="siteTemplate">
                      <Image src={siteTwo} alt='siteTwo'/>
                    <div className="d-flex justify-content-between name_radioBtn align-items-center">
                      <h4>Agency</h4>  
                      <div className="radioWrapper">
                            <Form.Check label="" name="group" type="radio" />
                      </div>
                    </div>  
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4 mb-3">
                <button onClick={toggleClass} className="expand"><Image src={doubleArrowIcon} alt='doubleArrowIcon'/></button>
            </div>
            <div className="templateSearch">
              <Form.Group className="mb-4">
                <div className="position-relative">
                  <Form.Control type="text" />
                  <button className="searchBtn">
                    <Image src={searchIcon} alt="searchIcon" />
                  </button>
                </div>
              </Form.Group>
              <Link href={"/loader"} className="btnprimary w-100 signin_btn">
                Next <Image src={arrowRight} alt="arrowRight" />
              </Link>
            </div>
          
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Buildsitestepthree;
