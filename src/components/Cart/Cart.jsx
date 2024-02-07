/* eslint-disable react/prop-types */
import './cartStyles.css'

const Cart = ({inCart, deleteGame}) =>{
    if(inCart.length === 0){
        return(
            <h1>The cart is Empty</h1>
        )
    }
    return (
        <ul>
            {inCart.map((game) => 
            <li key={game.id} className='game-item'>
                <div className='cart-image-container'><img src={game.background_image} className='cart-product-image'/></div>
                <h1>{game.name}</h1>                
                <h1 className='cart-price-div'>$ {game.price}</h1>
                <button onClick={() => deleteGame(game.id)} className='cart-delete-btn' >Delete</button>
                </li>)}
        </ul>
    )

}  

export default Cart;