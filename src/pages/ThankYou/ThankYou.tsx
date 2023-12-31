import { Link } from "react-router-dom";
import "./thankYou.scss";

const ThankYou = () => {
  return (
    <div className="container tw-mt-32">
      <div className="col">
        <div className="col-md-8 offset-md-2">
          <h1>Thanks!</h1>
          <p>
            The form was submitted successfully.
            {/* Return to the homepage:{" "} */}
            {/* <Link className="links" to="/">
              TrustBanc MicroFinance
            </Link> */}
            <Link className="links" to="" onClick={() => history.back()}>
              Go back
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
