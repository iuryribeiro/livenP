import Button from '@material-ui/core/Button'

//Types

import { CartItemType } from '../App';
import Item from '../Item/Item';

//Styles
import { Wrapper } from './CartItem.styles';


type Props = {
    item: CartItemType;
    addToCart:(clickedItem: CartItemType)=> void;
    removeFromCart: (id: number) => void;
}


//Cart Item
const CartItem: React.FC<Props> = ({item, addToCart, removeFromCart}) => (
    <Wrapper>
        <div>
            <h3>{item.name}</h3>
            <div className="Information">
                <p>Preço: R${item.price}</p>
                <p>Total: R${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => removeFromCart(item.id)}
                >
                    -
                </Button>
                <p>{item.amount}</p>
                <Button
                size="small"
                disableElevation
                variant="contained"
                onClick={() => addToCart(item)}
                >
                    +

                </Button>
            </div>
        </div>
        <img src={item.image} alt={item.name}/>
    </Wrapper>

);

export default CartItem;