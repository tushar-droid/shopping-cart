/* eslint-disable react/prop-types */
import './navbarStyles.css'
import logo from './logo.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';



const Navbar = ({cartSize}) =>{

    useEffect(() =>{
        if(cartSize === 0)  document.querySelector('.cart-dot').style.display = 'none';
        else    document.querySelector('.cart-dot').style.display = 'flex';

    },[cartSize])


    return (
        <nav className='navbar'>
           <Link to='/'>
                <img src={logo} className='logo'/>
           </Link>
            <ul className='links-container'>
                <li className='shop-link'>
                    <Link to='/shop' >Shop</Link>
                </li>
                <li className='cart-link'>
                    <Link to='/cart' >Cart</Link>
                    <div className='cart-dot'>{cartSize}</div>
                </li>
            </ul>
        </nav>
    )

}

export default Navbar;