import { useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () =>{
    useEffect(() =>{
        const nav = document.querySelector('.navbar');
        nav.style = 'background-color: transparent;';
        return (
            () => nav.style = "background-color: rgb(18, 26, 46);"
        )
    },[])


    return(
        <>
           <h1 className="hero-statement">Unlock Limitless Fun – Your Gaming Haven at GameSphere. Choose, Play, Enjoy!</h1>
           <Link to='/shop' className='call-to-action'>Shop</Link>
        </>
    )
}

export default Home;   