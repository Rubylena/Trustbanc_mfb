import { Col, Row } from "react-bootstrap";
import Images from "../../../assets/Images";

export const EnterpriseLoan = () => {
  return (
    <main>
      <Row className="tw-pt-16 md:tw-pt-32 mb-5 tw-pb-5 md:tw-pb-8 md:tw-pr-10 tw-items-center gap-2 tw-mb-5 gap-3 tw-bg-[#e6ebf1] sm:tw-flex-row-reverse">
        <Col className="col-md-4 p-0 tw-hidden sm:tw-flex">
          <img
            src={Images["enterprise-loan"]}
            alt="Corporate"
            className="tw-w-full tw-object-contain"
          />
        </Col>
        <Col className="col-12 col-md-7 tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5 px-4 sm:p-0">
          <h3 className="tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl">
            Break limits with our Enterprise Loan
          </h3>

          <p className="tw-text-xs sm:tw-text-sm md:tw-text-md">
            This is a product designed for micro and small business
            entrepreneurs with existing businesses requiring increase in working
            capital i.e. scale of business operations. It is strictly meant for
            income generating activities e.g. buying of goods for resale.
          </p>

          {/* <div className=" tw-flex tw-flex-row-reverse tw-flex-wrap tw-justify-end tw-items-center tw-gap-5">
            <button className="tw-text-xs tw-rounded-md tw-py-2.5 tw-px-3 md:tw-text-sm tw-font-semibold tw-bg-[#F5F5F7]">
              <a
                href="https://trustbancmfb.com/onboarding%20form.pdf"
                target="_blank"
                className="tw-text-blue "
              >
                Download form
              </a>
            </button>
            <button className="tw-bg-blue tw-rounded-md tw-py-2.5 tw-px-2 tw-text-xs md:tw-text-sm tw-font-semibold">
              <a
                href="https://app.trustbancgroup.com/accounts/login/"
                target="_blank"
                className="tw-text-white"
              >
                Open account online
              </a>
            </button>
          </div> */}
        </Col>
      </Row>

      <div className="container tw-flex tw-flex-col tw-gap-4">
        <Row className=" tw-bg-[#F8F9FF] mt-3 p-3 tw-rounded-lg tw-items-center gap-2">
          <Col className="col-3 tw-hidden sm:tw-flex">
            <img className="tw-w-full" src={Images.market} alt="market" />
          </Col>
          <Col>
            {" "}
            <p>
              <b>Target market:</b> The product is targeted at micro and small
              Business entrepreneurs who are Nigerian citizens or permanent
              legal residents within the age bracket of 18- 60 years. They must
              have been in their current line of business for at least 6months
              and 12months for individual customers. They must also have been in
              their respective business locations for at least 6 months.
            </p>
          </Col>
        </Row>
        <Row className=" tw-bg-[#F8F9FF] mt-3 p-3 tw-rounded-lg tw-items-center gap-2">
          <Col className="col-3 tw-hidden sm:tw-flex">
            <img className="tw-w-full" src={Images.rationale} alt="rationale" />
          </Col>
          <Col>
            {" "}
            <p>
              <b>Product rationale:</b> Micro and small entrepreneurs and
              businesses often have challenges over inadequate working capital
              to run their businesses. The volume of transactions, business size
              and turnover vary from one entrepreneur to another, it would be
              time saving to have a one-stop product that meet the various
              working capital needs. This product would enable micro and small
              business entrepreneurs with existing businesses to satisfy such
              needs as stock piling goods and increase product offerings, etc.
            </p>
          </Col>
        </Row>
        <Row className=" tw-bg-[#F8F9FF] mt-3 p-3 tw-rounded-lg tw-items-center gap-2">
          <Col className="col-3 tw-hidden sm:tw-flex">
            <img className="tw-w-full" src={Images.obligor} alt="obligor" />
          </Col>
          <Col>
            {" "}
            <p>
              <b>Obligor Limit:</b> N500, 000.00. Based on business assessment,
              the initial loan sizes shall be determined. Thereafter, subsequent
              loan increases shall not exceed 50% of the preceding loan amount.
              This implies that each renewal loan size shall increase by a
              maximum of 50% over the customer’s previous loan amount
            </p>
          </Col>
        </Row>
      </div>

      <Row className=" tw-bg-[#F8F9FF] tw-mt-14 tw-py-10 tw-px-6 md:tw-px-14 tw-mb-10 tw-rounded-lg tw-items-center gap-2">
        <Col className="col-12 col-sm-5 ">
          <img
            className="tw-w-full"
            src={Images["enterprise-features"]}
            alt="features"
          />
        </Col>
        <Col>
          <ul className="tw-list-disc tw-list-inside p-0">
            Customer’s assessment shall be based on any two of the following
            three factors:
            <li>
              Estimated business worth – loan amount shall not exceed 80% of the
              estimated business worth.
            </li>
            <li>
              Estimated weekly turn-over/sale – repayment shall be structured
              such that weekly/monthly repayment amount shall not exceed 10% of
              weekly/monthly turn over/sales.
            </li>
            <li>
              Average weekly/monthly net income – repayment shall be structured
              such that weekly/monthly repayment amount shall not exceed 40% of
              average weekly/monthly net income.
            </li>
          </ul>
          <p className="mt-3">
            <b>Repayment plan:</b> Repayment of the loan shall be weekly or
            monthly depending on the customer’s preference.
          </p>
          <p className="mt-3">
            <b>Pricing:</b> Interest rate: 3% monthly (Flat)
            Management/processing shall be 3% flat paid upfront
          </p>
        </Col>
      </Row>
    </main>
  );
};
