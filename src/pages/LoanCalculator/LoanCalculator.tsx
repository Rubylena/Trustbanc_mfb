import { useState } from "react";
import "./loanCalculator.scss";
import { Link } from "react-router-dom";

const LoanCalculator = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num3, setNum3] = useState<number>(0);
  const [Add, setAdd] = useState<number>(0);
  const [monthlySum, setMonthlySum] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const calcSum = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (num1 === 0 || num3 === 0) {
      setError("Please enter a valid Amount");
    } else {
      const Add = (num1 * num3 * 3) / 100 + num1;
      setAdd(Add);

      const monthlySum = Add / num3;
      setMonthlySum(monthlySum);
    }
  };

  const handleReset = () => {
    setError("");
    setAdd(0);
    setMonthlySum(0);
    setNum1(0);
    setNum3(0);
  };

  return (
    <div>
      <div className="calculator-card pt-5">
        <h1>Loan Calculator</h1>
      </div>
      <Link to="/quick-loans">
        <p className="tw-underline tw-text-blue tw-p-2 tw-pl-5 tw-font-medium tw-w-fit">
          {" "}
          &lArr; Quick loans
        </p>
      </Link>
      <div className="calculator-body mt-5 mb-5 px-3">
        <div className="calculator-body2">
          <div className="calculator-text px-5 pt-4">
            <h1>Loan Calculator</h1>
            <p>Calculate your Loan Amount</p>
          </div>
          <div className="amount-card tw-flex-wrap md:tw-flex-nowrap">
            <div className="amount p-2 md:p-4">
              <h3 className="tw-text-3xl md:tw-text-4xl">
                ₦ {Add.toLocaleString()}
              </h3>
              <p>Total payment</p>
            </div>
            <div className="amount p-2 md:p-4">
              <h3 className="tw-text-3xl md:tw-text-4xl">
                ₦ {monthlySum.toLocaleString()}
              </h3>
              <p>Monthly payment</p>
            </div>
          </div>
          <form className="cal-form" onSubmit={calcSum}>
            <div className="container px-5">
              <div className="form-floating mb-3 mt-3">
                <input
                  type="number"
                  min="0"
                  value={num1 || ""}
                  onChange={(e) => {
                    setNum1(Number(e.target.value));
                    setError("");
                  }}
                  className="form-control"
                  id="floatingInput"
                  placeholder="Amount"
                />
                <label htmlFor="floatingInput">Loan Amount</label>
                {error && num1 == 0 && (
                  <p className="tw-text-red-700 tw-text-left tw-font-medium tw-text-sm tw-pl-2">
                    {error}
                  </p>
                )}
              </div>
              <div className="form-floating" style={{ width: "100%" }}>
                <input
                  type="number"
                  min="0"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Interest Rate by 3%"
                  disabled
                />
                <label htmlFor="floatingPassword" style={{ width: "100%" }}>
                  Interest Rate by 3%
                </label>
              </div>
              <div className="form-floating mt-3" style={{ width: "100%" }}>
                <input
                  type="number"
                  min="0"
                  value={num3 || ""}
                  onChange={(e) => {
                    setNum3(Number(e.target.value));
                    setError("");
                  }}
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Tenor by month"
                />
                <label htmlFor="floatingPassword" style={{ width: "100%" }}>
                  Loan Tenor (by month)
                </label>
                {error && num3 == 0 && (
                  <p className="tw-text-red-700 tw-text-left tw-font-medium tw-text-sm tw-pl-2">
                    {error}
                  </p>
                )}
              </div>

              <div className="tw-flex tw-gap-4 sm:tw-gap-8 tw-flex-wrap md:tw-flex-nowrap mt-5 pt-3">
                <button type="submit" className="cal-btn1">
                  Calculate
                </button>

                <button type="reset" className="cal-btn2" onClick={handleReset}>
                  Reset
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
