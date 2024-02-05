import { Col, Row } from "react-bootstrap";
import Images from "../../../assets/Images";
import "./onboarding.scss";

// const slides = [Images["step1-1"], Images["step1-2"], Images.step2, Images.step3, Images.step4]

export const Onboarding = () => {
  return (
    <>
      <h2 className="tw-text-blue tw-font-semibold tw-text-center sm:tw-text-lg lg:tw-text-3xl mb-5 mt-5">
        Get onboarded on<span className="prime"> Prime </span>in minutes.
      </h2>
      <div className="container mb-5">
        <Row>
          <Col className="col-4 tw-hidden sm:tw-block">
            <img src={Images.onboarding} alt="onboarding" />
          </Col>
          <Col className="tw-flex tw-flex-col gap-2">
            <Row className="tw-items-center">
              <Col className="col-2">
                <img src={Images.step1} alt="step 1" />
              </Col>
              <Col className="tw-font-medium">
                <span className="tw-text-blue tw-font-semibold md:tw-text-xl">
                  Step 01
                </span>{" "}
                Download from PlayStore or App Store
              </Col>
            </Row>
            <Row className="tw-items-center">
              <Col className="col-2">
                <img src={Images.step2} alt="step 2" />
              </Col>
              <Col className="tw-font-medium">
                <span className="tw-text-blue tw-font-semibold md:tw-text-xl">
                  Step 02
                </span>{" "}
                Click “Create an Account” if you are onboarding as a new user.
              </Col>
            </Row>
            <Row className="tw-items-center">
              <Col className="col-2">
                <img src={Images.step3} alt="step 3" />
              </Col>
              <Col className="tw-font-medium">
                <span className="tw-text-blue tw-font-semibold md:tw-text-xl">
                  Step 03
                </span>{" "}
                Register your account with your correct BVN details.
              </Col>
            </Row>
            <Row className="tw-items-center">
              <Col className="col-2">
                <img src={Images.step4} alt="step 4" />
              </Col>
              <Col className="tw-font-medium">
                <span className="tw-text-blue tw-font-semibold md:tw-text-xl">
                  Step 04
                </span>{" "}
                Congratulations! Now you can save, invest, pay bills and perform
                banking transactions on your app.
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};
