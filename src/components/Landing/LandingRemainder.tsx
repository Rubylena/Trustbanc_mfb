import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Images from "../../assets/Images";
import "./landingRemainder.scss";
import { useState } from "react";

export const LandingRemainder = () => {
  const [submitting, setSubmitting] = useState(false);

  return (
    <div>
      <section>
        <Container className="tw-bg-[#F5F5F7] mt-4 mt-md-5 mb-md-3 tw-rounded-lg px-md-5 py-md-3">
          <Row className="tw-items-center tw-gap-14 md:tw-gap-0">
            <Col className="col-12 col-md-6">
              <div className="mb-4">
                <h6 className="tw-font-bold">
                  Are you in need of a quick loan?
                </h6>
                <p className="mb-2">
                  Get flexible terms, competitive rates, and exceptional
                  customer service.
                </p>
                <p className="mb-2">
                  We strive to make your borrowing experience hassle-free and
                  convenient.
                </p>
                <Button
                  className="w-full md:tw-w-1/2 tw-w-full tw-bg-white tw-text-blue tw-border-blue tw-font-semibold"
                  as="a"
                  href="/contact"
                >
                  Contact us
                </Button>
              </div>

              <div className="tw-bg-blue tw-rounded-lg tw-text-white p-2 pt-3">
                <Form
                  className="row m-0"
                  action="https://formsubmit.co/support@trustbancgroup.com"
                  method="POST"
                  onSubmit={() => {
                    setSubmitting(true);
                  }}
                >
                  <h3 className="mb-2 tw-font-normal">Request a call back</h3>
                  <div className="col-sm-6">
                    <Form.Group className="mb-2" controlId="formBasicName">
                      <Form.Label className="m-0">Your name</Form.Label>
                      <Form.Control type="text" name="Name" required />
                    </Form.Group>
                    {/* formsubmit.co */}
                    <input type="hidden" name="_captcha" value="false" />
                    {/* <input type="hidden" name="_cc" value="gordie2u@gmail.com" /> */}
                    <input
                      type="hidden"
                      name="_next"
                      // value="https://trustbancmfb.netlify.app/thanks"
                      value="https://trustbancmfb.com/thanks"
                    />
                    <input
                      type="hidden"
                      name="_subject"
                      value="New online submission - Customer request call back"
                    />
                    <input type="hidden" name="_template" value="box" />

                    <Form.Group className="mb-2" controlId="formBasicEmail">
                      <Form.Label className="m-0">Your email</Form.Label>
                      <Form.Control
                        type="email"
                        name="Email"
                        required
                        className="mb-2"
                      />
                    </Form.Group>

                    <Form.Group className="mb-2" controlId="formBasicSubject">
                      <Form.Label className="m-0">Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="Subject"
                        required
                        className="mb-2"
                      />
                    </Form.Group>
                  </div>

                  <div className="col-sm-6">
                    <Form.Group className="mb-2">
                      <Form.Label className="m-0">Your message</Form.Label>
                      <Form.Control
                        style={{ resize: "none" }}
                        as="textarea"
                        name="Message"
                        rows={5}
                        required
                      />
                    </Form.Group>
                    <div className="d-flex flex-col gap-2 justify-content-end">
                      <Button
                        className="tw-w-full tw-bg-white tw-text-blue tw-border-blue tw-font-semibold"
                        type="submit"
                        disabled={submitting}
                      >
                        {submitting ? "Submitting..." : "Submit"}
                      </Button>
                    </div>
                  </div>
                </Form>
              </div>
            </Col>
            <Col className="col-12 col-md-6">
              <img src={Images["contact-us"]} alt="contact us" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="tw-bg-blue mb-3">
        <Container>
          <Row id="main-footer" className="py-5 tw-text-white">
            <Col sm md={3}>
              <img
                src={Images.logoWhite}
                alt="trustBanc logo"
                className="w-100"
                loading="lazy"
              />
              <ul className="p-0 mt-4">
                <li className="tw-text-xs">
                  163, Sinari Daranijo Street, Off Ligali Ayorinde, Victoria
                  Island, Lagos, Nigeria.
                </li>
              </ul>

              <ul className="p-0">
                CONTACT US
                <li className="tw-text-xs">07004446147</li>
                <li className="tw-text-xs">support@trustbancgroup.com</li>
                <li className="social-links z-[100000]">
                  <a href="tel:07004446147">
                    <img src={Images.tel} alt="telephone" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/70898742/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BL6wam5krRz2uao0Sm7I3DA%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Images.linkedin} alt="linkedin" />
                  </a>
                  <a
                    href="https://www.facebook.com/trustbancfinancialgroup?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Images.facebook} alt="facebook" />
                  </a>
                  <a
                    href="https://twitter.com/trustbancgroup?s=21&t=ZHjrl1jeMADQ2febfriVOw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Images.twitter} alt="twitter" />
                  </a>
                  <a
                    href="https://instagram.com/trustbancfinancialgroup?igshid=YmMyMTA2M2Y="
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Images.instagram} alt="instagram" />
                  </a>
                  <a href="mailto:support@trustbanc.com">
                    <img src={Images.mail} alt="mail" />
                  </a>
                </li>
              </ul>
            </Col>
            <Col sm md={9}>
              <Row>
                <Col>
                  <ul className="p-0">
                    Features{" "}
                    <li>
                      <a href="savings">Savings</a>
                    </li>
                    <li>
                      <a href="fixed-deposits">Fixed Deposit</a>
                    </li>
                    <li>
                      <Link to="loan-calculator">Loan Calculator</Link>
                    </li>
                    <li>
                      <a href="primeApp">PrimeByTrustBanc</a>
                    </li>
                    <li>
                      <a href="quick-loans">Quick Loans</a>
                    </li>
                    <li>
                      <a href="enterprise-loan">Enterprise Loan</a>
                    </li>
                    <li>
                      <a href="corporate-current">Corporate</a>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul className="p-0">
                    Company{" "}
                    <li>
                      <a href="about">About us</a>
                    </li>
                    <li>
                      <a href="about/our-board">Our Board</a>
                    </li>
                    <li>
                      <Link to="about/our-team">Our Team</Link>
                    </li>
                    <li>
                      <a href="about/vision&mission">Vision & Mission</a>
                    </li>
                  </ul>
                </Col>
                <Col>
                  <ul className="p-0">
                    Help{" "}
                    <li>
                      <a href="contact">Contact us</a>
                    </li>
                  </ul>
                </Col>
                <Col className="col-xl-4">
                  <ul className="p-0">
                    {" "}
                    Subsidiaries
                    <li>
                      <a
                        href="https://trustbancgroup.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        TrustBanc Holdings
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
                        href="https://trustbanccapital.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        TrustBanc Capital Management Limited
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.wefinanceng.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        WeFinance Solutions
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};
