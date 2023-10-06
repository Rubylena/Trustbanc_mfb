import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Images, { Icons } from "../../assets/Images";
import './contact.scss'

const Contact = () => {
  return (
    <div className="contact-us tw-mt-16 md:tw-mt-24 tw-px-8 tw-pb-8 md:tw-px-14 md:tw-pb-14">
      <Container className="social-links d-flex justify-content-end pb-3 pt-3 px-0">
        <a
          href="https://www.linkedin.com/company/70898742/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BL6wam5krRz2uao0Sm7I3DA%3D%3D"
          target="_blank"
        >
          <img src={Images.linkedin} alt="linkedin" />
        </a>
        <a
          href="https://www.facebook.com/trustbancfinancialgroup?mibextid=LQQJ4d"
          target="_blank"
        >
          <img src={Images.facebook} alt="facebook" />
        </a>
        <a
          href="https://twitter.com/trustbancgroup?s=21&t=ZHjrl1jeMADQ2febfriVOw"
          target="_blank"
        >
          <img src={Images.twitter} alt="twitter" />
        </a>
        <a
          href="https://instagram.com/trustbancfinancialgroup?igshid=YmMyMTA2M2Y="
          target="_blank"
        >
          <img src={Images.instagram} alt="instagram" />
        </a>
      </Container>

      <section>
        <Container className="tw-flex tw-flex-col tw-gap-10">
          <Row className="d-flex justify-content-between gap-3">
            <Col
              sm
              md={6}
              className=""
            >
              <p>We at TrustBanc MfB, takes pride in the efficiency and effectiveness of our vibrant management team, which gives us the ability to be proactive in satisfying our existing and prospective customers. We deliver financial services that are of the highest quality to the unbanked, underbanked and banked.</p>

              <div className=" tw-max-w-sm m-auto">
                <img src={Images.landline} alt="Landline" />
              </div>
            </Col>

            <Col
              sm
              md={5}
              className="tw-bg-blue text-white p-3 contact-us-right d-flex flex-column gap-5"
            >
              <h2 className="mt-3"> Get in touch</h2>
              <div className="d-flex gap-3 align-items-center">
                <img src={Icons.map} alt="location" className="tw-w-10 tw-h-10" />
                <p>
                  163 Sinari Daranijo Street, Off Ligali Ayorinde, Victoria
                  Island, Lagos.
                </p>
              </div>
              <div className="d-flex gap-3  align-items-center">
                <div className="tw-w-10 tw-h-10">
                  <img src={Icons.phone} alt="contact" className="tw-w-full" />
                </div>
                <div>
                  <p>(+234) 700 444 6147</p>
                  <p>MON-FRI , 08:00AM - 17:00PM</p>
                </div>
              </div>
              <div className="d-flex gap-3  align-items-center">
                <div className="tw-w-10 tw-h-10">
                  <img src={Icons.email} alt="mail" className="tw-w-full" />
                </div>
                <div>
                  <p style={{ wordBreak: "break-all" }}>
                    support@trustbancgroup.com
                  </p>
                  <p>WE REPLY WITHIN 24 HRS</p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="d-flex justify-content-between tw-items-end gap-3">
            <Col
              sm
              md={7}
              className="tw-bg-blue text-white p-4 contact-us-left"
            >
              <h2> Send a message</h2>
              <Form
                action="https://formsubmit.co/68f4d64d3be2ed91884420c1d14b36be"
                method="POST"
              >
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    placeholder="Your Email"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    name="subject"
                    required
                    placeholder="Subject"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    style={{ resize: "none" }}
                    as="textarea"
                    placeholder="Your message"
                    rows={7}
                    required
                    name="body"
                  />
                </Form.Group>
                {/* formsubmit.co */}
                <input type="hidden" name="_captcha" value="false"></input>
                <input
                  type="hidden"
                  name="_subject"
                  value="New submission!"
                ></input>
                <input
                  type="hidden"
                  name="_next"
                  value="https://trustbanccapital.com/thanks"
                ></input>
                {/* <input type="hidden" name="_cc" value="gordie2u@gmail.com" /> */}

                <Button
                  variant="light"
                  type="submit"
                  className="w-25 text-dark-blue fw-medium"
                // onSubmit={() => {
                //   setModalShow(true);
                // }}
                >
                  Send
                </Button>
              </Form>
            </Col>

            {/* <ContactModal show={modalShow} onHide={() => setModalShow(false)} /> */}

            <Col
              sm
              md={4}
              className="tw-bg-light-blue tw-border tw-rounded-lg tw-border-blue"
            >
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

                <Form.Group controlId="formBasicEmail">
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

                <div className="d-flex flex-col justify-content-end">
                  <Button type="submit" className="tw-bg-blue tw-border-blue">
                    Subscribe
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Contact