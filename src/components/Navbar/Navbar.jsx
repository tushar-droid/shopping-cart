import './navbarStyles.css'
import logo from './logo.png'
import { Link } from 'react-router-dom';
const Navbar = () =>{
    return (
        <nav>
           <Link to='/'>
                <img src={logo} className='logo'/>
           </Link>
            <ul className='links-container'>
                <li>
                    <Link to='/shop' >Shop</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;