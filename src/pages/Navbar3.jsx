import '../assets/css/Navbar2.css'
import { Link } from 'react-router-dom'
function Navbar3() {
    return (
     <>

    <header className='navbar'>
        <div className='navbar_title navbar_item'>MEDILOGIX</div>
        <div className='pinkbtn1 pinkLogin'><Link to='/Login'>Login</Link></div>
        <div className='pinkbtn22 pink1aboutus'><Link to='/AboutUs'>About Us</Link></div>
        <div className='pinkbtn33 pink1contact'><Link to='/Contact'>Contact</Link></div>
              
    </header>
    </>
)
    }
    export default Navbar3