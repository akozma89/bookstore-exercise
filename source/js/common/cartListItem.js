import { InputGroup, FormControl, ListGroup, ListGroupItem, Row, Col, Button, Glyphicon } from 'react-bootstrap/lib/';

class CartListItem extends React.Component {
    constructor(props) {
        super(props);

        this.buildCartItems = this.buildCartItems.bind(this);
    }

    buildCartItems(cartItem) {
        return (
            <ListGroupItem key={cartItem.id}>
                {cartItem.title}
                <div className={'buttons'}>
                    <InputGroup>
                        <InputGroup.Addon onClick={() => this.props.removeOneFromCart(cartItem)}>-</InputGroup.Addon>
                        <FormControl type="text" disabled={true} value={cartItem.quantity} />
                        <InputGroup.Addon onClick={() => this.props.addOneToCart(cartItem)}>+</InputGroup.Addon>
                    </InputGroup>
                    <a onClick={() => this.props.removeFromCart(cartItem)} title={'Remove'}>
                        <Glyphicon glyph="remove" />
                    </a>
                </div>
            </ListGroupItem>
        );
    }

    render() {
        const cartList = this.props.storage.cart.map((cartItem) => {
            return this.buildCartItems(cartItem);
        });

        if (!cartList.length) {
            return (
                <p>Your cart is empty.</p>
            );
        }

        return (
            <div>
                <ListGroup>
                    {cartList}
                </ListGroup>
                <Row bsClass={'book-submit row'}>
                    <Col xs={12}>
                        <Button bsStyle="success" onClick={this.props.handleSubmit}>Submit</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CartListItem;