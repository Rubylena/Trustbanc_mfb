import { Col, Row } from "react-bootstrap";
import Images from "../../../assets/Images";

export const HybridSavings = () => {
  return (
    <main className="tw-mt-16 md:tw-mt-24 tw-px-6 md:tw-px-14">
      <Row className="tw-items-center tw-mb-5">
        <Col className="col-md-5 3xl:tw-w-5/12 p-0">
          <img
            src={Images.hybrid}
            alt="hybrid savings"
            className="tw-w-full tw-object-contain"
          />
        </Col>
        <Col className="col-sm-7 col-md-5 tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5 p-0">
          <h3 className="tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl">
          Be smart with your savings
          </h3>

          <div className="tw-flex tw-gap-2 flex-wrap tw-flex-row tw-text-left tw-text-white tw-cursor-pointer"></div>
        </Col>
      </Row>
      <p className="tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-justify">
        TrustBanc MfB hybrid savings account comes with full KYC (Know Your
        Customer) requirements and also makes you gain access to the world of
        convenience which comes with owning a TrustBanc MfB account. Also, our
        customers get to enjoy full range of services on offer ranging from
        mobile banking applications to debit cards, all to ensure that you
        always have access to your account at any given time.
      </p>

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
