import { Link } from 'react-router-dom';
import Images, { Icons } from '../../../assets/Images';
import { Carousel, Row, Col } from 'react-bootstrap';

const HeroSlider = () => {
    return (
        <Carousel
            controls={false}
            interval={3000}
            data-bs-theme="dark"
            className='tw-mt-16 md:tw-mt-28'
        >
            <Carousel.Item className='tw-mt-5 md:tw-mt-24 lg:tw-mt-12 tw-px-6 md:tw-px-24 tw-h-[13rem] sm:tw-h-auto'>
                <Row className="tw-items-center">
                    <Col className='col-md-7 3xl:tw-w-5/12 p-0 md:tw-h-[30rem] lg:tw-h-[40rem]'>
                        <img src={Images['swift-loan']} alt='swift loan' className='tw-w-full h-full tw-object-contain' />
                    </Col>
                    <Col className='tw-text-right col-md-5 tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5 p-0 sm:p-2'>
                        <h3 className='tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl'>N100,000 - N5M swift loan within 24hrs</h3>
                        <p className='tw-text-xs sm:tw-text-sm md:tw-text-md'>We render swift and convenient 3% interest rate loans to our clients at their comfort zones.</p>
                        <Link to='quick-loans' className='tw-flex tw-gap-1 tw-items-center tw-justify-end tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-blue tw-font-semibold'>Learn More <img src={Images.forwardBtn} alt='know more' /></Link>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item className='tw-mt-5 md:tw-mt-24 tw-px-6 md:tw-px-24 tw-h-[13rem] sm:tw-h-auto'>
                <Row className="tw-items-center">
                    <Col className='col-md-7 3xl:tw-w-5/12 p-0 md:tw-h-[30rem] lg:tw-h-[37rem]'>
                        <img src={Images.prime} alt='prime app' className='tw-w-full tw-h-full tw-object-contain' />
                    </Col>
                    <Col className='tw-text-right col-8 col-md-5 tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5 p-0'>
                        <h3 className='tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl'>Digital banking services that suits you and your lifestyle</h3>
                        <p className='tw-text-xs sm:tw-text-sm md:tw-text-md tw-hidden sm:tw-block'>Enjoy the beauty of digital banking with Prime by TrustBanc. Save, invest, pay bills and do more from your comfort zone.</p>
                        <p className='tw-text-xs sm:tw-text-sm md:tw-text-md tw-block sm:tw-hidden'>Save, invest, pay bills and do more from your comfort zone.</p>
                        <div className='tw-flex tw-gap-2 flex-wrap tw-flex-row tw-justify-end tw-text-left tw-cursor-pointer'>
                            <a href='https://apps.apple.com/gb/app/prime-by-trustbanc/id1552300596' target='_blank'>
                                <div className='tw-bg-black text-white tw-flex tw-gap-1 tw-items-center tw-rounded-lg tw-py-1 tw-px-2'>
                                    <div>
                                        <img src={Icons.apple} alt='apple' />
                                    </div>
                                    <div className='tw-hidden sm:tw-block'>
                                        <p className='tw-text-[0.5rem] md:tw-text-xs tw-text-white'>Download on the</p>
                                        <p className='tw-text-xs sm:tw-text-sm md:tw-font-semibold tw-text-white'>App Store</p>
                                    </div>
                                </div>
                            </a>

                            <a href='https://play.google.com/store/apps/details?id=com.cwg.trustbanc&pli=1' target='_blank'>
                                <div className='tw-bg-black tw-flex tw-items-center tw-gap-1 tw-py-1 tw-px-2 tw-rounded-lg'>
                                    <div>
                                        <img src={Icons.play} alt='play store' />
                                    </div>
                                    <div className='tw-hidden sm:tw-block'>
                                        <p className='tw-text-[0.5rem] md:tw-text-xs tw-text-white'>Get it on</p>
                                        <p className='tw-text-xs sm:tw-text-sm md:tw-font-semibold tw-text-white'>Google Play</p>
                                    </div>
                                </div>
                            </a>

                            <div className='tw-bg-blue tw-flex tw-items-center tw-gap-1 tw-py-1 tw-px-2 tw-rounded-lg'>
                                <img src={Icons.globe} alt='website' />
                                <p className='tw-text-xs md:tw-text-sm tw-font-semibold tw-hidden sm:tw-block'><a href='https://app.trustbancgroup.com/accounts/login/' target='_blank' className='tw-text-white' >Website</a></p>
                            </div>
                        </div>
                        <Link to='primeApp' className='tw-flex tw-gap-1 tw-items-center tw-justify-end tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-blue tw-font-semibold'>Learn More <img src={Images.forwardBtn} alt='know more' /></Link>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item className='tw-mt-5 md:tw-mt-24 tw-px-6 md:tw-px-24 tw-h-[13rem] sm:tw-h-auto'>
                <Row className="tw-items-center">
                    <Col className='col-md-7 3xl:tw-w-5/12 p-0 md:tw-h-[30rem] lg:tw-h-[37rem]'>
                        <img src={Images.fixed} alt='swift loan' className='tw-w-full tw-h-full' />
                    </Col>
                    <Col className='tw-text-right col-md-5 tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5 p-0'>
                        <h3 className='tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl'>Automate your savings and earn more</h3>
                        <p className='tw-text-xs sm:tw-text-sm md:tw-text-md'>Invest your Naira in either Fixed or Call Deposits just for you and your lifestyle.</p>
                        <Link to='fixed-deposits' className='tw-flex tw-gap-1 tw-items-center tw-justify-end tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-blue tw-font-semibold'>Learn More <img src={Images.forwardBtn} alt='know more' /></Link>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item className='tw-mt-5 md:tw-mt-24 tw-px-6 md:tw-px-24 tw-h-[13rem] sm:tw-h-auto'>
                <Row className="tw-items-center">
                    <Col className='col-md-7 3xl:tw-w-5/12 p-0 md:tw-h-[30rem] lg:tw-h-[37rem]'>
                        <img src={Images.savings} alt='swift loan' className='tw-w-full tw-h-full' />
                    </Col>
                    <Col className='tw-text-right col-md-5 tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5 p-0'>
                        <h3 className='tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl'>Be smart with your savings</h3>
                        <p className='tw-text-xs sm:tw-text-sm md:tw-text-md'>Open a savings account with us today.</p>
                        <Link to='savings' className='tw-flex tw-gap-1 tw-items-center tw-justify-end tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-blue tw-font-semibold'>Learn More <img src={Images.forwardBtn} alt='know more' /></Link>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item className='tw-mt-5 md:tw-mt-24 tw-px-6 md:tw-px-24 tw-h-[13rem] sm:tw-h-auto'>
                <Row className="tw-items-center">
                    <Col className='col-md-7 3xl:tw-w-5/12 p-0 md:tw-h-[30rem] lg:tw-h-[37rem]'>
                        <img src={Images['corporate-current']} alt='swift loan' className='tw-w-full tw-h-full ' />
                    </Col>
                    <Col className='tw-text-right col-md-5 tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5 p-0'>
                        <h3 className='tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl'>An account with class that means business</h3>
                        <p className='tw-text-xs sm:tw-text-sm md:tw-text-md'>Open a TrustBanc MfB current account with full KYC (Know Your Customer) requirements and gain access to the world of convenience.</p>
                        <Link to='corporate-current' className='tw-flex tw-gap-1 tw-items-center tw-justify-end tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-blue tw-font-semibold'>Learn More <img src={Images.forwardBtn} alt='know more' /></Link>
                    </Col>
                </Row>
            </Carousel.Item>
            <Carousel.Item className='tw-mt-5 md:tw-mt-24 tw-px-6 md:tw-px-24 tw-h-[13rem] sm:tw-h-auto'>
                <Row className="tw-items-center">
                    <Col className='col-md-7 3xl:tw-w-5/12 p-0 md:tw-h-[30rem] lg:tw-h-[37rem] p-2 lg:p-0'>
                        <img src={Images['enterprise-loan']} alt='swift loan' className='tw-w-full tw-h-full' />
                    </Col>
                    <Col className='tw-text-right col-md-5 tw-flex tw-flex-col tw-gap-2 sm:tw-gap-5 p-0'>
                        <h3 className='tw-text-blue tw-font-semibold tw-text-sm sm:tw-text-3xl md:tw-text-5xl'>Break limits with our Enterprise Loan</h3>
                        <p className='tw-text-xs sm:tw-text-sm md:tw-text-md'>This is a product designed for micro and small business entrepreneurs with existing businesses requiring increase in working capital.</p>
                        <Link to='enterprise-loan' className='tw-flex tw-gap-1 tw-items-center tw-justify-end tw-text-xs sm:tw-text-sm md:tw-text-md tw-text-blue tw-font-semibold'>Learn More <img src={Images.forwardBtn} alt='know more' /></Link>
                    </Col>
                </Row>
            </Carousel.Item>
        </Carousel >
    )
}

export default HeroSlider