import { Accordion, Col, Row } from "react-bootstrap";
import Images from "../../assets/Images";
import "./about.scss";
import { useParams } from "react-router-dom";

export const About = () => {
  const param = useParams();

  return (
    <div>
      <div className="tw-relative">
        <img src={Images.about} className="tw-w-full" />
        <p className="tw-absolute tw-left-4 tw-bottom-2 md:tw-bottom-28 tw-text-white tw-text-xl md:tw-text-5xl tw-font-semibold">
          About us
        </p>
      </div>
      <div className="tw-p-8 md:tw-p-14">
        <section className="mb-5">
          <p className="tw-text-justify tw-leading-7">
            TrustBanc J6 Microfinance Bank Limited (TMFB) is a Limited Liability
            Company duly registered under the Laws of the Federal Republic of
            Nigeria and licensed by Central Bank of Nigeria to carry on
            Microfinance Banking business in Nigeria. The Bank formerly known as
            Verite Microfinance Bank Limited had been carrying on business of
            Micro-financing in Nigeria for over 5 years.
          </p>
          <p className="tw-text-justify tw-leading-7">
            The Bank is a subsidiary of TrustBanc Holdings Limited a group of
            financial services companies having focus on to become extremely
            relevant in the global financial services community by providing
            quality-laden and value-added services to the hitherto the banked
            and unbanked segment of the company.
          </p>
          {/* 
          <h2 className="tw-text-2xl md:tw-text-5xl tw-text-blue tw-my-5 tw-font-semibold tw-text-center">
            We are glad to share some milestones
          </h2>
          <p className="tw-text-justify tw-leading-7">
            TrustBanc MfB blazed the trail in digital banking in Nigeria;
            leading in ranking by the deployment of Fintech solutions to create
            innovative One-Stop financial Services-hub that meet the needs of
            its teeming customers and to position herself in the fore-front of
            the ongoing innovation in financial industry in Nigeria.
          </p>
          <div className="tw-flex tw-gap-4 tw-justify-around tw-my-10 tw-flex-wrap tw-text-center">
            <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
              <img src={Icons.care} alt="customer care" />
              <h4 className="tw-text-2xl tw-mt-2 md:tw-text-5xl tw-text-blue tw-font-semibold">
                4710
              </h4>
              <p className="tw-font-semibold">Customer Care</p>
            </div>
            <div className="tw-flex tw-flex-col tw-justify-center tw-items-center">
              <img src={Icons.offers} alt="offers" />
              <h4 className="tw-text-2xl tw-mt-2 md:tw-text-5xl tw-text-blue tw-font-semibold">
                882
              </h4>
              <p className="tw-font-semibold">Loan Offers</p>
            </div>
            <div className="-flex tw-flex-col tw-justify-center tw-items-center">
              <img src={Icons.awards} alt="awards" />
              <h4 className="tw-text-2xl tw-mt-2 md:tw-text-5xl tw-text-blue tw-font-semibold">
                12
              </h4>
              <p className="tw-font-semibold">Awards</p>
            </div>
          </div> */}
        </section>
        <Accordion defaultActiveKey={param.tab}>
          <Accordion.Item eventKey="our-board">
            <Accordion.Header>Our Board</Accordion.Header>
            <Accordion.Body>
              <Row className="tw-flex-wrap tw-gap-8 tw-justify-center">
                <Col className="boxes col-12 col-md-3">
                  <div>
                    <img
                      src={Images.chairman}
                      alt="profile"
                      className="w-100"
                    />
                  </div>
                  <div>
                    <p>Abubakar Jimoh</p>
                    <p>Non Executive</p>
                  </div>
                </Col>
                <Col className="boxes col-12 col-md-3">
                  <div>
                    <img src={Images.olu} alt="profile" className="w-100" />
                  </div>
                  <div>
                    <p>Olushola Bamidele</p>
                    <p>MD/CEO</p>
                  </div>
                </Col>
                <Col className="boxes col-12 col-md-3">
                  <div>
                    <img src={Images.Ademola} alt="profile" className="w-100" />
                  </div>
                  <div>
                    <p>Ademola Adeleke</p>
                    <p>Non Executive</p>
                  </div>
                </Col>
                <Col className="boxes col-12 col-md-3">
                  <div>
                    <img
                      src={Images.cornelia}
                      alt="profile"
                      className="w-100"
                    />
                  </div>
                  <div>
                    <p>Cornelia Utuk</p>
                    <p>Non Executive</p>
                  </div>
                </Col>
                <Col className="boxes col-12 col-md-3">
                  <div>
                    <img src={Images.korode} alt="profile" className="w-100" />
                  </div>
                  <div>
                    <p>Korede Dada</p>
                    <p>Non Executive</p>
                  </div>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="our-team">
            <Accordion.Header>Our Team</Accordion.Header>
            <Accordion.Body>
              <Row className="tw-flex-wrap tw-gap-8 tw-justify-center">
                <Col className="boxes col-12 col-md-3">
                  <div>
                    <img src={Images.olu} alt="profile" className="w-100" />
                  </div>
                  <div>
                    <p>Olushola Bamidele</p>
                    <p>Managing Director</p>
                  </div>
                </Col>

                <Col className="boxes col-12 col-md-3">
                  <div>
                    <img src={Images.wumi} alt="profile" className="w-100" />
                  </div>
                  <div>
                    <p>Olawunmi Bethel-Omoniyi</p>
                    <p>Head, Compliance</p>
                  </div>
                </Col>
                <Col className="boxes col-12 col-md-3">
                  <div>
                    <img src={Images.Abiola} alt="profile" className="w-100" />
                  </div>
                  <div>
                    <p>Abiola Ofili</p>
                    <p>Head, Operations</p>
                  </div>
                </Col>
                <Col className="boxes col-12 col-md-3">
                  <div>
                    <img src={Images.Adeola} alt="profile" className="w-100" />
                  </div>
                  <div>
                    <p>Adeola Roberts</p>
                    <p>Head, Risk & Credit</p>
                  </div>
                </Col>
                <Col className="boxes col-12 col-md-3">
                  <div>
                    <img src={Images.peter} alt="profile" className="w-100" />
                  </div>
                  <div>
                    <p>Peter Olatunji</p>
                    <p>Head, IT</p>
                  </div>
                </Col>
                <Col className="boxes col-12 col-md-3">
                  <div>
                    <img src={Images.olabisi} alt="profile" className="w-100" />
                  </div>
                  <div>
                    <p>Olabisi Edward</p>
                    <p>Head, Customer Engagement</p>
                  </div>
                </Col>
                <Col className="boxes col-12 col-md-3">
                  <div>
                    <img src={Images.samuel} alt="profile" className="w-100" />
                  </div>
                  <div>
                    <p>Samuel Oladejo</p>
                    <p>Head, Financial Control</p>
                  </div>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="vision&mission">
            <Accordion.Header>Vision and Mission</Accordion.Header>
            <Accordion.Body>
              <Row className="tw-gap-4">
                <Col>
                  <p className="tw-text-xl md:tw-text-4xl tw-mb-2 tw-font-semibold tw-text-blue">
                    Mission and Vision
                  </p>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Our Vision</Accordion.Header>
                      <Accordion.Body>
                        To be the preferred provider of seamless integrated
                        financial solutions to our clients.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>Our Mission</Accordion.Header>
                      <Accordion.Body>
                        Your lifetime companion for sustainable wealth.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>

                <Col>
                  <p className="tw-text-xl md:tw-text-4xl tw-font-semibold tw-text-blue tw-mb-2">
                    Our Core Values
                  </p>
                  <Accordion>
                    <Accordion.Item eventKey="2">
                      <Accordion.Header>E.A.S.E</Accordion.Header>
                      <Accordion.Body>
                        Empathy, Accountability, Service, Ethics.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </Col>
              </Row>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};
