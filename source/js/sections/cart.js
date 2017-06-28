import { Row, Panel, Col }  from 'react-bootstrap/lib/';

import BookStorage          from '../helpers/storage';
import CartListItem         from '../components/cartListItem';
import BookModal            from '../components/modal';
import BookNotifications    from '../components/notifications';

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            storage: BookStorage.get(),
            action: null,
            submitted: false
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
            storage:    newStorage,
            action:     action
        });
    }

    showNotification(action, style, item) {
        this.setState({
            action: {
                style:  style,
                action: action,
                title:  item.title
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
        this.setState({
            storage: BookStorage.initStorage(),
            submitted: true
        });
    }

    render() {
        return (
            <Row bsClass={'book-cart row'}>
                {!this.state.submitted &&
                    <Col xs={12}>
                        <Panel header={'Cart'}>
                            {this.state.action &&
                                <BookNotifications action={this.state.action.action} style={this.state.action.style} title={this.state.action.title} removeNotification={this.removeNotification} />
                            }

                            <CartListItem storage={this.state.storage} addOneToCart={this.addOneToCart} removeOneFromCart={this.removeOneFromCart} removeFromCart={this.removeFromCart} handleSubmit={this.submitCart} />}
                        </Panel>
                    </Col>
                }

                <BookModal showModal={this.state.submitted}
                    dissmissModal={() => this.props.history.push('/')}
                    modalTitle="Thank you for your purchase"
                    modalContent={`Belly provide train project concepts skyline thought, has front twice it the upon experiments what based versus have been if was and as incurred lift sleepiness he rethoric way. Getting said any I officers. The it feedback queen's his refinement of to lieutenantgeneral little blind interesting respond and then title as the all failures coffee links line parts bedding work, you to and hundreds its volumes the of it be go with review, now, in good saw doing clean think a clue away. Everything studies business way voice being wasn't the feel while easier copy I actually these legs of.`}
                />
            </Row>
        );
    }
}

export default Cart;