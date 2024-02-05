import { Col, Row } from "react-bootstrap";
import Images from "../../../assets/Images";
import { Link } from "react-router-dom";

export const Grow = () => {
  return (
    <section
      style={{
        background: "linear-gradient(270deg, #043E7F 39.64%, #075CC7 81.18%)",
      }}
      className="tw-pt-10 tw-pb-8"
    >
      <Row className="gap-5 m-0 tw-px-6 md:tw-px-24">
        <Col className="col-12 tw-hidden lg:tw-block col-lg-3">
          <img src={Images.growth} alt="swift loan" className="tw-w-full" />
        </Col>
        <Col className="tw-relative col-12 col-lg-8 p-0 tw-text-white tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5">
          <div className="tw-bg-white tw-w-3/4 tw-h-0.5 tw-absolute tw-left-16">
            {" "}
            <div
              style={{
                background:
                  "linear-gradient(270deg, #D07F31 34.86%, #83460F 78.13%)",
              }}
              className="tw-bg-white tw-w-3/4 tw-h-0.5 tw-absolute tw-top-5 tw-right-48"
            ></div>
            <p className="tw-text-right tw-text-white tw-pt-2 tw-pr-5 tw-font-medium tw-text-xs md:tw-text-sm">
              WHAT WE STAND FOR
            </p>
          </div>

          <h3 className="tw-font-semibold tw-text-md sm:tw-text-2xl md:tw-text-4xl mt-5">
            Helping small businesses like yours
          </h3>
          <p className="tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-white">
            To reduce global poverty to the lowest possible
            <br /> minimum through financial empowerment.
          </p>
          <p className="tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-white">
            To become extremely relevant in the
            <br /> global financial services community.
          </p>
          <div className="tw-flex tw-flex-wrap tw-justify-center sm:tw-justify-start tw-gap-10">
            <div className="tw-flex tw-flex-col tw-items-center tw-gap-2">
              <p className="tw-bg-white tw-text-blue tw-text-center tw-rounded-full tw-h-20 tw-w-20 tw-flex tw-justify-center tw-items-center tw-font-semibold">
                90%
              </p>
              <p className="tw-font-medium tw-text-xs md:tw-text-sm tw-text-white">
                TURN AROUND
              </p>
            </div>
            <div className="tw-flex tw-flex-col tw-items-center tw-gap-2">
              <p className="tw-bg-white tw-text-blue tw-text-center tw-rounded-full tw-h-20 tw-w-20 tw-flex tw-justify-center tw-items-center tw-font-semibold">
                92%
              </p>
              <p className="tw-font-medium tw-text-xs md:tw-text-sm tw-text-white">
                CUSTOMER SERVICE
              </p>
            </div>
            <div className="tw-flex tw-flex-col tw-items-center tw-gap-2">
              <p className="tw-bg-white tw-text-blue tw-text-center tw-rounded-full tw-h-20 tw-w-20 tw-flex tw-justify-center tw-items-center tw-font-semibold">
                98%
              </p>
              <p className="tw-font-medium tw-text-xs md:tw-text-sm tw-text-white">
                HONESTY
              </p>
            </div>
          </div>
          <div className="tw-flex tw-justify-end mt-3">
            <Link
              to="enterprise-loan"
              className="tw-flex tw-gap-1 tw-items-center !tw-w-fit px-3 p-2 !tw-rounded-lg tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-blue tw-bg-white tw-font-semibold"
            >
              Learn More <img src={Images.forwardBtnBlue} alt="know more" />
            </Link>
          </div>
        </Col>
      </Row>
    </section>
  );
};
