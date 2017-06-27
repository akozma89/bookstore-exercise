import {Row, Col, Thumbnail, Button} from 'react-bootstrap/lib/';
import { Link } from 'react-router-dom';
import AddToCartButton from '../common/addToCartButton';

class BookListItem extends React.Component {
    constructor(props) {
        super(props);

        this.buildBookItem = this.buildBookItem.bind(this);
    }

    buildBookItem(book) {
        return (
            <Col xs={6} md={3} key={book.id}>
                <Thumbnail src={book.images ? book.images.smallThumbnail : '/source/images/no-image-available.jpg'} alt={book.title}>
                    <h3>{book.title}</h3>
                    <p>
                        <Link to={ `/book/${book.id}` }>
                            <Button bsStyle="default">Read more</Button>
                        </Link>
                        <AddToCartButton book={book} />
                    </p>
                </Thumbnail>
            </Col>
        );
    }

    render() {
        const BookList = this.props.books.map((book) => {
                return this.buildBookItem(book);
            }),
            rows = Math.floor(BookList.length / 4),
            BookRows = [];

        for (let row = 0; row <= rows; row++) {
            const rowItems = BookList.filter((item, index) => Math.floor(index / 4) === row);

            BookRows.push((
                <Row key={row}>
                    {rowItems}
                </Row>
            ));
        }

        return (
            <div>
                {BookRows}
            </div>
        );
    }
}

export default BookListItem;