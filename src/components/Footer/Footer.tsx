
export const Footer = () => {
    return (
        <footer
            className="tw-flex tw-justify-center md:tw-justify-between tw-items-center tw-gap-2 tw-flex-wrap tw-py-2 tw-px-5 md:tw-py-3 md:tw-px-24 tw-text-white tw-text-xs md:tw-text-sm"
            style={{ backgroundImage: 'linear-gradient(270deg, #043E7F 39.64%, #075CC7 81.18%)' }}
        >
            <div>Copyright © {new Date().getFullYear()} - TrustBanc Microfinance Bank</div>
            <div >
                <ul className="tw-flex tw-m-auto tw-items-center tw-gap-2 p-0">
                    <li><a href="quick-loans" className="tw-text-white">Quick Loan</a></li>{"|"}
                    <li><a href="primeApp" className="tw-text-white">Prime by TrustBanc</a> </li>{"|"}
                    <li><a href="fixed-deposits" className="tw-text-white">Fixed Deposit</a></li>
                </ul>
            </div>
        </footer>
    )
}
