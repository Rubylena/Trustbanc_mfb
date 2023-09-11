// import Images from "../../assets/images/Images"
import { Grow } from "../../components/Landing/Grow/Grow"
import HeroSlider from "../../components/Landing/HeroSliderDetails/HeroSlider"
import { Onboarding } from "../../components/Landing/LandingOnboarding/Onboarding"

const Landing = () => {
  return (
    <div>
      <HeroSlider />
      <Onboarding />
      <Grow />
    </div>
  )
}

export default Landing