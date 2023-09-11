import { Footer } from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'

const LandingLayout = () => {
  return (
    <div className='tw-flex tw-flex-col tw-justify-between tw-min-h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default LandingLayout