import './Hero.css'
import BgImg from '../../assets/bg-img.jpg'

const Hero = () => {
  return (
    <div className="h-wrapper">
      <div className="bg-img">
        <img src={BgImg} alt="" />
      </div>
      <div className="overlay" />
    </div>
  )
}

export default Hero
