"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import refreshIcon from "../../assets/images/refreshIcon.svg";
import viewsite from "../../assets/images/viewsite.jpg";
import user from "../../assets/images/user.png";
import lightIcon from "../../assets/images/lightIcon.svg";

import "./style.scss";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
  Dropdown,
} from "react-bootstrap";
import Dashboardheader from "@/components/dashboardHeader";
import Sidebar from "@/components/sidebar";

export default function Dashboard() {
  return (
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
  );
}
