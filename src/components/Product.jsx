import { useParams } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Product = () =>{
    const  {prodId} = useParams();
    return ( 
        <>
            <h1>This is the Product Page {prodId}</h1>
        </>
    )

}

export default Product;