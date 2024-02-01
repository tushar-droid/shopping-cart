import { useEffect } from 'react';
import './shopStyles.css'

const Shop = () =>{
    useEffect(() =>{
        const elem = document.body;
        elem.classList.add('glassit');
        return (() => {elem.classList.remove('glassit');
            console.log('This function ran now')
        })
    })
    
    


    return (
        <>
            <h1>This is the Shop</h1>
        </>
    )
}

export default Shop;