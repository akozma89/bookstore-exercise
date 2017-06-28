import {Row, Col, Thumbnail, Button} from 'react-bootstrap/lib/';
import { Link } from 'react-router-dom';
import AddToCartButton from '../common/addToCartButton';
import noImage from '../../images/no-image-available.jpg';

class BookListItem extends React.Component {
    constructor(props) {
        super(props);

        this.buildBookItem = this.buildBookItem.bind(this);
    }

    buildBookItem(book) {
        return (
            <Col xs={12} md={6} lg={3} key={book.id}>
                <Thumbnail src={book.images ? book.images.smallThumbnail : noImage} alt={book.title}>
                    <h2>{book.title.length < 65 ? book.title : `${book.title.slice(0, 64)}...` }</h2>
                    <div className="book-list-action-block">
                        <Link to={ `/book/${book.id}` }>
                            <Button bsStyle="default">Read more</Button>
                        </Link>
                        <AddToCartButton book={book} />
                    </div>
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

        for (let row = 0; row < rows; row++) {
            const rowItems = BookList.filter((item, index) => Math.floor(index / 4) === row);

            BookRows.push((
                <Row key={row}>
                    {rowItems}
                </Row>
            ));
        }

        return (
            <div className="book-list-content">
                {BookRows}
            </div>
        );
    }
}

export default BookListItem;