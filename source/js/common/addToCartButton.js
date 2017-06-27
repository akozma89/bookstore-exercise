import { Button, Glyphicon } from 'react-bootstrap/lib/';
import BookStorage from '../helpers/storage';

class AddToCartButton extends React.Component {
    render() {
        return (
            <Button onClick={() => BookStorage.addToCart(this.props.book)} bsStyle="success">
                Add to Cart
                <Glyphicon glyph="cart" />
            </Button>
        );
    }
}

export default AddToCartButton;