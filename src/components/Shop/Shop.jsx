import { useEffect, useState } from 'react';
import './shopStyles.css'
import Card from '../Cards/Card';
import axios from 'axios';
const Shop = () =>{
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
          const response = await axios.get(
            `https://api.rawg.io/api/games?key=${KEY}&page_size=40`,
          );
          
          elem.style = 'height:100%';
          setResponseData(response.data.results);
        };
        getData();
        return (() =>{ elem.style = 'height:100%vh'})
      }, []);

      const cardClick = (id) =>{
        console.log('cliked ID was: ', id)
      }


    


    return (
        <>
            {
                responseData.map((game) =>
                <Card
                key={game.id}
                id = {game.id}
                name={game.name} 
                img={game.background_image}  
                clickHandler ={cardClick}
                />
                )
            }
        </>
    )
}

export default Shop;