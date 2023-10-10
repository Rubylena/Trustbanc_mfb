import { Col, Row } from "react-bootstrap";
import Images from "../../../assets/Images";

export const FixedDeposits = () => {
  return (
    <main className="tw-mt-16 md:tw-mt-14 md:tw-mb-5 tw-px-6 md:tw-px-14">
      <Row className="tw-items-center tw-h-[15rem] sm:tw-h-auto">
        <Col className="col-md-5 3xl:tw-w-5/12 p-0 md:tw-h-[28rem] lg:tw-h-[35rem]">
          <img
            src={Images.fixed}
            alt="fixed deposits"
            className="tw-w-full tw-h-full"
          />
        </Col>
        <Col className="col-sm-7 col-md-5 tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5 p-0">
          <h3 className="tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl">
            Automate your savings and earn more
          </h3>

          <div className="tw-flex tw-gap-2 flex-wrap tw-flex-row tw-text-left tw-text-white tw-cursor-pointer"></div>
        </Col>
      </Row>
      <p className="tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-justify">
        Investing money is the process of committing resources in a strategic
        way to accomplish a specific objective at TrustBanc we have attractive
        investment vehicles which have been made easy, convenient and risk free
        for your funds. You can invest your Naira in either Fixed or Call
        Deposits or a tailored investment products.
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
