import { Col, Row } from "react-bootstrap"
import Images from "../../../assets/Images"
import { Link } from "react-router-dom"

export const Grow = () => {
    return (
        <section
            style={{ background: 'linear-gradient(270deg, #043E7F 39.64%, #075CC7 81.18%)' }}
            className="tw-flex tw-gap-5"
        >
            <Row className="tw-items-center">
                <Col className='md:col-7 p-0 p-2 lg:p-0'>
                    <img src={Images.growth} alt='swift loan' className='tw-w-full' />
                </Col>
                <Col className='tw-text-right md:col-5 tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5 p-0'>
                    <h3 className='tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl'>Break limits with our Enterprise Loan</h3>
                    <p className='tw-text-xs sm:tw-text-sm md:tw-text-md'>This is a product designed for micro and small business entrepreneurs with existing businesses requiring increase in working capital.</p>
                    <Link to='enterprise-loan' className='tw-flex tw-gap-1 tw-items-center tw-justify-end tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-blue tw-font-semibold'>Learn More <img src={Images.forwardBtn} alt='know more' /></Link>
                </Col>
            </Row>
        </section>
    )
}
