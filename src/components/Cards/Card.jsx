/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Card = ({game_details, price}) =>{
 
    useEffect(() =>{
    const card_elem = document.querySelectorAll('.card');
    card_elem.forEach(elem => {
        const elem_id = elem.id;
        elem.addEventListener('mouseover', () =>{            
            const det = document.getElementById(`details-${elem_id}`);
            det.classList.add('expand')
        })        
    
        elem.addEventListener('mouseleave', () =>{            
            const det = document.getElementById(`details-${elem_id}`);
            det.classList.remove('expand')
        })

    })
    },[])
    
    return (
        <div className="card" id={game_details.id} >
            <div className="bg-image" style={{backgroundImage: `url(${game_details.background_image})`}} ></div>            
            <div className="details" id={`details-${game_details.id}`}>
                <h4 className="title-name" >{game_details.name}</h4>
                <p style={{textAlign:'center'}}>Supported on:<br/> <br/> {game_details.parent_platforms.map(platforms => ( ' | ' + platforms.platform.name + ' | '))}</p>                
                <p>ESRB rating: {game_details.esrb_rating ? game_details.esrb_rating.name : "none" }</p>
                <p style={{textAlign:'center'}}>Genres: {game_details.genres.map((g) => (' | ' + g.name + ' | ' ))}</p>
                <h2>Price: $ {price}</h2>
            </div>
        </div>
    )
}





export default Card