import { useEffect, useState } from 'react';
import './shopStyles.css'
import Card from '../Cards/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Shop = () =>{
    console.log()
    const KEY = "43fcf1bb9e6a4fbe98ceb93a4c7de24e";
    const [responseData, setResponseData] = useState([]);
    useEffect(() =>{
        const elem = document.body;
        elem.classList.add('glassit');
        return (() => {elem.classList.remove('glassit');

        })
    });
    useEffect(() => {
        const elem = document.body;
        const getData = async () => {
          console.log('Fetched data.')          
          const response = await axios.get(
            `https://api.rawg.io/api/games?key=${KEY}&page_size=40`,
          );          
          elem.style = 'height:100%';
          setResponseData(response.data.results);
        };        
        getData();          

        return (() =>{ elem.style = 'height:100%vh'})
        
      }, []);


    return (
        <>
            {
                responseData.map((game) =>                
              {                
                const price =  Math.floor((Math.random() * 100)) + 0.99;
                return (<Link
                key={game.id}
                to={`/shop/${game.id}`}
                state= {{game: game, price: price}}
                >
                  <Card
                    game_details = {game}
                    price = {price} 
                  />
                </Link>)}
                )
            }
        </>
    )
}

export default Shop;