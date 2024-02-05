import { Col, Row } from "react-bootstrap";
import Images from "../../../assets/Images";

export const FixedDeposits = () => {
  return (
    <Row className="tw-mt-24 container tw-mx-auto sm:tw-m-auto tw-items-center tw-flex-row-reverse">
      <Col className="col-md-5 p-0 tw-hidden sm:tw-flex">
        <img
          src={Images.fixed}
          alt="fixed deposits"
          className="tw-w-full tw-object-contain"
        />
      </Col>
      <Col className="col-12 col-sm-7 col-md-7 tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5 p-0">
        <h3 className="tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl">
          Automate your savings and earn more
        </h3>

        <p className="tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-justify">
          Investing money is the process of committing resources in a strategic
          way to accomplish a specific objective at TrustBanc we have attractive
          investment vehicles which have been made easy, convenient and risk
          free for your funds. You can invest your Naira in either Fixed or Call
          Deposits or a tailored investment products.
        </p>

        <div className=" tw-flex tw-flex-row-reverse tw-flex-wrap tw-justify-end tw-items-center tw-gap-5 tw-mt-5">
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
        </div>
      </Col>
    </Row>
  );
};
