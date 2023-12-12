import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import QuickLoans from "./components/Landing/HeroSliderDetails/QuickLoans/QuickLoans";
import { FixedDeposits } from "./components/Landing/HeroSliderDetails/FixedDeposits";
import { Prime } from "./components/Landing/HeroSliderDetails/Prime";
import { Savings } from "./components/Landing/HeroSliderDetails/Savings";
import { CorporateCurrent } from "./components/Landing/HeroSliderDetails/CorporateCurrent";
import { EnterpriseLoan } from "./components/Landing/HeroSliderDetails/EnterpriseLoan";
import LandingLayout from "./pages/Landing/LandingLayout";
import { About } from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import LoanCalculator from "./pages/LoanCalculator/LoanCalculator";
import ApplyForm from "./components/Landing/HeroSliderDetails/QuickLoans/ApplyForm";
import ThankYou from "./pages/ThankYou/ThankYou";

const router = createBrowserRouter([
  {
    element: <LandingLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "quick-loans",
        element: <QuickLoans />,
      },
      {
        path: "primeApp",
        element: <Prime />,
      },
      {
        path: "fixed-deposits",
        element: <FixedDeposits />,
      },
      {
        path: "savings",
        element: <Savings />,
      },
      {
        path: "corporate-current",
        element: <CorporateCurrent />,
      },
      {
        path: "enterprise-loan",
        element: <EnterpriseLoan />,
      },
      {
        path: "loan-calculator",
        element: <LoanCalculator />,
      },
      {
        path: "apply",
        element: <ApplyForm />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "about/:tab",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "thanks",
        element: <ThankYou />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
