import { Link } from "react-router-dom";
const Home = () =>{
    return(
        <>
           <h1 className="hero-statement">Unlock Limitless Fun – Your Gaming Haven at GameSphere. Choose, Play, Enjoy!</h1>
           <Link to='/shop' className='call-to-action'>Shop</Link>
        </>
    )
}

export default Home;   