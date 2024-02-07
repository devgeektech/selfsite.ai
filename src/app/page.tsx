"use client";
import Image from "next/image";
import React from 'react'
import playIcon from '../assets/images/playIcon.svg';
import arrowBottom from '../assets/images/arrowBottom.svg';
import arrowRight from '../assets/images/arrowRight.svg';
import blockoneimg from '../assets/images/block_one_img.png';
import blocktwoimg from '../assets/images/block_two_img.png';
import blockthreeimg from '../assets/images/block_three_img.png';
import uperIcon from '../assets/images/uperIcon.png';
import lowerIcon from '../assets/images/lowerIcon.png';
import lionsIcon from '../assets/images/lionsIcon.png';
import aiimg from '../assets/images/ai_img.png';
import { Button, Form, Tab, Tabs } from 'react-bootstrap';
import "./style.scss";
import Link from "next/link";
import Tabssection from "@/components/marketingtab";
import CRMtab from "@/components/crmtab";
import Assistantab from "@/components/assistanttab";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';
export default function () {
  return (
    <div className='homePage'>
      {/* Banner Html Start  */}
      <section className='banner'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='bannerContent'>
                  <h1>AI that builds a website for you</h1>
                  <h4>Get your business online in 30 seconds with the #1 AI website builder and marketing platform.</h4>
                  <div className='bothBtn'>
                    <Button className='btnprimary generatebtn rounded-pill'>Generate Your website</Button>
                    <Button className='btnprimary btnplay rounded-circle'><Image src={playIcon}alt='playIcon'/></Button>
                  </div>
                </div>
                <Link href='#ai_section' className="bottomArrow">
                  <Image src={arrowBottom} alt='arrowBottom'/>
                </Link>
              </div>
            </div>
          </div>
      </section>
      {/* Banner Html Start  */}
      {/* Affiliate Section Html Start */}
      <section className="affiliate_section">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h4 className="text-center">Affiliate Program</h4>
                <div className="affiliate_content">
                  <h2 className="text-center">Join our affiliate program and receive a 20% commission on payments for all customers you refer</h2>
                </div>
                <div className="form_wrapper">
                <Form>
                  <div className="row">
                    <div className="col-md-4">
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" placeholder="Faryar" />
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput2">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control type="text" placeholder="Ghazanfari" />
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="mb-4" controlId="exampleForm.ControlInput3">
                        <Form.Label>Email </Form.Label>
                        <Form.Control type="email" placeholder="info@faryarghazanfari.com" />
                      </Form.Group>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12">
                      <Button type='submit' className="btnprimary joinBtn w-100 d-flex align-items-center justify-content-center">Join Now<Image src={arrowRight} alt='arrow'/></Button>
                    </div>
                  </div>
                </Form>
                </div>
              </div>
            </div>
          </div>
      </section>
      {/* Affiliate Section Html End */}
      {/* Three block html Section start  */}
      <section className="three_blocks">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mt-2 mb-2">
              <div className="single_block">
                <Image className="w-100" src={blockoneimg} alt='block_one_img'/>
                <div className="block_content">
                  <h3>Get your business online in seconds.</h3>
                  <p>Effortlessly publish a professional website, no coding skills required.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-2 mb-2">
              <div className="single_block">
                <Image className="w-100" src={blocktwoimg} alt='block_one_img'/>
                <div className="block_content">
                  <h3>Find customers in minutes.</h3>
                  <p>Grow your revenue with built-in SEO, marketing tools, and review automation.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-2 mb-2">
              <div className="single_block">
                <Image className="w-100" src={blockthreeimg} alt='block_one_img'/>
                <div className="block_content">
                  <h3>Save hours of manual work every week.</h3>
                  <p>Get expert help and automate tedious workflows with the Durable AI Assistant.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Three block html Section end  */}
      {/* AI powered Section html start */}
      <section className="ai_section" id='ai_section'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <h2>The AI-powered <br/>website editor</h2>
              <div className="img_width">
                <Image className="w-100" src={aiimg} alt='aiimg'/>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* AI powered Section html end */}
      {/* Tabs Section Import  */}
      <section className="tabs_section">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="text-center content_width">
              <h4>About Selfsite</h4>
              <h2> Our mission is to make owning a business easier than having a job.</h2>
              <p>Powerful AI tools to start, grow, and manage your business.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="tab_wrapper">
              <Tabs
                defaultActiveKey="Marketing"
                id="justify-tab-example"
                justify
              >
                
                <Tab eventKey="Marketing" title="Marketing">
                  <Tabssection/>
                </Tab>
                <Tab eventKey="CRM" title="CRM">
                  <CRMtab/>
                </Tab>
                <Tab eventKey="Assistant" title="Assistant">
                  <Assistantab/>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      </section>
      {/* Tabs Section Import  */}
      {/* Swiper slider start */}
      <section className="customer_swiper">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h2>What Some Of Our Customers Say</h2>
              <p>Quis aute iure reprehenderit in voluptate velit esse cillun<br/> dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className="col-sm-12">
              <div className="swiper_wrapper">
              <Swiper navigation={true} modules={[Navigation]}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  400:{
                    slidesPerView:1,
                  },
                  650: {
                    slidesPerView: 1,
                  },
                  767: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  }
                }}
              slidesPerView={2}
              spaceBetween={5}
              pagination={{
                clickable: true,
              }}
              className="mySwiper customerSwiper"
              
            >
            <SwiperSlide>
              <div className="swiper_content">
                <div className="quote">
                  <Image src={uperIcon} alt="uperIcon" />
                </div>
                <p>Quis autea iurea reapreaheandearit in voluptatea vealit eassea cillun dolorea eau fugiat nulla pariatur. eaxceapteaur sint obcaeacat cupiditat non proideant, sunt in culpa qui officia deasearunt nollit anin id east laborun.  Lorean ipsun dolor sit aneat, conseacteatur adipisci ealit, sead eaiusnod teanpor incidunt ut laborea.</p>
                <div className="quote d-flex justify-content-end">
                  <Image src={lowerIcon} alt="lowerIcon" />
                </div>
                <div className="d-flex justify-content-between name_logo">
                  <div className="name_wrap">
                    <h4>Andy Jones, Founder & CEO</h4>
                    <p>Lions Sports Academy</p>
                  </div>
                  <Image src={lionsIcon} alt='lionsIcon'/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper_content">
                <div className="quote">
                  <Image src={uperIcon} alt="uperIcon" />
                </div>
                <p>Quis autea iurea reapreaheandearit in voluptatea vealit eassea cillun dolorea eau fugiat nulla pariatur. eaxceapteaur sint obcaeacat cupiditat non proideant, sunt in culpa qui officia deasearunt nollit anin id east laborun.  Lorean ipsun dolor sit aneat, conseacteatur adipisci ealit, sead eaiusnod teanpor incidunt ut laborea.</p>
                <div className="quote d-flex justify-content-end">
                  <Image src={lowerIcon} alt="lowerIcon" />
                </div>
                <div className="d-flex justify-content-between name_logo">
                  <div className="name_wrap">
                    <h4>Andy Jones, Founder & CEO</h4>
                    <p>Lions Sports Academy</p>
                  </div>
                  <Image src={lionsIcon} alt='lionsIcon'/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper_content">
                <div className="quote">
                  <Image src={uperIcon} alt="uperIcon" />
                </div>
                <p>Quis autea iurea reapreaheandearit in voluptatea vealit eassea cillun dolorea eau fugiat nulla pariatur. eaxceapteaur sint obcaeacat cupiditat non proideant, sunt in culpa qui officia deasearunt nollit anin id east laborun.  Lorean ipsun dolor sit aneat, conseacteatur adipisci ealit, sead eaiusnod teanpor incidunt ut laborea.</p>
                <div className="quote d-flex justify-content-end">
                  <Image src={lowerIcon} alt="lowerIcon" />
                </div>
                <div className="d-flex justify-content-between name_logo">
                  <div className="name_wrap">
                    <h4>Andy Jones, Founder & CEO</h4>
                    <p>Lions Sports Academy</p>
                  </div>
                  <Image src={lionsIcon} alt='lionsIcon'/>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="swiper_content">
                <div className="quote">
                  <Image src={uperIcon} alt="uperIcon" />
                </div>
                <p>Quis autea iurea reapreaheandearit in voluptatea vealit eassea cillun dolorea eau fugiat nulla pariatur. eaxceapteaur sint obcaeacat cupiditat non proideant, sunt in culpa qui officia deasearunt nollit anin id east laborun.  Lorean ipsun dolor sit aneat, conseacteatur adipisci ealit, sead eaiusnod teanpor incidunt ut laborea.</p>
                <div className="quote d-flex justify-content-end">
                  <Image src={lowerIcon} alt="lowerIcon" />
                </div>
                <div className="d-flex justify-content-between name_logo">
                  <div className="name_wrap">
                    <h4>Andy Jones, Founder & CEO</h4>
                    <p>Lions Sports Academy</p>
                  </div>
                  <Image src={lionsIcon} alt='lionsIcon'/>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Swiper slider end */}
    </div>
  )
}
