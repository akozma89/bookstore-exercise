import { ListGroup, ListGroupItem } from 'react-bootstrap/lib/';
import BookStorage from '../helpers/storage';

class CartListItem extends React.Component {
    constructor(props) {
        super(props);

        this.buildCartItems = this.buildCartItems.bind(this);
    }

    buildCartItems(cartItem) {
        return (
            <ListGroupItem key={cartItem.id}>
                {cartItem.title} - <a onClick={() => this.props.removeFromCart(cartItem)}>Remove</a>
            </ListGroupItem>
        );
    }

    render() {
        const cartList = this.props.storage.cart.map((cartItem) => {
            return this.buildCartItems(cartItem);
        });
        return (
            <ListGroup>
                {cartList}
            </ListGroup>
        );
    }
}

export default CartListItem;