/* eslint-disable react/prop-types */
import './styles.css'
import Navbar from './components/Navbar/Navbar';

import { Outlet, useLocation } from 'react-router-dom';

const App = ({cartSize}) =>{
    const location = useLocation().pathname;



    return (
        <>
            <Navbar cartSize ={cartSize}/>
            <div  className={location==='/'? 'home-content' : location==='/shop'? 'shop-content': location==='/cart'? 'cart-content': 'product-content' } >
                <Outlet/>
            </div>

        </>
    )
}

export default App;
