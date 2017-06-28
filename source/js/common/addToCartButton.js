import { Button, Glyphicon } from 'react-bootstrap/lib/';
import BookStorage from '../helpers/storage';

const addToCartAction = (book, callback) => {
    BookStorage.addToStorage(book);

    if (callback) {
        callback();
    }
};

class AddToCartButton extends React.Component {
    render() {
        return (
            <Button onClick={() => addToCartAction(this.props.book, this.props.callback)} bsStyle="success">
                Add to Cart
                <Glyphicon glyph="cart" />
            </Button>
        );
    }
}

export default AddToCartButton;