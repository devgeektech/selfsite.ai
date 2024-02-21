"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import epandIcon from "../../assets/images/epandIcon.svg";
import linkIcon from "../../assets/images/linkIcon.svg";
import chatIcon from "../../assets/images/chatIcon.svg";
import searchIcon from "../../assets/images/searchIcon.svg";
import sendIcon from "../../assets/images/sendIcon.svg";
import clearIcon from "../../assets/images/clearIcon.svg";
import pencilIcon from "../../assets/images/pencilIcon.svg";
import fileSearchIcon from "../../assets/images/fileSearchIcon.svg";
import globalIcon from "../../assets/images/globalIcon.svg";
import siteOne from "../../assets/images/siteOne.jpg";
import siteTwo from "../../assets/images/siteTwo.jpg";

import "./style.scss";
import { Form, Button } from "react-bootstrap";
import Dashboardheader from "@/components/dashboardHeader";
import Domain from "@/components/domain";
import Buydomain from "@/components/buydomain";
import Assigndomain from "@/components/assigndomain";
import Assigneddomain from "@/components/assigneddomain";

export default function Sitesview() {


  // Domain Modal State
  const [domain, setDomain] = useState(false);
  const domainfun = () => {setDomain(true);};
  const handleDomainClose = () => setDomain(false);

  // Buy Domain Modal State
  const [buydomain, setBuydomain] = useState(false);
  const buydomainfun = () => { setBuydomain(true); };
  const BuydomainClose = () => setBuydomain(false);
  const ref = useRef(false);
  
  const openBuydomain = () => { setDomain(false); setBuydomain(true);};


    // Assign Domain Modal State
        const [assigndomain, setAssignDomain] = useState(false);
        const assigndomainfun = () => { setAssignDomain(true); };
        const AssignDomainClose = () => setAssignDomain(false);

    // Assigned Domain Modal State
    const [assigneddomain, setAssignedDomain] = useState(false);
    const assigneddomainfun = () => { setAssignedDomain(true); };
    const AssignedDomainClose = () => setAssignedDomain(false);
    const ref1 = useRef(false);

    const openAssignedDomain = () => {setAssignDomain(false); setAssignedDomain(true);}


  return (
    <>
      <div className="sitesPage">
        <Dashboardheader />
        <div className="sites_page-content">
          <div className="page-content">
            <div className="siteView">
              <div className="container-fluid">
                <div className="title_btn d-flex justify-content-between">
                  <h3>Pick one of the templates</h3>
                  <Link href={"/dashboard"}>
                    <Image src={epandIcon} alt="epandIcon" />
                  </Link>
                </div>
                <div className="row">
                  <div className="col-md-3 mb-5">
                    <div className="siteblock">
                      <Image src={siteOne} alt="siteOne" />
                      <div className="siteName_select d-flex justify-content-between">
                        <h5>Photography</h5>
                        <div className="radioWrapper">
                          <Form.Check label="" name="group" type="radio" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-5">
                    <div className="siteblock">
                      <Image src={siteTwo} alt="siteTwo" />
                      <div className="siteName_select d-flex justify-content-between">
                        <h5>Photography</h5>
                        <div className="radioWrapper">
                          <Form.Check label="" name="group" type="radio" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-5">
                    <div className="siteblock">
                      <Image src={siteOne} alt="siteOne" />
                      <div className="siteName_select d-flex justify-content-between">
                        <h5>Photography</h5>
                        <div className="radioWrapper">
                          <Form.Check label="" name="group" type="radio" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-5">
                    <div className="siteblock">
                      <Image src={siteOne} alt="siteOne" />
                      <div className="siteName_select d-flex justify-content-between">
                        <h5>Photography</h5>
                        <div className="radioWrapper">
                          <Form.Check label="" name="group" type="radio" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-5">
                    <div className="siteblock">
                      <Image src={siteOne} alt="siteOne" />
                      <div className="siteName_select d-flex justify-content-between">
                        <h5>Photography</h5>
                        <div className="radioWrapper">
                          <Form.Check label="" name="group" type="radio" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-5">
                    <div className="siteblock">
                      <Image src={siteOne} alt="siteOne" />
                      <div className="siteName_select d-flex justify-content-between">
                        <h5>Photography</h5>
                        <div className="radioWrapper">
                          <Form.Check label="" name="group" type="radio" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-5">
                    <div className="siteblock">
                      <Image src={siteOne} alt="siteOne" />
                      <div className="siteName_select d-flex justify-content-between">
                        <h5>Photography</h5>
                        <div className="radioWrapper">
                          <Form.Check label="" name="group" type="radio" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-5">
                    <div className="siteblock">
                      <Image src={siteOne} alt="siteOne" />
                      <div className="siteName_select d-flex justify-content-between">
                        <h5>Photography</h5>
                        <div className="radioWrapper">
                          <Form.Check label="" name="group" type="radio" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="site_info_outer">
                <div className="site_info">
                  <div className="site_info_inner d-flex justify-content-between me-2 align-items-start">
                    <div className="site_text">
                      <h4>Wild photography</h4>
                      <p className="mb-0">user</p>
                    </div>
                    <button className="chatBtn">
                      <Image src={chatIcon} alt="chatIcon" />
                    </button>
                  </div>
                  <div className="site_info_inner d-flex justify-content-between me-2 align-items-start">
                    <div className="site_text">
                      <h4>
                        We are now creating your website. This may take a few
                        minutes. Stay tuned!
                      </h4>
                      <p className="mb-0">assistant</p>
                    </div>
                    <button className="chatBtn">
                      <Image src={chatIcon} alt="chatIcon" />
                    </button>
                  </div>
                  <div className="site_info_inner d-flex justify-content-between me-2 align-items-start">
                    <div className="site_text">
                      <h4>Generating images…</h4>
                      <p className="mb-0">assistant</p>
                    </div>
                    <button className="chatBtn">
                      <Image src={chatIcon} alt="chatIcon" />
                    </button>
                  </div>
                  <div className="site_info_inner d-flex justify-content-between me-2 align-items-start">
                    <div className="site_text">
                      <h4>
                        Generation completed! Your website's preview:{" "}
                        <Link href={"/"} className="previewBtn">
                          <Image src={linkIcon} alt="linkIcon" /> Preview
                        </Link>
                      </h4>
                      <p className="mb-0">assistant</p>
                    </div>
                    <button className="chatBtn">
                      <Image src={chatIcon} alt="chatIcon" />
                    </button>
                  </div>
                </div>
                <div className="search_options">
                  <div className="innersearch">
                    <Form.Control type="text" placeholder="Search here" />
                    <button>
                      <Image src={searchIcon} alt="searchIcon" />
                    </button>
                  </div>
                  <div className="btnsWrapper">
                    <Button className="btnprimary">
                      <Image src={sendIcon} alt="sendIcon" />
                      Send
                    </Button>
                    <Button className="btn-btnSecondary ms-3">
                      <Image src={clearIcon} alt="clearIcon" />
                      Reset
                    </Button>
                  </div>
                  <ul className="side_links">
                    <li>
                      <Link href={"/"}>
                        <Image src={pencilIcon} alt="pencilIcon" />
                        Editor
                      </Link>
                    </li>
                    <li>
                      <Link href={"/"}>
                        <Image src={fileSearchIcon} alt="fileSearchIcon" />
                        Preview
                      </Link>
                    </li>
                    <li>
                      {/* <Link href={"/"}> */}
                      <button onClick={domainfun}>
                        <Image src={globalIcon} alt="globalIcon" />
                        Assign Domain
                      </button>
                      {/* </Link> */}
                    </li>
                    <li>
                      <button onClick={assigndomainfun}>
                        <Image src={globalIcon} alt="globalIcon" />
                        Assign Your Own Domain
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
        <Domain
          domianValue={domain}
          DomainClose={handleDomainClose}
          openBuydomain={openBuydomain}
        />
      
        <Assigndomain
          assigndomianValue={assigndomain}
          AssignDomainClose={AssignDomainClose}
          openAssignedDomain={openAssignedDomain}
        />
      
      <Assigneddomain show={assigneddomain} AssignedDomainClose={AssignedDomainClose}/>
      <Buydomain show={buydomain} BuydomainClose={BuydomainClose} />
    </>
  );
}