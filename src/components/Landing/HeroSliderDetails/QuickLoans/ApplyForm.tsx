import { Link } from "react-router-dom";
import "./quickLoans.scss";

export default function ApplyForm() {
  return (
    <>
      <Link to="/quick-loans" className="tw-mt-24">
        <p className="tw-underline tw-text-blue tw-p-2 tw-pl-5 tw-font-medium">
          {" "}
          &lArr; Quick loans
        </p>
      </Link>
      <div className="tw-flex tw-mb-24 tw-ml-6 md:tw-ml-14 tw-h-full ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="col-12 col-md-8 tw-bg-blue tw-rounded-lg tw-text-white tw-p-10 "
        >
          <div className="tw-space-y-12">
            <div>
              <h2>KYC details</h2>

              <div className="tw-grid tw-grid-cols-1 tw-gap-x-8 tw-gap-y-10 tw-border-be tw-border-gray-900/10 tw-pb-12 md:tw-grid-cols-3">
                <div>
                  <label
                    htmlFor="first-name"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    First name
                  </label>
                  <div className="tw-mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      placeholder="First name"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="middle-name"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Middle name
                  </label>
                  <div className="tw-mt-2">
                    <input
                      type="text"
                      name="middle-name"
                      id="middle-name"
                      autoComplete="family-name"
                      placeholder="Middle name"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="last-name"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Last name
                  </label>
                  <div className="tw-mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      placeholder="Last name"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="Email"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mobile-number"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Mobile Number
                  </label>
                  <div className="tw-mt-2">
                    <input
                      id="mobile-number"
                      name="mobile-number"
                      type="tel"
                      autoComplete="mobile-number"
                      placeholder="Mobile Number"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="address"
                      name="address"
                      type="text"
                      autoComplete="address"
                      placeholder="Address"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="bvn"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Bank verification Number (BVN)
                  </label>
                  <div className="mt-2">
                    <input
                      id="bvn"
                      name="bvn"
                      type="number"
                      autoComplete="bvn"
                      placeholder="BVN"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="ippis"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    IPPIS/Service Number
                  </label>
                  <div className="mt-2">
                    <input
                      id="ippis"
                      name="ippis"
                      type="number"
                      autoComplete="ippis"
                      placeholder="IPPIS"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2>Loan Form</h2>

              <div className="tw-grid tw-grid-cols-1 tw-gap-x-8 tw-gap-y-10 tw-border-be tw-border-gray-900/10 tw-pb-12 md:tw-grid-cols-3">
                <div>
                  <label
                    htmlFor="amount"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Loan Amount (NGN)
                  </label>
                  <div className="tw-mt-2">
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      autoComplete="given-name"
                      placeholder="Loan Amount"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Duration
                  </label>
                  <div className="tw-mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-max-w-xs sm:tw-text-sm sm:tw-leading-6"
                    >
                      <option value={undefined}>select</option>
                      <option value={3}>3</option>
                      <option value={6}>6</option>
                      <option value={12}>12</option>
                      <option value={24}>24</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="bank-name"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Salary Bank Name
                  </label>
                  <div className="tw-mt-2">
                    <input
                      type="text"
                      name="bank-name"
                      id="bank-name"
                      autoComplete="family-name"
                      placeholder="Bank Name"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="account-number"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Account Number
                  </label>
                  <div className="tw-mt-2">
                    <input
                      type="number"
                      name="account-number"
                      id="account-number"
                      autoComplete="family-name"
                      placeholder="Account Number"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="employer"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Employer
                  </label>
                  <div className="mt-2">
                    <input
                      id="employer"
                      name="employer"
                      type="text"
                      autoComplete="employer"
                      placeholder="Employer"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="employment-date"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Employment Date
                  </label>
                  <div className="tw-mt-2">
                    <input
                      id="employment-date"
                      name="employment-date"
                      type="date"
                      autoComplete="employment-date"
                      placeholder="Employment Date"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="employers-address"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Employers Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="employers-address"
                      name="employers-address"
                      type="text"
                      autoComplete="employers-address"
                      placeholder="Employers Address"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="purpose"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Purpose
                  </label>
                  <div className="tw-mt-2">
                    <select
                      id="purpose"
                      name="purpose"
                      autoComplete="purpose"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-max-w-xs sm:tw-text-sm sm:tw-leading-6"
                    >
                      <option value={undefined}>select</option>
                      <option value={"rent"}>Rent</option>
                      <option value={"School"}>School</option>
                      <option value={"Church stuff"}>Church stuff</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="next-of-kin"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Full name of Next of Kin
                  </label>
                  <div className="mt-2">
                    <input
                      id="next-of-kin"
                      name="next-of-kin"
                      type="text"
                      autoComplete="next-of-kin"
                      placeholder="Full name of Next of Kin"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="relationship"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Relationship with Next of Kin
                  </label>
                  <div className="tw-mt-2">
                    <input
                      id="relationship"
                      name="relationship"
                      type="text"
                      autoComplete="relationship"
                      placeholder="Relationship with Next of Kin"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="next-of-kin-tel"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Next of Kin Telephone
                  </label>
                  <div className="mt-2">
                    <input
                      id="next-of-kin-tel"
                      name="next-of-kin-tel"
                      type="tel"
                      autoComplete="next-of-kin-tel"
                      placeholder="Next of Kin Telephone"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="next-of-kin-email"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Next of Kin Email
                  </label>
                  <div className="mt-2">
                    <input
                      id="next-of-kin-email"
                      name="next-of-kin-email"
                      type="email"
                      autoComplete="next-of-kin-email"
                      placeholder="Next of Kin Email"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>

                <div className="tw-col-span-full">
                  <label
                    htmlFor="next-of-kin-address"
                    className="tw-block tw-text-sm tw-font-medium tw-leading-6"
                  >
                    Next of Kin Address
                  </label>
                  <div className="mt-2">
                    <input
                      id="next-of-kin-address"
                      name="next-of-kin-address"
                      type="text"
                      autoComplete="next-of-kin-address"
                      placeholder="Next of Kin Address"
                      className="tw-block tw-w-full tw-rounded-md tw-border-0 tw-py-1.5 tw-text-gray-900 tw-shadow-sm tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-ring-inset focus:tw-ring-indigo-600 sm:tw-text-sm sm:tw-leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tw-grid tw-grid-cols-3 tw-gap-x-8 tw-gap-y-10 tw-pb-12 md:tw-grid-cols-12">
            <div className="tw-col-span-4">
              <label
                htmlFor="passport"
                className="tw-block tw-text-sm tw-font-medium tw-leading-6"
              >
                Passport Photograph:
              </label>
              <label
                htmlFor="passport"
                className="tw-relative tw-cursor-pointer tw-rounded-md tw-font-semibold tw-text-white "
              >
                <input id="passport" name="passport" type="file" />
              </label>
            </div>

            <div className="tw-col-span-4">
              <label
                htmlFor="staff-id"
                className="tw-block tw-text-sm tw-font-medium tw-leading-6"
              >
                Valid Staff ID:
              </label>
              <label
                htmlFor="staff-id"
                className="tw-relative tw-cursor-pointer tw-rounded-md tw-font-semibold tw-text-white "
              >
                <input id="staff-id" name="staff-id" type="file" />
              </label>
            </div>
          </div>

          <div className="tw-grid tw-grid-cols-3 tw-gap-x-8 tw-gap-y-10 tw-pb-12 md:tw-grid-cols-12">
            <div className="tw-col-span-4">
              <label
                htmlFor="id"
                className="tw-block tw-text-sm tw-font-medium tw-leading-6"
              >
                Valid ID:
              </label>
              <label
                htmlFor="id"
                className="tw-relative tw-cursor-pointer tw-rounded-md tw-font-semibold tw-text-white "
              >
                <input id="id" name="id" type="file" />
              </label>
            </div>

            <div className="tw-col-span-4">
              <label
                htmlFor="sign"
                className="tw-block tw-text-sm tw-font-medium tw-leading-6"
              >
                Signature
              </label>
              <label
                htmlFor="sign"
                className="tw-relative tw-cursor-pointer tw-rounded-md tw-font-semibold tw-text-white "
              >
                <input id="sign" name="sign" type="file" />
              </label>
            </div>
          </div>

          <div className="tw-mt-6 tw-space-y-10 tw-text-justify">
            <div className="tw-relative tw-flex tw-gap-x-2">
              <input
                id="comments"
                name="comments"
                type="checkbox"
                className="tw-h-4 tw-w-4 tw-rounded tw-border-gray-300 tw-text-blue focus:tw-ring-0"
              />
              <label
                htmlFor="comments"
                className="tw-text-xs tw-text-[#FFA044]"
              >
                I hereby consent that the information I supplied above are true.
                I hereby also agree that upon disbursement, the management fee
                and transfer fee should be deducted from the requested loan that
                is to be trasferred to my stated salary account and the
                repayment will be directly deducted from source via applicable
                Direct Debit Platform.
              </label>
            </div>
          </div>

          <div className="tw-mt-6 tw-flex tw-items-center tw-gap-x-6">
            <button
              type="submit"
              className="tw-rounded-md tw-bg-white tw-px-6 tw-py-2 tw-text-sm tw-font-semibold tw-text-blue tw-shadow-sm focus-visible:tw-outline focus-visible:tw-outline-2 focus-visible:tw-outline-offset-2 focus-visible:tw-outline-blue"
            >
              Submit
            </button>
          </div>
        </form>
        <div className="col-md-4 form-bg tw-hidden md:tw-block"></div>
      </div>
    </>
  );
}
