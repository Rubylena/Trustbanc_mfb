import { Fragment, useState } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Images from "../../assets/Images"

const features = [
    { name: 'Quick Loans', href: '/quick-loans' },
    { name: 'Fixed Deposit', href: '/fixed-deposits' },
    { name: 'Enterprise Loan', href: '/enterprise-loan' },
    { name: 'Corporate Current', href: '/corporate-current' },
    { name: 'Hybrid Savings', href: '/hybrid-savings' },
    { name: 'Prime by TrustBanc', href: '/primeApp' },
    { name: 'Loan Calculator', href: '/loan-calculator' },
]

const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Board', href: '/about/our-board' },
    { name: 'Our Team', href: '/about/our-team' },
    { name: 'Vision & Mission', href: '/about/vision&mission' },
]

const help = [
    { name: 'Contact Us', href: '/contact' }
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="tw-bg-white tw-bg-opacity-80 tw-z-10 tw-shadow md:tw-px-14 tw-fixed tw-w-full">
            <nav className="tw-flex tw-items-center tw-justify-between tw-p-3 lg:tw-px-8 lg:tw-py-4" aria-label="Global">
                <div className="tw-flex lg:tw-flex-1">
                    <a href="/" className="-tw-m-1.5 tw-p-1.5">
                        <span className="tw-sr-only">TrustBanc MFB</span>
                        <img className="tw-h-8 tw-w-auto" src={Images.logo} alt="logo" />
                    </a>
                </div>
                <div className="tw-flex lg:tw-hidden">
                    <button
                        type="button"
                        className="-tw-m-2.5 tw-inline-flex tw-items-center tw-justify-center tw-rounded-md tw-p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="tw-sr-only">Open main menu</span>
                        <Bars3Icon className="tw-h-6 tw-w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="tw-hidden lg:tw-flex tw-items-center lg:tw-gap-x-12">
                    <Popover className="tw-relative">
                        <Popover.Button className="tw-flex tw-items-center tw-gap-x-1 tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900 tw-border-0 tw-ring-0 focus:tw-outline-0">
                            Features
                            <ChevronDownIcon className="tw-h-5 tw-w-5 tw-flex-none tw-text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="tw-transition tw-ease-out tw-duration-300"
                            enterFrom="tw-opacity-0 -tw-translate-y-full"
                            enterTo="tw-opacity-100 tw-translate-y-0"
                            leave="tw-transition tw-ease-in tw-duration-300"
                            leaveFrom="tw-opacity-100 tw-translate-y-0"
                            leaveTo="tw-opacity-0 -tw-translate-y-full"
                        >
                            <Popover.Panel className="tw-absolute -tw-left-8 tw-top-full tw-z-10 tw-mt-3 tw-w-40 tw-overflow-hidden tw-rounded-xl tw-bg-white tw-shadow-lg tw-drop-shadow">
                                <div className="tw-p-1">
                                    {features.map((item) => (
                                        <div
                                            key={item.name}
                                            className="tw-group tw-relative tw-rounded-lg tw-p-1.5 tw-text-sm tw-leading-6 hover:tw-bg-gray-50"
                                        >
                                            <div className="tw-flex-auto">
                                                <a href={item.href} className="tw-block tw-font-medium tw-text-gray-900">
                                                    {item.name}
                                                    <span className="tw-absolute tw-inset-0" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Popover className="tw-relative">
                        <Popover.Button className="tw-flex tw-items-center tw-gap-x-1 tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900 tw-border-0 tw-ring-0 focus:tw-outline-0">
                            Company
                            <ChevronDownIcon className="tw-h-5 tw-w-5 tw-flex-none tw-text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="tw-transition tw-ease-out tw-duration-300"
                            enterFrom="tw-opacity-0 -tw-translate-y-full"
                            enterTo="tw-opacity-100 tw-translate-y-0"
                            leave="tw-transition tw-ease-in tw-duration-300"
                            leaveFrom="tw-opacity-100 tw-translate-y-0"
                            leaveTo="tw-opacity-0 -tw-translate-y-full"
                        >
                            <Popover.Panel className="tw-absolute -tw-left-8 tw-top-full tw-z-10 tw-mt-3 tw-w-40 tw-overflow-hidden tw-rounded-xl tw-bg-white tw-shadow-lg tw-drop-shadow">
                                <div className="tw-p-1">
                                    {company.map((item) => (
                                        <div
                                            key={item.name}
                                            className="tw-group tw-relative tw-rounded-lg tw-p-1.5 tw-text-sm tw-leading-6 hover:tw-bg-gray-50"
                                        >
                                            <div className="tw-flex-auto">
                                                <a href={item.href} className="tw-block tw-font-medium tw-text-gray-900">
                                                    {item.name}
                                                    <span className="tw-absolute tw-inset-0" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <Popover className="tw-relative">
                        <Popover.Button className="tw-flex tw-items-center tw-gap-x-1 tw-text-sm tw-font-medium tw-leading-6 tw-text-gray-900 tw-border-0 tw-ring-0 focus:tw-outline-0">
                            Help
                            <ChevronDownIcon className="tw-h-5 tw-w-5 tw-flex-none tw-text-gray-400" aria-hidden="true" />
                        </Popover.Button>

                        <Transition
                            as={Fragment}
                            enter="tw-transition tw-ease-out tw-duration-300"
                            enterFrom="tw-opacity-0 -tw-translate-y-full"
                            enterTo="tw-opacity-100 tw-translate-y-0"
                            leave="tw-transition tw-ease-in tw-duration-300"
                            leaveFrom="tw-opacity-100 tw-translate-y-0"
                            leaveTo="tw-opacity-0 -tw-translate-y-full"
                        >
                            <Popover.Panel className="tw-absolute -tw-left-8 tw-top-full tw-z-10 tw-mt-3 tw-w-28 tw-overflow-hidden tw-rounded-xl tw-bg-white tw-shadow-lg tw-drop-shadow">
                                <div className="tw-p-1">
                                    {help.map((item) => (
                                        <div
                                            key={item.name}
                                            className="tw-group tw-relative tw-rounded-lg tw-p-1.5 tw-text-sm tw-leading-6 hover:tw-bg-gray-50"
                                        >
                                            <div className="tw-flex-auto">
                                                <a href={item.href} className="tw-block tw-font-medium tw-text-gray-900">
                                                    {item.name}
                                                    <span className="tw-absolute tw-inset-0" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <div className='tw-bg-blue tw-text-center py-2 tw-rounded-lg'>
                        <a href="https://app.trustbancgroup.com/accounts/login/" className="tw-text-sm tw-font-medium px-3 py-2 tw-text-white">
                            Internet Banking
                        </a>
                    </div>
                </Popover.Group>
            </nav>
            <Dialog as="div" className="lg:tw-tw-hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="tw-fixed tw-inset-0 tw-z-10" />
                <Dialog.Panel className="tw-fixed tw-inset-y-0 tw-right-0 tw-z-10 tw-w-full tw-overflow-y-auto tw-bg-white tw-px-6 tw-py-6 sm:tw-max-w-sm ">
                    <div className="tw-flex tw-items-center tw-justify-between">
                        <a href="/" className="-tw-m-1.5 tw-p-1.5">
                            <span className="tw-sr-only">TrustBanc MFB</span>
                            <img
                                className="tw-h-8 tw-w-auto"
                                src={Images.logo}
                                alt=""
                            />
                        </a>
                        <button
                            type="button"
                            className="-tw-m-2.5 tw-rounded-md tw-p-2.5 tw-text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="tw-sr-only">Close menu</span>
                            <XMarkIcon className="tw-h-6 tw-w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="tw-mt-6 tw-flow-root">
                        <div className="-tw-my-6 tw-divide-y tw-divide-gray-500/10">
                            <div className="tw-space-y-2 tw-py-6">
                                <Disclosure as="div" className="-tw-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="tw-flex tw-w-full tw-items-center tw-justify-between tw-rounded-lg tw-py-2 tw-pl-3 tw-pr-3.5 tw-text-base tw-font-medium tw-leading-7 tw-text-gray-900 hover:tw-bg-gray-50">
                                                Features
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'tw-rotate-180' : '', 'tw-h-5 tw-w-5 tw-flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="tw-mt-2 tw-space-y-2">
                                                {[...features].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="tw-block tw-rounded-lg tw-py-2 tw-pl-6 tw-pr-3 tw-text-sm tw-font-medium tw-leading-7 tw-text-gray-900 hover:tw-bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                <Disclosure as="div" className="-tw-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="tw-flex tw-w-full tw-items-center tw-justify-between tw-rounded-lg tw-py-2 tw-pl-3 tw-pr-3.5 tw-text-base tw-font-medium tw-leading-7 tw-text-gray-900 hover:tw-bg-gray-50">
                                                Company
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'tw-rotate-180' : '', 'tw-h-5 tw-w-5 tw-flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="tw-mt-2 tw-space-y-2">
                                                {[...company].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="tw-block tw-rounded-lg tw-py-2 tw-pl-6 tw-pr-3 tw-text-sm tw-font-medium tw-leading-7 tw-text-gray-900 hover:tw-bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                <Disclosure as="div" className="-tw-mx-3">
                                    {({ open }) => (
                                        <>
                                            <Disclosure.Button className="tw-flex tw-w-full tw-items-center tw-justify-between tw-rounded-lg tw-py-2 tw-pl-3 tw-pr-3.5 tw-text-base tw-font-medium tw-leading-7 tw-text-gray-900 hover:tw-bg-gray-50">
                                                Help
                                                <ChevronDownIcon
                                                    className={classNames(open ? 'tw-rotate-180' : '', 'tw-h-5 tw-w-5 tw-flex-none')}
                                                    aria-hidden="true"
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="tw-mt-2 tw-space-y-2">
                                                {[...help].map((item) => (
                                                    <Disclosure.Button
                                                        key={item.name}
                                                        as="a"
                                                        href={item.href}
                                                        className="tw-block tw-rounded-lg tw-py-2 tw-pl-6 tw-pr-3 tw-text-sm tw-font-medium tw-leading-7 tw-text-gray-900 hover:tw-bg-gray-50"
                                                    >
                                                        {item.name}
                                                    </Disclosure.Button>
                                                ))}
                                            </Disclosure.Panel>
                                        </>
                                    )}
                                </Disclosure>

                                <div className='tw-bg-blue tw-text-center py-2 tw-rounded-lg'>
                                    <a href="https://app.trustbancgroup.com/accounts/login/" className="tw-text-sm tw-font-medium px-3 py-2 tw-text-white">
                                        Internet Banking
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
