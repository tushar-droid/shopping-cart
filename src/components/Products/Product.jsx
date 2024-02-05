
import { useLocation } from "react-router-dom";
import './productStyles.css'
import { useEffect, useState } from "react";
import axios from "axios";


// eslint-disable-next-line react/prop-types
const Product = () =>{
    const location =  useLocation();
    const KEY = "43fcf1bb9e6a4fbe98ceb93a4c7de24e";
    const { game, price } = location.state
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
        console.log('Hit API')
      }, [game.id]);

      useEffect(() =>{
            setDescription(responseData.description)
            
      },[responseData])



    return ( 
        <>
            <div className="image-container">

            </div>
            <div className="description-container">
                <div className="top-product-description">
                    <h1>{game.name}</h1>
                    <h3>Supported on: {game.parent_platforms.map(platforms => ( ' | ' + platforms.platform.name + ' | '))}</h3>    
                    <h3>ESRB rating: {game.esrb_rating ? game.esrb_rating.name : "none" }</h3>
                    <h3>Genres: {game.genres.map((g) => (' | ' + g.name + ' | ' ))}</h3>
                    <h3>Release Date: {game.released}</h3>
                    <h1>Price: $ {price}</h1>
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