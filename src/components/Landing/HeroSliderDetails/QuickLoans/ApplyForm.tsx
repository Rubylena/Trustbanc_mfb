import { Link } from "react-router-dom";
import "./quickLoans.scss";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import ComboBox from "./ComboBox";
import { useState } from "react";

export default function ApplyForm() {
  const [submitting, setSubmitting] = useState(false);
  const tenor = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  return (
    <>
      <Link to="/quick-loans" className="tw-mt-24 tw-w-fit">
        <p className="tw-underline tw-text-blue tw-p-2 tw-pl-5 tw-font-medium">
          {" "}
          &lArr; Quick loans
        </p>
      </Link>
      <div className="tw-flex tw-mb-24 tw-ml-4 tw-mr-4 md:tw-ml-14 md:tw-mr-0 tw-h-full ">
        <Form
          action="https://formsubmit.co/support@trustbancgroup.com"
          method="POST"
          encType="multipart/form-data"
          className="col-12 col-md-8 tw-bg-blue tw-rounded-lg tw-text-white tw-p-4 md:tw-p-10 quick-loans"
          onSubmit={() => {
            setSubmitting(true);
          }}
        >
          <Stack gap={3}>
            <h1 className="fs-3">KYC Details</h1>
            <Row className="row-gap-3">
              <Col xs={12} md={6}>
                <Form.Label className="m-0">First Name</Form.Label>
                <Form.Control
                  placeholder="Your FirstName"
                  name="First Name"
                  type="text"
                  required
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="NEW LOAN APPLICATION - MFB"
                />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_next"
                  value="https://trustbancmfb.netlify.app/thanks"
                  // value="https://trustbancmfb.com/thanks"
                />
              </Col>
              <Col>
                <Form.Label className="m-0">Middle Name</Form.Label>
                <Form.Control
                  placeholder="Your MiddleName"
                  name="Middle Name"
                  type="text"
                  required
                />
              </Col>
            </Row>
            <Row className="row-gap-3">
              <Col xs={12} md={6}>
                <Form.Label className="m-0">Last Name</Form.Label>
                <Form.Control
                  placeholder="Your LastName"
                  name="Last Name"
                  type="text"
                  required
                />
              </Col>
              <Col>
                <Form.Label className="m-0">Email</Form.Label>
                <Form.Control
                  placeholder="Your Email"
                  type="email"
                  name="Email"
                  required
                  autoComplete="on"
                />
              </Col>
            </Row>
            <Row className="row-gap-3">
              <Col xs={12} md={6}>
                <Form.Label className="m-0">Telephone</Form.Label>
                <Form.Control
                  placeholder="Your Telephone"
                  type="number"
                  name="Telephone"
                  required
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.target.value = e.target.value.toString().slice(0, 11);
                  }}
                />
              </Col>
              <Col>
                <Form.Label className="m-0">Address</Form.Label>
                <Form.Control
                  placeholder="Your Address"
                  type="text"
                  name="Address"
                  required
                  autoComplete="on"
                />
              </Col>
            </Row>
            <Row className="row-gap-3">
              <Col xs={12} md={6}>
                <Form.Label className="m-0">BVN</Form.Label>
                <Form.Control
                  placeholder="Your BVN"
                  type="number"
                  name="BVN"
                  required
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.target.value = e.target.value.toString().slice(0, 11);
                  }}
                />
              </Col>
              <Col>
                <Form.Label className="m-0">IPPIS/Service Number</Form.Label>
                <Form.Control
                  placeholder="Your IPPIS/Service Number"
                  name="IPPIS/Service Number"
                  required
                />
              </Col>
            </Row>
          </Stack>
          <Stack gap={3}>
            <h1 className="fs-3 pt-3">Loan Form</h1>
            <Row className="row-gap-3">
              <Col xs={12} md={6}>
                <Form.Label className="m-0">Loan Amount</Form.Label>
                <Form.Control
                  placeholder="Loan Amount(NGN)"
                  type="number"
                  name="Loan Amount"
                  required
                />
              </Col>
              <Col>
                <Form.Label className="m-0">NIN</Form.Label>
                <Form.Control
                  placeholder="Your NIN"
                  type="number"
                  name="NIN"
                  required
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.target.value = e.target.value.toString().slice(0, 11);
                  }}
                />
              </Col>
            </Row>
            <Row className="row-gap-3">
              <Col xs={12} md={6}>
                <Form.Label className="m-0">Loan Tenor</Form.Label>
                <Form.Select name="Loan Tenor" required>
                  <option>Select duration</option>
                  {tenor.map((tenor) => (
                    <option key={tenor} value={tenor}>
                      {tenor}
                    </option>
                  ))}
                </Form.Select>
              </Col>
              <Col>
                <Form.Group>
                  <ComboBox />
                </Form.Group>
              </Col>
            </Row>
            <Row className="row-gap-3">
              <Col xs={12} md={6}>
                <Form.Label className="m-0">Account Number</Form.Label>
                <Form.Control
                  placeholder="Account Number"
                  type="number"
                  name="Account Number"
                  required
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.target.value = e.target.value.toString().slice(0, 10);
                  }}
                />
              </Col>
              <Col>
                <Form.Label className="m-0">Employer</Form.Label>
                <Form.Control
                  placeholder="Employer"
                  type="text"
                  name="Employer"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Form.Floating className="m-0">
                  <Form.Control
                    id="floatingPasswordCustom"
                    type="date"
                    placeholder="Employment Date"
                    name="Employment Date"
                    required
                  />
                  <label htmlFor="floatingPasswordCustom">
                    Employment Date
                  </label>
                </Form.Floating>
              </Col>
              <Col>
                <Form.Label className="m-0">Employer</Form.Label>
                <Form.Control
                  placeholder="Employers Address"
                  type="text"
                  name="Employers Address"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Form.Label className="m-0">Employers Telephone</Form.Label>
                <Form.Control
                  placeholder="Employers Telephone"
                  type="number"
                  name="Employers Telephone"
                  required
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.target.value = e.target.value.toString().slice(0, 11);
                  }}
                />
              </Col>
              <Col>
                <Form.Label className="m-0">Name of Next of Kin</Form.Label>
                <Form.Control
                  placeholder="FullName of Next of Kin"
                  type="text"
                  name="Name of Next of Kin"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Form.Label className="m-0">Next of Kin Telephone</Form.Label>
                <Form.Control
                  placeholder="Next of Kin Telephone"
                  type="number"
                  name="Next of Kin Telephone"
                  required
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    e.target.value = e.target.value.toString().slice(0, 11);
                  }}
                />
              </Col>
              <Col>
                <Form.Label className="m-0">
                  Relationship with Next of Kin
                </Form.Label>
                <Form.Control
                  placeholder="Relationship with Next of Kin"
                  type="text"
                  name="Relationship with Next of Kin"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Form.Label className="m-0">Next of Kin email</Form.Label>
                <Form.Control
                  placeholder="Next of Kin Email"
                  type="email"
                  name="Next of Kin email"
                  required
                />
              </Col>
              <Col>
                <Form.Label className="m-0">Next of Kin Address</Form.Label>
                <Form.Control
                  placeholder="Next of Kin Address"
                  type="text"
                  name="Next of Kin Address"
                  required
                />
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Passport Photograph:</Form.Label>
                  <Form.Control
                    type="file"
                    name="Passport Photo attachment"
                    accept="image/png, image/jpeg"
                    required
                  />
                </Form.Group>{" "}
              </Col>
              <Col>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Valid Staff ID:</Form.Label>
                  <Form.Control
                    type="file"
                    name="Valid Staff ID attachment"
                    accept="image/png, image/jpeg"
                    required
                  />
                </Form.Group>{" "}
              </Col>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Valid ID:</Form.Label>
                  <Form.Control
                    type="file"
                    name="Valid ID attachment"
                    accept="image/png, image/jpeg"
                    required
                  />
                </Form.Group>{" "}
              </Col>
              <Col>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Recent PaySlip:</Form.Label>
                  <Form.Control
                    type="file"
                    name="Recent PaySlip attachment"
                    accept="image/png, image/jpeg"
                    required
                  />
                </Form.Group>{" "}
              </Col>
            </Row>
            <Form.Check
              id="form-check"
              type="checkbox"
              label="I hereby consent that the information I supplied above are true."
              style={{ fontSize: "0.8rem" }}
              required
            />
            <Form.Check
              id="form-check2"
              type="checkbox"
              label="I hereby also agree that upon disbursement, the management fee and transfer fee should be deducted from the requested loan that is to be transferred to my stated salary account and the repayment will be directly deducted from source via applicable Direct Debit Platform."
              style={{ color: "#daa43f", fontSize: "0.8rem" }}
              required
            />
            <Button type="submit" disabled={submitting}>
              {submitting ? "Submitting..." : "Submit"}
            </Button>
          </Stack>
        </Form>
        <div className="col-md-4 form-bg tw-hidden md:tw-block"></div>
      </div>
    </>
  );
}
