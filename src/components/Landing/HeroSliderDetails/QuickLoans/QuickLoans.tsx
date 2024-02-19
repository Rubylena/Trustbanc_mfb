import { Col, Row, Tab, Nav } from "react-bootstrap";
import Images from "../../../../assets/Images";
import "./quickLoans.scss";

const QuickLoans = () => {
  return (
    <div className="tw-mt-14 container">
      <Row className="tw-pt-16 md:tw-pt-24 mb-5 tw-py-5 md:tw-py-0 container-fluid tw-mx-auto sm:tw-m-auto tw-items-center tw-flex-row-reverse mb-5">
        <Col className="col-5 tw-hidden sm:tw-flex">
          <img src={Images["swift-loan"]} alt="quick loans" />
        </Col>
        <Col className="col-12 col-md-7">
          <h3 className="tw-text-blue tw-font-semibold tw-text-sm md:tw-text-2xl lg:tw-text-5xl">
            Get cash in a flash with our loans and credits
          </h3>
          <p className="tw-font-medium tw-text-lg mt-2">
            We render swift and convenient 3% interest rate loans to our clients
            at their comfort zones.
          </p>
          <div className=" tw-flex tw-flex-row-reverse tw-flex-wrap tw-justify-end tw-items-center tw-gap-5 tw-mt-5">
            <button className="tw-text-xs tw-rounded-md tw-py-2.5 tw-px-3 md:tw-text-sm tw-font-semibold tw-bg-[#F5F5F7]">
              <a href="/loan-calculator" className="tw-text-blue ">
                Loan Calculator
              </a>
            </button>
            <button className="tw-bg-blue tw-rounded-md tw-py-2.5 tw-px-2 tw-text-xs md:tw-text-sm tw-font-semibold">
              <a href="/apply" className="tw-text-white">
                Apply Now
              </a>
            </button>
            <button className="tw-text-xs tw-rounded-md tw-py-2.5 tw-px-3 md:tw-text-sm tw-font-semibold tw-bg-[#F5F5F7]">
              <a
                href="https://trustbancmfb.com/onboarding%20form.pdf"
                target="_blank"
                className="tw-text-blue "
              >
                Download form
              </a>
            </button>
          </div>
        </Col>
      </Row>

      <Row>
        <Col className="col-12 col-md-5">
          <div>
            <img src={Images.envelope} alt="envelope" />
          </div>
          <Tab.Container defaultActiveKey="doc">
            <Row className="flex-column">
              <Col>
                <Nav variant="pills">
                  <Nav.Item>
                    <Nav.Link eventKey="doc">DOCUMENTATION</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fee">FEES / DURATION</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col>
                <Tab.Content>
                  <Tab.Pane eventKey="doc">
                    <ul className="tw-list-disc tw-list-inside tw-leading-8 tw-p-0 tw-pl-3 mt-4">
                      <li>FILLED APPLICATION FORM</li>
                      <li>BVN</li>
                      <li>Staff ID</li>
                      <li>IPPIS / SERVICE NUMBER</li>
                    </ul>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fee">
                    <ul className="tw-list-disc tw-list-inside tw-leading-8 tw-p-0 tw-pl-3 mt-4">
                      <li> 3% MONTHLY INTEREST</li>
                      <li>3 – 24 MONTHS TENURE</li>
                    </ul>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
        <Col className="tw-bg-[#F5F5F7] p-3 tw-rounded-lg col-12 col-md-7">
          <div className="tw-leading-7 mb-4">
            <h3 className="tw-text-md md:tw-text-xl tw-text-blue tw-font-bold mb-2">
              PUBLIC SECTOR LOANS
            </h3>
            <p>
              Short-Term loans up to N5M are available to employees of approved
              Federal and State parastatals. Repayment is deducted from monthly
              salaries as reflected on current pay slip.
            </p>
            <ul className="list-tick p-0 mt-2">
              Organizations currently signed up to enjoy our facilities include:
              <li>NIGERIAN POLICE FORCE</li>
              <li>NIGERIAN CUSTOMS SERVICE</li>
              <li>NIGERIAN IMMIGRATION SERVICE</li>
              <li>NIGERIAN CORRECTIONAL SERVICE</li>
              <li>LAGOS STATE GOVERNMENT</li>
              <li>MINISTRIES, DEPARTMENTS AND AGENCIES</li>
              <li>TERTIARY INSTITUTIONS</li>
              <li>FEDERAL CAPITAL TERRITORY ADMINISTRATION</li>
            </ul>
          </div>
          <div className="tw-bg-white p-4 tw-rounded-lg">
            <Tab.Container defaultActiveKey="pay">
              <Row className="flex-column">
                <Col>
                  <Nav variant="pills">
                    <Nav.Item>
                      <Nav.Link eventKey="pay">PAY DAY LOAN</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="scheme">EMPLOYEE SCHEME</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col>
                  <Tab.Content>
                    <Tab.Pane eventKey="pay">
                      <ul className="list-dash tw-leading-7 p-0 mt-3">
                        <li>Repayment shall be from the employee salary</li>
                        <li>The interest rate shall be 3% monthly (Flat)</li>
                        <li>Upfront fee of 2% (One-off)</li>
                        The customer shall be required to provide the following:
                        <ul className="tw-list-disc tw-list-outside">
                          <li>Evidence of current monthly emolument</li>
                          <li>1 Passport photograph</li>
                          <li>Work ID card</li>
                          <li>Utility bill of current residence</li>
                        </ul>
                        The Memorandum of Understanding shall be executed by the
                        Bank and the employer
                      </ul>
                    </Tab.Pane>
                    <Tab.Pane eventKey="scheme">
                      <ul className="list-dash tw-leading-7 p-0 mt-3">
                        <li>Repayment shall be from the employee salary</li>
                        <li>The interest rate shall be 3% monthly (Flat)</li>
                        <li>Upfront fee of 3% (One-off)</li>
                        The customer shall be required to provide the following:
                        <ul className="tw-list-disc tw-list-outside">
                          <li>Evidence of current monthly emolument</li>
                          <li>1 Passport photograph</li>
                          <li>Work ID card</li>
                          <li>Utility bill of current residence</li>
                          <li>
                            Duly Signed blank cheques/Profiling on Remittal
                          </li>
                          <li>6-month statement of salary account</li>
                        </ul>
                        Tenure: 24 Months maximum
                      </ul>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </div>
        </Col>
      </Row>

      <div className="row mt-5 mb-5 gap-5">
        <div className="col-12 col-md-6 tw-mb-4 tw-bg-[#F5F5F7] tw-rounded-lg p-3">
          <h3 className="tw-text-md md:tw-text-xl tw-text-blue tw-font-bold mb-2">
            SALARY ADVANCE
          </h3>
          <p>
            This facility is available for salary earners whose salary accounts
            are domiciled with the MFB. The objective of this facility is to
            enable salary earners to acquire some of their dream household items
            and meet pressing family obligations (e.g. children/wards’ school
            fees, tenement renewal, etc.) The objective is to assist customers
            by making life comfortable and helping them manage their cash flows.
          </p>
        </div>

        <div className="col-12 col-md-5 tw-mb-4 tw-bg-[#F5F5F7] tw-rounded-lg p-3">
          <h3 className="tw-text-md md:tw-text-xl tw-text-blue tw-font-bold mb-2">
            EMPLOYEE CREDIT SCHEME
          </h3>
          <p>
            This facility is available for selected active employees in
            categorized companies who have a good payment history. The objective
            of this facility is to enable salary earners whose salary accounts
            are not domiciled with the MFB to meet pressing family obligations
            (e.g. children/wards’ school fees, tenement renewal, etc.) The
            objective is to assist customers by making life comfortable and
            helping them manage their cash flows.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickLoans;
