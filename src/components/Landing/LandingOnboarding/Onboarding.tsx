import { Carousel, Col, Row } from "react-bootstrap"
import Images from "../../../assets/Images"
import './onboarding.scss'

const slides = [Images["step1-1"], Images["step1-2"], Images.step2, Images.step3, Images.step4]

export const Onboarding = () => {
    return (
        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-mt-14 tw-overflow-hidden">
            <h2 className="tw-text-blue tw-font-semibold tw-text-center sm:tw-text-2xl lg:tw-text-5xl">Get onboarded on<span className="prime"> Prime </span>in minutes.</h2>
            <Carousel
                controls={false}
                fade
                data-bs-theme="dark"
                className="m-0 p-0"
            >
                {slides.map((slide, index) =>
                    <Carousel.Item key={index}>
                        <Row className="tw-w-screen tw-p-6 md:tw-py-10 md:tw-px-24 m-0">
                            <Col className="p-0 m-0">
                                <img src={slide} className="tw-w-full" alt={slide.split('/')[2]} />
                            </Col>
                        </Row>
                    </Carousel.Item>
                )}
            </Carousel >
        </div>
    )
}
