/* eslint-disable react/prop-types */

import { useLocation } from "react-router-dom";
import './productStyles.css'
import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Product = ({addToCart, inCart}) =>{
    const location =  useLocation();
    const KEY = "43fcf1bb9e6a4fbe98ceb93a4c7de24e";
    const { game, price} = location.state
    const [responseData, setResponseData] = useState([]);
    const [description, setDescription] = useState('');

    
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
                <Carousel>
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
                        <button className="add-to-cart-btn" onClick={() => addToCart(game,price)}>{checkIfInCart()? 'Added to Cart' : 'Add to Cart'}</button>
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