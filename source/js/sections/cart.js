import { Row } from 'react-bootstrap/lib/';
import BookStorage from '../helpers/storage';
import CartListItem from '../common/cartListItem';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            storage: BookStorage.get()
        };

        this.updateStorage  = this.updateStorage.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
    }

    updateStorage(newStorage) {
        this.setState({
            storage: newStorage
        });
    }

    removeFromCart(cartItem) {
        const newStorage = BookStorage.removeFromCart(cartItem);

        this.updateStorage(newStorage);
    }

    render() {
        return (
            <Row>
                <h1>Cart</h1>
                <CartListItem storage={this.state.storage} removeFromCart={this.removeFromCart} />
            </Row>
        );
    }
}

export default Cart;