/* eslint-disable react/prop-types */

const Cart = ({inCart, deleteGame}) =>{

    return (
        <ul>
            {inCart.map((game) => 
            <li key={game.id}>
                <p>{game.id}</p>
                <p>{game.name}</p>                
                <p>{game.price}</p>
                <button onClick={() => deleteGame(game.id)}>Delete</button>
                </li>)}
        </ul>
    )

}  

export default Cart;