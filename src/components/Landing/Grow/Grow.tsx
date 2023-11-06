import { Col, Row } from "react-bootstrap"
import Images from "../../../assets/Images"
import { Link } from "react-router-dom"

export const Grow = () => {
    return (
        <section
            style={{ background: 'linear-gradient(270deg, #043E7F 39.64%, #075CC7 81.18%)' }}
            className="tw-pt-24 tw-pb-10"
        >
            <Row className="tw-items-center m-0 tw-px-6 md:tw-px-24">
                <Col className='col-12 col-md-5'>
                    <img src={Images.growth} alt='swift loan' className='tw-w-full' />
                </Col>
                <Col className='tw-relative col-12 col-md-7 tw-border-t-2 p-0 tw-text-white tw-text-right tw-flex tw-flex-col tw-items-end tw-gap-2 sm:tw-gap-5'>
                    <div
                        style={{ background: "linear-gradient(270deg, #D07F31 34.86%, #83460F 78.13%)" }}
                        className="tw-bg-white tw-w-3/4 tw-h-0.5 tw-absolute tw-top-2 tw-right-44"></div>

                    <h4 className="tw-pt-5 tw-font-medium tw-text-xs md:tw-text-sm">WHAT WE STAND FOR</h4>
                    <h3 className='tw-font-semibold tw-text-md sm:tw-text-2xl md:tw-text-4xl'>Helping small businesses like yours</h3>
                    <p className='tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-white'>To reduce global poverty to the lowest possible minimum through financial empowerment.<br /> To become extremely relevant in the global financial services community.
                    </p>
                    <div className="tw-flex tw-flex-wrap tw-justify-center tw-gap-10 ">
                        <div className="tw-flex tw-flex-col tw-items-center tw-gap-2">
                            <p className="tw-bg-white tw-text-blue tw-text-center tw-rounded-full tw-h-10 tw-w-10 tw-flex tw-justify-center tw-items-center tw-font-semibold">90%</p>
                            <p className="tw-font-medium tw-text-xs md:tw-text-sm tw-text-white">TURN AROUND</p>
                        </div>
                        <div className="tw-flex tw-flex-col tw-items-center tw-gap-2">
                            <p className="tw-bg-white tw-text-blue tw-text-center tw-rounded-full tw-h-10 tw-w-10 tw-flex tw-justify-center tw-items-center tw-font-semibold">92%</p>
                            <p className="tw-font-medium tw-text-xs md:tw-text-sm tw-text-white">CUSTOMER SERVICE</p>
                        </div>
                        <div className="tw-flex tw-flex-col tw-items-center tw-gap-2">
                            <p className="tw-bg-white tw-text-blue tw-text-center tw-rounded-full tw-h-10 tw-w-10 tw-flex tw-justify-center tw-items-center tw-font-semibold">98%</p>
                            <p className="tw-font-medium tw-text-xs md:tw-text-sm tw-text-white">HONESTY</p>
                        </div>
                    </div>
                    <Link to='enterprise-loan' className='tw-text-xs sm:tw-text-sm md:tw-text-md tw-bg-white tw-w-fit tw-rounded p-1 tw-drop-shadow-sm tw-shadow tw-text-blue tw-font-semibold'>Read More</Link>
                </Col>
            </Row>
        </section>
    )
}
