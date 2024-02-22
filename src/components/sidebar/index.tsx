"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import  epandIcon from '../../assets/images/epandIcon.svg';
import  chatIcon from '../../assets/images/chatIcon.svg';
import  linkIcon from '../../assets/images/linkIcon.svg';
import  searchIcon from '../../assets/images/searchIcon.svg';
import  sendIcon from '../../assets/images/sendIcon.svg';
import  clearIcon from '../../assets/images/clearIcon.svg';
import  pencilIcon from '../../assets/images/pencilIcon.svg';
import  fileSearchIcon from '../../assets/images/fileSearchIcon.svg';
import  globalIcon from '../../assets/images/globalIcon.svg';
import "./style.scss";
import Carouselslider from "../carousel";
import Link from "next/link";
import { Button, Form } from "react-bootstrap";
import Domain from "../domain";
import Assigndomain from "../assigndomain";
import Assigneddomain from "../assigneddomain";
import Buydomain from "../buydomain";

export default function Sidebar() {

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
      <div className="sidebar">
        <div className="carouselWrapper">
          <div className="d-flex justify-content-between px-4 mb-2">
            <h3>Pick one of the templates</h3>  
            <Link href={"/sitesview"}>
              <Image src={epandIcon} alt='epandIcon'/>
            </Link>
          </div>
          <Carouselslider/>
        </div>
        <div className="site_info_outer">
          <div className="site_info">
              <div className="site_info_inner d-flex justify-content-between me-2 align-items-start">
                <div className="site_text">
                  <h4>Wild photography</h4>
                  <p className="mb-0">user</p>
                </div>
                <button className="chatBtn">
                  <Image src={chatIcon} alt='chatIcon'/>
                </button>
              </div>
              <div className="site_info_inner d-flex justify-content-between me-2 align-items-start">
                <div className="site_text">
                  <h4>We are now creating your website. This may take a few minutes. Stay tuned!</h4>
                  <p className="mb-0">assistant</p>
                </div>
                <button className="chatBtn">
                  <Image src={chatIcon} alt='chatIcon'/>
                </button>
              </div>
              <div className="site_info_inner d-flex justify-content-between me-2 align-items-start">
                <div className="site_text">
                  <h4>Generating images…</h4>
                  <p className="mb-0">assistant</p>
                </div>
                <button className="chatBtn">
                  <Image src={chatIcon} alt='chatIcon'/>
                </button>
              </div>
              <div className="site_info_inner d-flex justify-content-between me-2 align-items-start">
                <div className="site_text">
                  <h4>Generation completed! Your website's 
                    preview: <Link href={"/"} className="previewBtn"><Image src={linkIcon} alt='linkIcon'/> Preview</Link></h4>
                  <p className="mb-0">assistant</p>
                </div>
                <button className="chatBtn">
                  <Image src={chatIcon} alt='chatIcon'/>
                </button>
              </div>
          </div>
          <div className="search_options">
            <div className="innersearch">
              <Form.Control type="text" placeholder="Search here" />
              <button>
                <Image src={searchIcon} alt='searchIcon'/>
              </button>
            </div>
            <div className="btnsWrapper">
              <Button className='btnprimary'><Image src={sendIcon} alt='sendIcon'/>Send</Button>
              <Button className='btn-btnSecondary ms-3'><Image src={clearIcon} alt='clearIcon'/>Reset</Button>
            </div>
            <ul className="side_links">
              <li><Link href={"/"}><Image src={pencilIcon} alt='pencilIcon'/>Editor</Link></li>
              <li><Link href={"/"}><Image src={fileSearchIcon} alt='fileSearchIcon'/>Preview</Link></li>
              <li> <button onClick={domainfun}><Image src={globalIcon} alt='globalIcon'/>Assign Domain</button> </li>
              <li><button onClick={assigndomainfun}><Image src={globalIcon} alt='globalIcon'/>Assign Your Own Domain</button></li>
            </ul>
          </div>
        </div>
      </div>

      {domain && (
      <Domain
        domianValue={domain}
        DomainClose={handleDomainClose}
        openBuydomain={openBuydomain}
      />
      )}


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
