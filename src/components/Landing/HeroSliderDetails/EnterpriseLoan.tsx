import { Col, Row } from "react-bootstrap";
import Images from "../../../assets/Images";

export const EnterpriseLoan = () => {
  return (
    <main className="tw-mt-16 tw-mb-10 md:tw-mt-24 md:tw-mb-16 tw-px-6 md:tw-px-14">
      <Row className="tw-items-center tw-mb-5">
        <Col className="col-md-5 3xl:tw-w-5/12 p-0">
          <img
            src={Images["enterprise-loan"]}
            alt="corporate current"
            className="tw-w-full tw-object-contain tw-rounded-3xl"
          />
        </Col>
        <Col className="col-sm-7 col-md-5 tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5 p-0">
          <h3 className="tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl tw-text-center">
            Enterprise Loan
          </h3>

          <div className="tw-flex tw-gap-2 flex-wrap tw-flex-row tw-text-left tw-text-white tw-cursor-pointer"></div>
        </Col>
      </Row>
      <div className="tw-flex tw-flex-col tw-gap-4">
        <p className="tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-justify">
          This is a product designed for micro and small business entrepreneurs
          with existing businesses requiring increase in working capital i.e.
          scale of business operations. It is strictly meant for income
          generating activities e.g. buying of goods for resale.
        </p>
        <p className="tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-justify">
          Product rationale: Micro and small entrepreneurs and businesses often
          have challenges over inadequate working capital to run their
          businesses. The volume of transactions, business size and turnover
          vary from one entrepreneur to another, it would be time saving to have
          a one-stop product that meet the various working capital needs. This
          product would enable micro and small business entrepreneurs with
          existing businesses to satisfy such needs as stock piling goods and
          increase product offerings, etc.
        </p>
        <p className="tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-justify">
          Product rationale: Micro and small entrepreneurs and businesses often
          have challenges over inadequate working capital to run their
          businesses. The volume of transactions, business size and turnover
          vary from one entrepreneur to another, it would be time saving to have
          a one-stop product that meet the various working capital needs. This
          product would enable micro and small business entrepreneurs with
          existing businesses to satisfy such needs as stock piling goods and
          increase product offerings, etc.
        </p>
        <p className="tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-justify">
          Product rationale: Micro and small entrepreneurs and businesses often
          have challenges over inadequate working capital to run their
          businesses. The volume of transactions, business size and turnover
          vary from one entrepreneur to another, it would be time saving to have
          a one-stop product that meet the various working capital needs. This
          product would enable micro and small business entrepreneurs with
          existing businesses to satisfy such needs as stock piling goods and
          increase product offerings, etc.
        </p>
      </div>

      <ul className="tw-p-0 tw-text-xs sm:tw-text-sm md:tw-text-base tw-flex tw-flex-col tw-gap-3 tw-mt-14">
        <p
          style={{
            background:
              "linear-gradient(270deg, #83460F 24.27%, #D07F31 79.51%)",
            width: "fit-content",
          }}
          className="rounded px-3 py-1 tw-text-white tw-font-medium"
        >
          Features
        </p>
        <li>
          Customer’s assessment shall be based on any two of the following three
          factors:{" "}
        </li>
        <li>
          Estimated business worth – loan amount shall not exceed 80% of the
          estimated business worth.
        </li>
        <li>
          Estimated weekly turn-over/sale – repayment shall be structured such
          that weekly/monthly repayment amount shall not exceed 10% of
          weekly/monthly turn over/sales.
        </li>
        <li>
          Average weekly/monthly net income – repayment shall be structured such
          that weekly/monthly repayment amount shall not exceed 40% of average
          weekly/monthly net income.
        </li>
        <li>
          Repayment plan: Repayment of the loan shall be weekly or monthly
          depending on the customer’s preference.
        </li>
        <li>
          Pricing: Interest rate: 3% monthly (Flat) Management/processing shall
          be 3% flat paid upfront
        </li>
      </ul>

      <div className=" tw-flex tw-flex-wrap tw-justify-end tw-items-center tw-gap-5 tw-mt-5">
        <button className="tw-text-xs tw-rounded-md tw-border tw-py-1 tw-px-2 tw-border-blue md:tw-text-sm tw-font-semibold">
          <a
            href="https://app.trustbancgroup.com/accounts/login/"
            target="_blank"
            className=" tw-text-blue"
          >
            Open account online
          </a>
        </button>
        <button className="tw-bg-blue tw-rounded-md tw-py-1 tw-px-2 tw-text-xs md:tw-text-sm tw-font-semibold">
          <a
            href="https://trustbancmfb.com/onboarding%20form.pdf"
            target="_blank"
            className="tw-text-white"
          >
            Download form
          </a>
        </button>
      </div>
    </main>
  );
};
