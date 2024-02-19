import { Col, Row } from "react-bootstrap";
import Images from "../../../assets/Images";

export const Savings = () => {
  return (
    <Row className="tw-mt-24 container tw-mx-auto sm:tw-m-auto tw-items-center tw-flex-row-reverse">
      <Col className="col-md-5 p-0 tw-hidden sm:tw-flex">
        <img
          src={Images.savings}
          alt="savings"
          className="tw-w-full tw-object-contain"
        />
      </Col>
      <Col className="col-12 col-sm-7 col-md-7 tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5 p-0">
        <h3 className="tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl">
          Be smart with your savings
        </h3>

        <p className="tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-justify">
          TrustBanc MfB savings account comes with full KYC (Know Your Customer)
          requirements and also makes you gain access to the world of
          convenience which comes with owning a TrustBanc MfB account. Also, our
          customers get to enjoy full range of services on offer ranging from
          mobile banking applications to debit cards, all to ensure that you
          always have access to your account at any given time.
        </p>

        <div className=" tw-flex tw-flex-row-reverse tw-flex-wrap tw-justify-end tw-items-center tw-gap-5 tw-mt-5">
          <button className="tw-text-xs tw-rounded-md tw-py-2.5 tw-px-3 md:tw-text-sm tw-font-semibold tw-bg-[#F5F5F7]">
            <a
              href="https://trustbancmfb.com/mfb-Individual-form.pdf"
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
        </div>
      </Col>
    </Row>
  );
};
