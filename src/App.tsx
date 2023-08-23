import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import QuickLoans from './components/HeroSliderDetails/QuickLoans'
import { FixedDeposits } from './components/HeroSliderDetails/FixedDeposits'
import { Prime } from './components/HeroSliderDetails/Prime'
import { HybridSavings } from './components/HeroSliderDetails/HybridSavings'
import { CorporateCurrent } from './components/HeroSliderDetails/CorporateCurrent'
import { EnterpriseLoan } from './components/HeroSliderDetails/EnterpriseLoan'
import LandingLayout from './pages/Landing/LandingLayout'
import LoanCalculator from './pages/LoanCalculator/LoanCalculator'
import { About } from './pages/About/About'
import Contact from './pages/Contact/Contact'

const router = createBrowserRouter([
  {
    element: <LandingLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: 'quick-loans',
        element: <QuickLoans />,
      },
      {
        path: 'primeApp',
        element: <Prime />
      },
      {
        path: 'fixed-deposits',
        element: <FixedDeposits />
      },
      {
        path: 'hybrid-savings',
        element: <HybridSavings />
      },
      {
        path: 'corporate-current',
        element: <CorporateCurrent />
      },
      {
        path: 'enterprise-loan',
        element: <EnterpriseLoan />
      },
      {
        path: 'loan-calculator',
        element: <LoanCalculator />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  },
])
function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
