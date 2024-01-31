import './styles.css'
import Navbar from './components/Navbar/Navbar';

import { Outlet } from 'react-router-dom';
const App = () =>{
    return (
        <>
            <Navbar/>
            <div className='content'>
                <Outlet/>
            </div>

        </>
    )
}

export default App;
