import { Button, Col, Row } from "react-bootstrap"
import Images from "../../../../assets/Images"
import './quickLoans.scss'

const QuickLoans = () => {
  return (
    <div className="tw-mt-24 tw-px-14 tw-pb-5">
      <Row className="m-0 tw-items-center">
        <Col className="col-4 col-xxl-6"><img src={Images["swift-loan"]} alt="quick loans" /></Col>
        <Col>
          <h3 className='tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl'>Get cash in a flash with our loans and credits</h3></Col>
      </Row>

      <div className="tw-leading-7 mb-4">
        <h3 className="tw-text-md md:tw-text-xl tw-text-blue">PUBLIC SECTOR LOANS</h3>
        <p>Short-Term loans up to N5M are available to employees of approved Federal and State parastatals. Repayment is deducted from monthly salaries as reflected on current pay slip.</p>
        <ul className="list-tick p-0">
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

      <ul className="tw-list-disc tw-list-inside tw-leading-8 p-0 mb-4">
        <p className="tw-bg-blue tw-w-fit tw-text-white p-1 rounded">DOCUMENTATION</p>
        <li>FILLED APPLICATION FORM</li>
        <li>BVN</li>
        <li>Staff ID</li>
        <li>IPPIS / SERVICE NUMBER</li>
      </ul>

      <div>
        <ul className="list-dash tw-leading-7 p-0">
          <p className="tw-bg-blue tw-w-fit tw-text-white p-1 rounded">PAY DAY LOAN</p>
          <li>Repayment shall be from the employee salary</li>
          <li>The interest rate shall be 3% monthly (Flat)</li>
          <li>Upfront fee of 2% (One-off)</li>
          <li>
            The customer shall be required to provide the following:
            <ul className="tw-list-disc tw-list-inside">
              <li>Evidence of current monthly emolument</li>
              <li>1 Passport photograph</li>
              <li>Work ID card</li>
              <li>Utility bill of current residence</li>
              The Memorandum of Understanding shall be executed by the Bank and the employer</ul></li>
        </ul>
      </div>

      <div className="tw-mb-4">
        <h3 className="tw-text-md md:tw-text-xl tw-text-blue">SALARY ADVANCE</h3>
        <p>This facility is available for salary earners whose salary accounts are domiciled with the MFB. The objective of this facility is to enable salary earners to acquire some of their dream household items and meet pressing family obligations (e.g. children/wards’ school fees, tenement renewal, etc.) The objective is to assist customers by making life comfortable and helping them manage their cash flows.</p>
      </div>

      <div className="tw-mb-4">
        <h3 className="tw-text-md md:tw-text-xl tw-text-blue">EMPLOYEE CREDIT SCHEME</h3>
        <p>This facility is available for selected active employees in categorized companies who have a good payment history. The objective of this facility is to enable salary earners whose salary accounts are not domiciled with the MFB to meet pressing family obligations (e.g. children/wards’ school fees, tenement renewal, etc.) The objective is to assist customers by making life comfortable and helping them manage their cash flows.</p>
      </div>

      <div className="tw-flex tw-justify-end tw-gap-7">
        <Button as="a" href="/loan-calculator" className="tw-border-blue tw-bg-white tw-text-blue tw-font-medium shadow-sm">Loan Calculator</Button>
        <Button as="a" href="/apply" className="tw-bg-blue tw-border-0 tw-font-medium shadow-sm">Apply Now</Button>
      </div>
    </div>
  )
}

export default QuickLoans