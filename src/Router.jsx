import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Cart from "./components/Cart";
import Shop from "./Shop";
import Product from "./components/Product";
import Home from "./Home";


const Router = () =>{
    const router = createBrowserRouter([
        {
            path:'/',
            element: <App/>,                  
            children: [
                {path:'/', element:<Home/>},
                {path:'/cart', element:<Cart/>},
                {path:'/shop', element:<Shop/>},
                {path:'/shop/:prodId', element:<Product/>}
            ]
        }

    ])

    return <RouterProvider router = {router} />

}

export default Router;