import { Grow } from "../../components/Landing/Grow/Grow"
import HeroSlider from "../../components/Landing/HeroSliderDetails/HeroSlider"
import { LandingRemainder } from "../../components/Landing/LandingRemainder"
import { Onboarding } from "../../components/Landing/LandingOnboarding/Onboarding"

const Landing = () => {
  return (
    <div>
      <HeroSlider />
      <Onboarding />
      <Grow />
      <LandingRemainder />
    </div>
  )
}

export default Landing