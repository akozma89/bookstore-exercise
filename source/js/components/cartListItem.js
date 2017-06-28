import { ListGroup, ListGroupItem, Row, Col, Button, Glyphicon } from 'react-bootstrap/lib/';

class CartListItem extends React.Component {
    constructor(props) {
        super(props);

        this.buildCartItems = this.buildCartItems.bind(this);
    }

    buildCartItems(cartItem) {
        return (
            <ListGroupItem key={cartItem.id}>
                {cartItem.title} -- <span>{`${cartItem.quantity} ${cartItem.quantity < 2 ? 'piece' : 'pieces'}`}</span>
                <div className={'buttons'}>
                    <a onClick={() => this.props.removeOneFromCart(cartItem)} title={'Remove one piece'}>
                        <Glyphicon glyph="minus" />
                    </a>
                    <a onClick={() => this.props.addOneToCart(cartItem)} title={'Add one piece'}>
                        <Glyphicon glyph="plus" />
                    </a>
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