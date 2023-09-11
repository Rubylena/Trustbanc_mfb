import React, { useState } from "react";
import { Button, Col, Container, Row, Form } from "react-bootstrap";
import call from "../../assets/icons/call.png";
import logo from "../../assets/icons/TrustBancLogo.png";
import tel from "../../assets/icons/tel.png";
import linkedin from "../../assets/icons/linkedin.png";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/Ingramgram.png";
import mail from "../../assets/icons/mail.png";
import "./main.scss";
import { OurServices } from "./OurServices";
import { Link } from "react-router-dom";
import { BlogUpdates } from "./BlogUpdates";
import ScrollAnimation from "react-animate-on-scroll";

export const MainHome = () => {
  return (
    <main className="px-3 md:px-5">
      <OurServices />

      <section className="financial-freedom">
        <Container fluid className="bg-linear-blue">
          <Row className="gap-3 justify-content-between align-items-center call-us mx-4 py-4 ">
            <Col sm md={7} className="text-white">
              <h3>
                Are you ready for Financial Freedom? Start your investment
                today.
              </h3>
            </Col>
            <Col sm md={4} className="d-flex justify-content-end">
              <Button
                variant="light"
                className="d-flex gap-2 align-items-center justify-content-center fw-medium w-75"
              >
                <a href="tel:07004446147">
                  <img src={call} alt="call icon" loading="lazy" />{" "}
                  <span>Call us now</span>
                </a>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <BlogUpdates />
      </section>

      <section id="main-footer">
        <ScrollAnimation
          animateIn="animate__fadeInRight"
          initiallyVisible={true}
        >
          <Container fluid>
            <Row className="gap-3 py-5">
              <Col sm md={2}>
                <img
                  src={logo}
                  alt="trustbanc logo"
                  className="w-100"
                  loading="lazy"
                />
              </Col>
              <Col sm md={9}>
                <Row>
                  <Col>
                    <ul>
                      {" "}
                      Our Services
                      <li>
                        <a href="/services/Stock-Broking">Stock-Broking</a>
                      </li>
                      <li>
                        <a href="/services/Shares and Bonds">
                          Shares and Bonds
                        </a>
                      </li>
                      <li>
                        <Link to="/services/Investment Advisory">
                          Equities Trading
                        </Link>
                      </li>
                      <li>
                        <a href="/services/Investment Advisory">
                          Investment Advisory
                        </a>
                      </li>
                      <li>
                        <a href="/services/Research">Research</a>
                      </li>
                      <li>
                        <a href="/services/Wealth Tracking">Wealth Tracking</a>
                      </li>
                      <li>
                        <a href="/services/Financial Advisory">
                          Financial Advisory
                        </a>
                      </li>
                      <li>
                        <a href="/services/Portfolio Management">
                          Portfolio Management
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      {" "}
                      Downloads
                      <li>
                        <a
                          href="https://trustbanccapital.com/uploads/2023/07/Individual-Account-Opening-Form-Asset-TrustBanc-Capital.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Individual Account Opening Form
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://trustbanccapital.com/uploads/2023/07/Corporate-Account-Opening-Form-TrustBanc-Capital.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Corporate Account Opening Form
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://trustbanccapital.com/uploads/2023/07/Best-Execution-Policy_TrustBanc-Capital_2021-1.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Best Execution Policy
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://trustbanccapital.com/uploads/2023/07/TrustBanc-Complaints-Management-Policy_Updated-2021-1.pdf"
                          target="_blank"
                          rel="noreferrer"
                        >
                          TrustBanc Complaints Management Policy
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col>
                    <ul>
                      {" "}
                      Group and Subsidiaries
                      <li>
                        <a
                          href="https://trustbancgroup.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          TrustBanc Financial Group
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://trustbancasset.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          TrustBanc Asset Management Limited
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://trustbancmfb.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          TrustBanc MFB
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://trustbancgroup.com/"
                          target="_blank"
                          rel="noreferrer"
                        >
                          WeFinance
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <hr />
            </Row>
          </Container>
        </ScrollAnimation>
      </section>

      <section id="branches" className="mb-5">
        <Container fluid>
          <Row className="gap-3 flex-wrap justify-content-sm-center">
            <Col className=" flex-column gap-5">
              <ul>
                HEAD OFFICE
                <li>
                  163, Sinari Daranijo Street, Off Ligali Ayorinde, Victoria
                  Island, Lagos, Nigeria.
                </li>
              </ul>

              <ul>
                BRANCH OFFICE
                <li>
                  No 6, Brains and Hammers Estate, Apo 3, Ado Bayero, Abuja,
                  Nigeria
                </li>
              </ul>

              <ul>
                CONTACT US
                <li>07004446147</li>
                <li>support@trustbancgroup.com</li>
                <li className="social-links z-[100000]">
                  <a href="tel:07004446147">
                    <img src={tel} alt="telephone" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/70898742/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BL6wam5krRz2uao0Sm7I3DA%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <a
                    href="https://www.facebook.com/trustbancfinancialgroup?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a
                    href="https://twitter.com/trustbancgroup?s=21&t=ZHjrl1jeMADQ2febfriVOw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a
                    href="https://instagram.com/trustbancfinancialgroup?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={instagram} alt="instagram" />
                  </a>
                  <a href="mailto:support@trustbanc.com">
                    <img src={mail} alt="mail" />
                  </a>
                </li>
              </ul>
            </Col>
            <Col className=" col-md-3 tweet">
              <h5>RECENT TWEET</h5>
              <div>
                <a
                  className="twitter-timeline"
                  // data-width="360"
                  data-height="300"
                  href="https://twitter.com/TrustBancgroup?ref_src=twsrc%5Etfw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tweets by TrustBancgroup
                </a>{" "}
              </div>
            </Col>

            <Col className="subscribe-contact">
              <h5>SUBSCRIBE TO OUR NEWSLETTER</h5>
              <div>
                <Form
                  className="p-3"
                  action="https://formsubmit.co/68f4d64d3be2ed91884420c1d14b36be"
                  method="POST"
                >
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" required />
                  </Form.Group>
                  {/* formsubmit.co */}
                  <input type="hidden" name="_captcha" value="false"></input>
                  {/* <input type="hidden" name="_cc" value="gordie2u@gmail.com" /> */}
                  <input
                    type="hidden"
                    name="_next"
                    value="https://trustbanccapital.com/thanks"
                  ></input>
                  <input
                    type="hidden"
                    name="_subject"
                    value="New submission!"
                  ></input>

                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      required
                      className="mb-2"
                    />
                    <Form.Text className="text-muted">
                      By signing up, you agree to receive news, products offers
                      and other commercial messages delivered to your inbox. T&C
                      applies.
                    </Form.Text>
                  </Form.Group>

                  <div className="d-flex flex-col gap-2 justify-content-end">
                    <Button variant="primary" type="submit">
                      Subscribe
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
