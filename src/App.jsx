import './styles.css'
import Navbar from './components/Navbar/Navbar';

import { Outlet, useLocation } from 'react-router-dom';

const App = () =>{
    const location = useLocation().pathname;
    
    return (
        <>
            <Navbar/>
            <div /*className='home-content'*/ className={location==='/'? 'home-content' : 'shop-content'} >
                <Outlet/>
            </div>

        </>
    )
}

export default App;
