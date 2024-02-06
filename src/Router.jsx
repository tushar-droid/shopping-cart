import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Cart from "./components/Cart";
import Shop from "./components/Shop/Shop";
import Product from "./components/Products/Product";
import Home from "./Home";
import { useState } from "react";


const Router = () =>{
    const [inCart, setInCart] = useState([]);
    const addToCart = (game, price) =>{
        game.price = price;
        setInCart((prev) => prev.concat(game));
    }

    const removeFromCart = (id) =>{
        
        const remId = inCart.findIndex((game) => game.id===id );
        let temp = inCart;
        console.log('ID to remove: ', remId)
        console.log('Before deleteion: ', temp)
        temp.splice(remId, 1);
        console.log('after deletion: ', temp)
        setInCart([...temp]);
    }


    const router = createBrowserRouter([
        {
            path:'/',
            element: <App/>,                  
            children: [
                {path:'/', element:<Home/>},
                {path:'/cart', element:<Cart inCart={inCart} deleteGame={removeFromCart}/>},
                {path:'/shop', element:<Shop/>},
                {path:'/shop/:prodId', element:<Product addToCart={addToCart} inCart={inCart}/>}
            ]
        }

    ])

    return <RouterProvider router = {router} />

}

export default Router;