import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div>
      <div className='nav-container'>
        <Link to='/'>Home</Link>
        <Link to='/privacy'>Privacy</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}
export default Navbar