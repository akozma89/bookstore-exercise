import { Row, Panel, Col } from 'react-bootstrap/lib/';
import BookStorage from '../helpers/storage';
import CartListItem from '../common/cartListItem';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            storage: BookStorage.get()
        };

        this.updateStorage      = this.updateStorage.bind(this);
        this.addOneToCart       = this.addOneToCart.bind(this);
        this.removeFromCart     = this.removeFromCart.bind(this);
        this.removeOneFromCart  = this.removeOneFromCart.bind(this);
        this.submitCart         = this.submitCart.bind(this);
    }

    updateStorage(newStorage) {
        this.setState({
            storage: newStorage
        });
    }

    addOneToCart(cartItem) {
        const newStorage = BookStorage.addToStorage(cartItem);

        this.updateStorage(newStorage);
    }

    removeOneFromCart(cartItem) {
        const newStorage = BookStorage.removeOneFromStorage(cartItem);

        this.updateStorage(newStorage);
    }

    removeFromCart(cartItem) {
        const newStorage = BookStorage.removeFromStorage(cartItem);

        this.updateStorage(newStorage);
    }

    submitCart() {
        BookStorage.initStorage();

        this.props.history.push('/');
    }

    render() {
        return (
            <Row bsClass={'book-cart row'}>
                <Col xs={12}>
                    <Panel header={'Cart'}>
                        <CartListItem storage={this.state.storage} addOneToCart={this.addOneToCart} removeOneFromCart={this.removeOneFromCart} removeFromCart={this.removeFromCart} handleSubmit={this.submitCart} />
                    </Panel>
                </Col>
            </Row>

        );
    }
}

export default Cart;