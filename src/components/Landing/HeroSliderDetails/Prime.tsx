import { Col, Row } from "react-bootstrap";
import Images, { Icons } from "../../../assets/Images";

export const Prime = () => {
  return (
    <main className="tw-mt-16 md:tw-mt-0 tw-pr-10  md:tw-pr-20">
      <Row className="tw-items-center tw-mb-5">
        <Col className="col-md-7 3xl:tw-w-5/12 p-0 tw-hidden sm:tw-block ">
          <img
            src={Images["prime-hero"]}
            alt="prime app"
            className="tw-w-full tw-object-contain"
          />
        </Col>
        <Col className="col-sm-6 col-md-5 tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5 p-0">
          <h3 className="tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl">
            Take control of your accounts anywhere
          </h3>
          <p className="tw-text-xs sm:tw-text-sm md:tw-text-md">
            Prime By TrustBanc is a sophisticated banking app brought to you by
            TrustBanc. The banking app provides you with seamless financial
            transactions and an avenue to invest through different options. With
            Prime by TrustBanc, you earn up to 10% on savings and up to 20% on
            investments, seamless transactions, no hidden charges.
          </p>
          <div className="tw-flex tw-gap-2 flex-wrap tw-flex-row tw-text-left tw-text-white tw-cursor-pointer">
            <a
              href="https://apps.apple.com/gb/app/prime-by-trustbanc/id1552300596"
              className="tw-text-white "
              target="_blank"
            >
              <div className="tw-bg-black tw-flex tw-gap-1 tw-items-center tw-rounded-lg tw-py-1 tw-px-2">
                <div>
                  <img src={Icons.apple} alt="apple" />
                </div>
                <div className="tw-hidden sm:tw-block">
                  <p className="tw-text-[0.5rem] md:tw-text-xs">
                    Download on the
                  </p>
                  <p className="tw-text-xs sm:tw-text-sm md:tw-font-semibold">
                    App Store
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.cwg.trustbanc&pli=1"
              className="tw-text-white "
              target="_blank"
            >
              <div className="tw-bg-black tw-flex tw-items-center tw-gap-1 tw-py-1 tw-px-2 tw-rounded-lg">
                <div>
                  <img src={Icons.play} alt="play store" />
                </div>
                <div className="tw-hidden sm:tw-block">
                  <p className="tw-text-[0.5rem] md:tw-text-xs">Get it on</p>
                  <p className="tw-text-xs sm:tw-text-sm md:tw-font-semibold">
                    Google Play
                  </p>
                </div>
              </div>
            </a>

            <div className="tw-bg-blue tw-flex tw-items-center tw-gap-1 tw-py-1 tw-px-2 tw-rounded-lg">
              <img src={Icons.globe} alt="website" />
              <p className="tw-text-xs md:tw-text-sm tw-font-semibold tw-hidden sm:tw-block">
                <a
                  href="https://app.trustbancgroup.com/accounts/login/"
                  target="_blank"
                  className="tw-text-white"
                >
                  Website
                </a>
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="tw-pl-5">
        <Col className="col-sm-7 tw-flex tw-flex-col tw-gap-6 tw-text-sm sm:tw-text-md lg:tw-text-base">
          <div className="tw-flex tw-items-center gap-1">
            <div className="tw-w-7">
              <img src={Icons.growth} alt="growth" />
            </div>
            <p>Earn 10% p/a on your savings account with no restrictions.</p>
          </div>

          <div className="tw-flex tw-items-center gap-1">
            <div className="tw-w-7">
              <img src={Icons.exchange} alt="exchange" />
            </div>
            <p>Receive and transfer funds seamlessly.</p>
          </div>

          <div className="tw-flex tw-items-center gap-1">
            <div className="tw-w-7">
              <img src={Icons.todo} alt="todo" />
            </div>
            <p>Zero managements fees.</p>
          </div>

          <div className="tw-flex tw-items-center gap-1">
            <div className="tw-w-7">
              <img src={Icons.hand} alt="hand with smartphone" />
            </div>
            <p>Bank with EASE!</p>
          </div>
        </Col>
        <Col className="tw-hidden sm:tw-block">
          <img src={Images["prime-app-screen"]} alt="prime app screen" />
        </Col>
      </Row>

      <div className="tw-mt-5">
        <img src={Images.download} alt="download prime app" />
      </div>
    </main>
  );
};
