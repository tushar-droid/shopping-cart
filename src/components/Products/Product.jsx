/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";
import './productStyles.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Product = ({addToCart, inCart, deleteGame}) =>{
    const location =  useLocation();
    const KEY = "43fcf1bb9e6a4fbe98ceb93a4c7de24e";
    const { game, price} = location.state
    const [responseData, setResponseData] = useState([]);
    const [description, setDescription] = useState('');
    useEffect(() =>{
        const elem = document.body;
        elem.style = 'background: none; background-color: rgb(18, 26, 46); ';
        const backbtn = document.querySelector('.back-btn');
        backbtn.addEventListener('mouseenter', () =>{
            const backArrow = document.querySelector('.back-arrow');
            backArrow.classList.add('move-arrow');
        });
        backbtn.addEventListener('mouseleave', () =>{
            const backArrow = document.querySelector('.back-arrow');
            backArrow.classList.remove('move-arrow');
        })



        return (() => {elem.style = 'background-color: none ';

        })
    });
    


    useEffect(() => {
        const getData = async () => {
          const response = await axios.get(
            `https://api.rawg.io/api/games/${game.id}?key=${KEY}`,
          );          
            setResponseData(response.data);
        };        
        getData();  
      }, [game.id]);

      useEffect(() =>{
            setDescription(responseData.description)
      },[responseData])
      
      const checkIfInCart = () =>{
        let flag = false;
        inCart.forEach(gm =>{
            if(gm.id === game.id)
            {
                flag =true;
                return flag
            }
        })
        return flag
      }


    return ( 
        <>
            <div className="image-container">
                <Link to={'/shop'}><button className="back-btn">
                    <img className="back-arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEIUlEQVR4nO1aS28URxAeZLATERFjYkA5wdGKleRPkEAgELjxutmCi7Hl5GrgDDlZspTfQQQIpDgykISHARsEtjGcIBwiJ7c4ifprfVF116wb7WMeO7O7WJQ00kjdU/1VV3VVddVE0Ttap0Syj8Z8Q2sv0trLBBYJ/EXgP33kfcGNyRxjDpHcGnUCkXyPwElae52ApbXM9ACgtdcInCDZ0w4B3ifwLYHXAah/ae00gQmnGXJAdpzkJn3kfcCNAWcJ/KzfxN//TmBcNqc1Qhizn8CLAMA9AkMkP8zMi+wlMExgNuD3nMbsK9eMrP0hWPA+jfmiMP7G7CXwMDC9qcK1Q3KnA+4F+JvACMmuQhfx63QRGCWwWtE2uaMo5ruduj3jBZKDhTBuvOanBJZ0zWXB0CzD/oDhXZIfFYY2ee2tBG7p2i/EKppxrbE5/Upyc+FokzFsJnA7MLPsZ6ZysL059ZWCNA0OclvFKqydyu5i44PdgjOR8sysOkzG7M0S7HycAEaiDiECY8HhTzYxAt9V4kQJLjYvkdxIYE6xjSVN7nGpglfhnqjDiMZ8pYK8bqgVl7yph2gicM4S+K0ZwPWI5IbAkx6rP1GyWD9pKKcQT/X7B7JoVh5piMAp9WBX698nJK2WjDRjAihpRCDEQu7glT5Qyv3G1MRJYw6rpD9lZLydwGMVYpHkx1HJRGBGz/HX1YPWfq9gJjJq4kkrNBESrT2vm36h1uBllfJglD4Pa6kmaljPpepB4JkbJAeqBhubU8s0ERPJT+INrB4E/lRB+lJo4lE7NBGTZOG6/h/Vg+IJvCDdCX7cC1HmA9ysh0Fx9MR1gmYEmW+BIDeaESSPaS21ybT6G5nWOjnstuJ+D+Vwvy3VDI05Ut/9rgXEs293QDSubiuD05mYvmlmSy1OUQ7US8bipLG3g5PGviBp3FJ7khSUPZjhJtP4uSJA1yICp9VyrjSadFyBzEY5SIWZkxJOnu+TSOPYA8V4NOmq+0rt78uow4jGHFAhXia2IVxpf+2W12nFh3nFdiZthTGu9Y5GHUJc2+Cl1E0h6U/oR6tSHCsdZRIe8nMC/6jJZ2tluP7E2g5sKw1lugxiWT3VZB4GYmL3VJjbbSpif0DgjmK4k7vPqLuxGLQV+gtH2zjw/aJrP2+64aONnuXAzD4rDG3jM7Gsaz4juasoxjsCM1t1BWVyYyHMq13seOVge3PaXkYz1DsATUOK6r66iO27xfPBTXGy1N67dl9jL+Kr9lLGzPEXg56D05W0w6opFdgtTuPRxirpjAcgGekMgXOu7iS3OOk2kd36yPuguxTJHD/X1wnitAM4064/ICQ3OyYFZf0dI2uRweh/K0fbIkAtkoKy1GLl1kZrf3T3EmAl+KlmRdP8S26OzK13n3hH0dtP/wMBqiDnbOmgxwAAAABJRU5ErkJggg==" /></button></Link>
                <Carousel autoPlay={true} >
                    {
                        game.short_screenshots.map((im) => <div key={game.id} className="active-image"><img src={im.image}/></div>)
                    }
                </Carousel>
            </div>
            <div className="description-container">
                <div className="top-product-description">
                    <div className="left-container">
                        <h1>{game.name}</h1>
                        <h3>Supported on: {game.parent_platforms.map(platforms => ( ' | ' + platforms.platform.name + ' | '))}</h3>  
                        <h3>Genres: {game.genres.map((g) => (' | ' + g.name + ' | ' ))}</h3>
                        <h1>Price: $ {price}</h1>
                    </div>
                    <div className="right-container">
                        <h3 className="esrb-rating">ESRB rating: {game.esrb_rating ? game.esrb_rating.name : "none" }</h3>
                        <h3 className="rel-date">Released on: {game.released}</h3>
                        <button className="add-to-cart-btn" onClick={checkIfInCart() ? () => {deleteGame(game.id); document.querySelector('.add-to-cart-btn').classList.remove('remove-from-cart') } : () => {addToCart(game,price); document.querySelector('.add-to-cart-btn').classList.add('remove-from-cart')}}>{checkIfInCart()? 'Remove from Cart' : 'Add to Cart'}</button>
                    </div>
                </div>
                <div className="bottom-product-description">
                    <h3  dangerouslySetInnerHTML={{__html: description}}></h3>
                    
                </div>
            </div>
        </>

        // <>
        //     <h1>This is the Product Page {prodId}</h1>
        //     <img src={game.background_image} alt="" />
        //     <h1>Game: {game.name}</h1>
        //     <h1>Price: {price} </h1>
        // </>
    )

}

export default Product;