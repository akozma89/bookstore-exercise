import { Row, Panel, Col } from 'react-bootstrap/lib/';
import BookStorage from '../helpers/storage';
import CartListItem from '../components/cartListItem';
import BookNotifications from '../components/notifications';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            storage: BookStorage.get(),
            action: null
        };

        this.updateStorage      = this.updateStorage.bind(this);
        this.addOneToCart       = this.addOneToCart.bind(this);
        this.removeFromCart     = this.removeFromCart.bind(this);
        this.removeOneFromCart  = this.removeOneFromCart.bind(this);
        this.submitCart         = this.submitCart.bind(this);
        this.showNotification   = this.showNotification.bind(this);
        this.removeNotification = this.removeNotification.bind(this);
    }

    updateStorage(newStorage, action) {
        this.setState({
            storage: newStorage,
            action: action
        });
    }

    showNotification(action, style, item) {
        this.setState({
            action: {
                style: style,
                action: action,
                title: item.title
            }
        });
    }

    removeNotification() {
        this.setState({
            action: null
        });
    }

    addOneToCart(cartItem) {
        const newStorage = BookStorage.addToStorage(cartItem);

        this.updateStorage(newStorage);
        this.showNotification('added 1 piece of', 'success', cartItem);
    }

    removeOneFromCart(cartItem) {
        const newStorage = BookStorage.removeOneFromStorage(cartItem);

        this.updateStorage(newStorage);
        this.showNotification('removed 1 piece of', 'warning', cartItem);
    }

    removeFromCart(cartItem) {
        const newStorage = BookStorage.removeFromStorage(cartItem);

        this.updateStorage(newStorage);
        this.showNotification('removed ', 'danger', cartItem);
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
                        {this.state.action ? (<BookNotifications action={this.state.action.action} style={this.state.action.style} title={this.state.action.title} removeNotification={this.removeNotification} />) : ''}
                        <CartListItem storage={this.state.storage} addOneToCart={this.addOneToCart} removeOneFromCart={this.removeOneFromCart} removeFromCart={this.removeFromCart} handleSubmit={this.submitCart} />
                    </Panel>
                </Col>
            </Row>

        );
    }
}

export default Cart;