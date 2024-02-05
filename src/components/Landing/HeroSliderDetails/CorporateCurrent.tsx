import { Col, Row } from "react-bootstrap";
import Images from "../../../assets/Images";

export const CorporateCurrent = () => {
  return (
    <main>
      <Row className="tw-pt-16 md:tw-pt-24 mb-5 tw-py-5 md:tw-py-0 container-fluid tw-mx-auto sm:tw-m-auto tw-items-center tw-mb-5 tw-bg-[#E9EAFC] tw-flex-row-reverse">
        <Col className="col-md-6 p-0 tw-hidden sm:tw-flex">
          <img
            src={Images["corporate-current"]}
            alt="Corporate"
            className="tw-w-full tw-object-contain"
          />
        </Col>
        <Col className="col-12 col-md-5 tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5 p-0">
          <h3 className="tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl">
            An account with class that means business.
          </h3>

          <p className="tw-text-xs sm:tw-text-sm md:tw-text-md">
            Open a TrustBanc MfB current account with full and gain access to
            the world of convenience
          </p>
          <div className=" tw-flex tw-flex-row-reverse tw-flex-wrap tw-justify-end tw-items-center tw-gap-5">
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

      <div className="container">
        <p className="tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-justify">
          TrustBanc MfB current account comes with full KYC (Know Your Customer)
          requirements and also makes you gain access to the world of
          convenience which comes with owning a TrustBanc MfB account. Also, our
          customers get to enjoy full range of services on offer ranging from
          mobile banking applications to debit cards, all to ensure that you
          always have access to your account at any given time.
        </p>

        <div className="mt-4 mb-5">
          <div className="tw-w-fit tw-bg-[#F8F9FF] tw-text-blue tw-font-bold tw-text-xl md:tw-text-3xl px-3 tw-rounded-lg">
            <p>Features</p>
          </div>

          <Row className="gap-4 container">
            <Col className="col-12 col-md-5 tw-bg-[#F8F9FF] mt-3 p-3 tw-rounded-lg tw-flex tw-items-center gap-2 tw-font-medium">
              <div className="tw-w-20">
                <img className="tw-w-full" src={Images.percent} alt="percent" />
              </div>
              <p>10% pa Interest</p>
            </Col>
            <Col className="col-12 col-md-6 tw-bg-[#F8F9FF] mt-3 p-3 tw-rounded-lg tw-flex tw-items-center gap-2 tw-font-medium">
              <div className="tw-w-20">
                <img className="tw-w-full" src={Images.atm} alt="ATM" />
              </div>
              <p>ATM Card & Cheques are made available on request</p>
            </Col>
          </Row>
          <Row className="gap-4 container">
            <Col className="col-12 col-md-5 tw-bg-[#F8F9FF] mt-3 p-3 tw-rounded-lg tw-flex tw-items-center gap-2 tw-font-medium">
              <div className="tw-w-20">
                <img
                  className="tw-w-full"
                  src={Images.zero}
                  alt="zero minimum"
                />
              </div>
              <p>Zero minimum account opening balance</p>
            </Col>
            <Col className="col-12 col-md-6 tw-bg-[#F8F9FF] mt-3 p-3 tw-rounded-lg tw-flex tw-items-center gap-2 tw-font-medium">
              <div className="tw-w-36">
                <img className="tw-w-full" src={Images.cheques} alt="cheques" />
              </div>
              <p>
                Cheques, Dividend warrant and other financial instruments can be
                lodged into the account
              </p>
            </Col>
          </Row>
          <Row className="gap-4 container">
            <Col className="col-12 col-md-5 tw-bg-[#F8F9FF] mt-3 p-3 tw-rounded-lg tw-flex tw-items-center gap-2 tw-font-medium">
              <div className="tw-w-20">
                <img className="tw-w-full" src={Images.kyc} alt="kyc" />
              </div>
              <p>Simple KYC requirement and referencing</p>
            </Col>
            <Col className="col-12 col-md-6 tw-bg-[#F8F9FF] mt-3 p-3 tw-rounded-lg tw-flex tw-items-center gap-2 tw-font-medium">
              <div className="tw-w-28">
                <img
                  className="tw-w-full"
                  src={Images["cheques-withdraw"]}
                  alt="cheques"
                />
              </div>
              <p>
                Cheque withdrawal and deposit at all correspondence Bank's
                Branch
              </p>
            </Col>
          </Row>
          <Row className="gap-4 container">
            <Col className="col-12 col-md-5 tw-bg-[#F8F9FF] mt-3 p-3 tw-rounded-lg tw-flex tw-items-center gap-2 tw-font-medium">
              <div className="tw-w-20">
                <img className="tw-w-full" src={Images.mobile} alt="mobile" />
              </div>
              <p>Internet & Mobile Banking enabled</p>
            </Col>
            <Col className="col-12 col-md-6 tw-bg-[#F8F9FF] mt-3 p-3 tw-rounded-lg tw-flex tw-items-center gap-2 tw-font-medium">
              <div className="tw-w-24">
                <img src={Images.cash} alt="cash" />
              </div>
              <p className="tw-w-full">
                Cash withdrawal and deposit at all correspondence Bank's Branch.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </main>
  );
};
