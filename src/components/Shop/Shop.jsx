import { useEffect, useState } from 'react';
import './shopStyles.css'
import Card from '../Cards/Card';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Shop = () =>{

    const KEY = "43fcf1bb9e6a4fbe98ceb93a4c7de24e";
    const [responseData, setResponseData] = useState([]);
    const [showData, setShowData] = useState(true);
    const [nextPage, setNextPage] = useState('');
    const [prevPage, setPrevPage] = useState('');
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const elem = document.body;
        const getData = async () => {
          console.log('Fetched data.')       
          try
          {

            const response = await axios.get(
              `https://api.rawg.io/api/games?key=${KEY}&page_size=40`,
            )   
            elem.style = 'height:100%';
            setResponseData(response.data.results);
            setNextPage(response.data.next);
            setPrevPage(response.data.previous);
          } catch(err){
            console.log(err)
          }  finally{
            setLoading(false)
          }
          }   
        getData();       


        return (() =>{ elem.style = 'height:100%vh'})
        
      }, []);
      
      const goToNextPage = async() =>{
        const elem = document.body;
        const getData = async () => {
          console.log('Fetched data.')          
          const response = await axios.get(
            nextPage,
          );          
          elem.style = 'height:100%';
          setResponseData(response.data.results);
          console.log(response.data)
          setNextPage(response.data.next);
          setPrevPage(response.data.previous)
        };        
        getData();    
        window.scrollTo({top: 0})

      }

      const goToPreviousPage = async() =>{
        const elem = document.body;
        const getData = async () => {       
          const response = await axios.get(
            prevPage,
          );          
          elem.style = 'height:100%';
          setResponseData(response.data.results);
          console.log(response.data)
          setNextPage(response.data.next);
          setPrevPage(response.data.previous)
        };        
        getData();    
        window.scrollTo({top: 0})
      }
  
      


    return (
        <>
        <div className="left-product-page">
        <h1 onClick={() => setShowData(true)} >All Games</h1>
        <h1 onClick={() => setShowData(false)}>Featured Games</h1>
        <h1 onClick={() => setShowData(false)}>Top 30</h1>
        <h1 onClick={() => setShowData(false)}>This week</h1>
        <h1 onClick={() => setShowData(false)}>Best of the Year</h1>
        <h1 onClick={() => setShowData(false)}>Platforms</h1>
        <h1 onClick={() => setShowData(false)}>Stores</h1>
        <h1 onClick={() => setShowData(false)}>Collections</h1>
        </div>
        <div className="right-product-page">
            {
             showData? loading? <h1 className='loading-data'>Loading...</h1>: responseData.map((game) =>                
              {                
                const price =  Math.floor((Math.random() * 100)) + 0.99;
                return (
                <Link
                  key={game.id}
                  to={`/shop/${game.id}`}
                  state= {{game: game, price: price}}
                >
                  <Card
                    game_details = {game}
                    price = {price} 
                  />
                </Link>)}
                ):<h1 className='loading-data'>Unfortunately the API does not provide this Data the left bar is just a proof of concept</h1>
            }
            {loading || !showData? '': <div className="prev-btn-container span-prev">
              <button onClick={goToPreviousPage} className='navigation-btns'>Previous page</button>
            </div>}
            {loading || !showData? '':<div className="next-btn-container span-2">
              <button onClick={goToNextPage} className='navigation-btns'>Next page</button>
            </div>

            }
            
            {/* <button onClick={goToNextPage} className='navigation-btns span-2'>Next page</button> */}

          </div>
        </>
    )
}

export default Shop;