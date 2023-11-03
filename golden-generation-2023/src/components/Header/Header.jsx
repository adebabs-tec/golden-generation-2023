import './Header.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className="h-container">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-links">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Service</a>
        <a href="">Contact</a>
      </div>
    </div>
  )
}

export default Header
