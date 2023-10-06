import { Button, Col, Row } from "react-bootstrap"
import Images from "../../../../assets/Images"
import './quickLoans.scss'

const QuickLoans = () => {
  return (
    <div>
      <Row className="m-0">
        <Col><img src={Images["swift-loan"]} alt="quick loans" /></Col>
        <Col className="">Get cash in a flash with our loans and credits</Col>
      </Row>

      <h3>PUBLIC SECTOR LOANS</h3>
      <p>Short-Term loans up to N5M are available to employees of approved Federal and State parastatals. Repayment is deducted from monthly salaries as reflected on current pay slip.</p>
      <p></p>
      <ul className="list-tick">
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

      <div>
        <p></p>
        <ul className="tw-list-disc tw-list-inside">
          DOCUMENTATION
          <li>FILLED APPLICATION FORM</li>
          <li>BVN</li>
          <li>Staff ID</li>
          <li>IPPIS / SERVICE NUMBER</li>
        </ul>
      </div>
      <div>
        <ul className="list-dash">
          PAY DAY LOAN
          <li>Repayment shall be from the employee salary</li>
          <li>The interest rate shall be 3% monthly (Flat)</li>
          <li>Upfront fee of 2% (One-off)</li>
        </ul>

        <h3>SALARY ADVANCE</h3>
        <p>This facility is available for salary earners whose salary accounts are domiciled with the MFB. The objective of this facility is to enable salary earners to acquire some of their dream household items and meet pressing family obligations (e.g. children/wards’ school fees, tenement renewal, etc.) The objective is to assist customers by making life comfortable and helping them manage their cash flows.</p>

        <h3>EMPLOYEE CREDIT SCHEME</h3>
        <p>This facility is available for selected active employees in categorized companies who have a good payment history. The objective of this facility is to enable salary earners whose salary accounts are not domiciled with the MFB to meet pressing family obligations (e.g. children/wards’ school fees, tenement renewal, etc.) The objective is to assist customers by making life comfortable and helping them manage their cash flows.</p>
      </div>

      <div>
        <Button as="a" href="loan-calculator" >Loan Calculator</Button>
        <Button as="a" href="/apply">Apply Now</Button>
      </div>
    </div>
  )
}

export default QuickLoans