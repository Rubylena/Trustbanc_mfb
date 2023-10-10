import { Col, Row } from "react-bootstrap";
import Images from "../../../assets/Images";

export const CorporateCurrent = () => {
  return (
    <main className="tw-mt-16 tw-mb-10 md:tw-mt-24 md:tw-mb-16 tw-px-6 md:tw-px-14">
      <Row className="tw-items-center tw-mb-5">
        <Col className="col-md-5 3xl:tw-w-5/12 p-0">
          <img
            src={Images["corporate-current"]}
            alt="corporate current"
            className="tw-w-full tw-object-contain tw-rounded-3xl"
          />
        </Col>
        <Col className="col-sm-7 col-md-5 tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5 p-0">
          <h3 className="tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl tw-text-center">
            Corporate Current
          </h3>

          <div className="tw-flex tw-gap-2 flex-wrap tw-flex-row tw-text-left tw-text-white tw-cursor-pointer"></div>
        </Col>
      </Row>
      <p className="tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-justify">
        TrustBanc MfB current account comes with full KYC (Know Your Customer)
        requirements and also makes you gain access to the world of convenience
        which comes with owning a TrustBanc MfB account. Also, our customers get
        to enjoy full range of services on offer ranging from mobile banking
        applications to debit cards, all to ensure that you always have access
        to your account at any given time.
      </p>

      <ul className="tw-p-0 tw-text-xs sm:tw-text-sm md:tw-text-base tw-flex tw-flex-col tw-gap-3 tw-mt-14">
        <p
          style={{
            background:
              "linear-gradient(270deg, #83460F 24.27%, #D07F31 79.51%)", width: "fit-content"
          }}
          className="rounded px-3 py-1 tw-text-white tw-font-medium"
        >
          Features
        </p>
        <li>10% pa Interest</li>
        <li>Zero minimum account opening balance</li>
        <li>Simple KYC requirement and referencing</li>
        <li>Internet & Mobile Banking enabled</li>
        <li>ATM Card & Cheques are made available on request</li>
        <li>
          Cheques, Dividend warrant and other financial instruments can be
          lodged into the account
        </li>
        <li>
          Cheque withdrawal and deposit at all correspondence Bank's Branch
        </li>
        <li>
          Cheque withdrawal and deposit at all correspondence Bank's Branch
        </li>
        <li>Internet & Mobile Banking enabled</li>
        <li>ATM Card & Cheques are made available on request</li>
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
