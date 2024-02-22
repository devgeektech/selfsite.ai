"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import refreshIcon from "../../assets/images/refreshIcon.svg";
import viewsite from "../../assets/images/viewsite.jpg";

import "./style.scss";
import {
  Form,
} from "react-bootstrap";
import Dashboardheader from "@/components/dashboardHeader";
import Sidebar from "@/components/sidebar";
import Assigndomain from "@/components/assigndomain";
import Assigneddomain from "@/components/assigneddomain";
import Buydomain from "@/components/buydomain";
import Domain from "@/components/domain";


export default function Dashboard() {

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
    <div className="dashboardPage">
      <Dashboardheader/>
      <div className="sidebar_page-content">
        <div className='sidebarWrapper'>
            <Sidebar/>
        </div>
        <div className="page-content">
            <div className="url-bar">
                <div className="d-flex align-items-center">
                    <button className="refreshBtn">
                        <Image src={refreshIcon} alt='refreshIcon'/>
                    </button>
                    <Form.Control type="text" placeholder="https://api.selfsite.ai/generated-sites/366f0a1e-7868-4c2e-b1b6-68b22dc8419a/index.html?t=1706017419416" />
                </div>    
            </div>
            <div className="siteView">
                <Image className="w-100 h-auto" src={viewsite} alt='viewsite'/>
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
