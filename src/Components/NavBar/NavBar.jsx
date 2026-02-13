import './NavBar.css'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-name"><Link to="/">JOSEFINE WYRTZ</Link></div>
      <ul className="navbar-links">
        <li><Link to="/">HJEM</Link></li>
        <li><Link to="/portfolio">PORTFOLIO</Link></li>
        <li><Link to="/kontakt">KONTAKT</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar