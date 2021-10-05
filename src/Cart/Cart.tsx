import CartItem from '../CartItem/CartItem';


//Styles

import { Wrapper } from './Cart.styles';

//Types
import {CartItemType} from '../App';

type Props = {
    cartItems: CartItemType[];
    addToCart:(clickedItem: CartItemType) => void;
    removeFromCart:(id: number) => void;
    
    
};

// Cart Page
const Cart:React.FC<Props> = ({ cartItems, addToCart, removeFromCart}) =>{
    const calculateTotal = (items:CartItemType[]) =>
    items.reduce((ack: number, item) => ack +item.amount * item.price,0);
    return(
        <Wrapper>
            <h2>Seu Carrinho</h2>
            {cartItems.length ===0 ?<p>Carrinho Vazio</p> : null}
            {cartItems.map(item=>(
                <CartItem 
                key={item.id}
                item={item}
                addToCart={addToCart}
                removeFromCart= {removeFromCart}
                
                />
            ))}
            <h2>Total: R${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
};

export default Cart;