import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const Card = ({id ,name, img, clickHandler}) =>{

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
        <div onClick={() => clickHandler(id)} className="card" id={id}>
            <div className="bg-image" style={{backgroundImage: `url(${img})`}} ></div>            
            <div className="details" id={`details-${id}`}>
                <h4 className="title-name" >{name}</h4>
                <p className="game-details">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consequatur magni quia, ad debitis, ipsa minus esse ducimus aspernatur rerum incidunt delectus sint est natus omnis vel culpa id quo!</p>
                <p>{Math.floor((Math.random() * 100)) + 0.99}</p>
            </div>
        </div>
    )
}
export default Card