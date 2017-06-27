import {Row, Button } from 'react-bootstrap/lib/';
import AddToCartButton from '../common/addToCartButton';
import noImage from '../../images/no-image-available.jpg';

class BookDetails extends React.Component {
    constructor(props) {
        super(props);

        this.removeHTMLTags         = this.removeHTMLTags.bind(this);
        this.createAuthorsBlock     = this.createAuthorsBlock.bind(this);
        this.createISBNBlock        = this.createISBNBlock.bind(this);
    }

    removeHTMLTags(text) {
        return text.replace(/<\/?[^>]+(>|$)/g, "");
    }

    createAuthorsBlock(authors, date) {
        const authorsList = authors.join(', ');

        return (
            <span>{`By ${authorsList}${date ? ` - ${date}` : '' }`}</span>
        );
    }

    createISBNBlock(identifiers) {
        return identifiers.map((item, index) => {
            return (
                <span key={`id_${index}`}>{`${item.type}:${item.identifier}`}</span>
            );
        });
    }

    render() {
        const book = this.props.book;

        if (book) {
            return (
                <Row>
                    <h1>
                        {book.title}<br />
                    </h1>
                    <p>
                        {book.authors && this.createAuthorsBlock(book.authors, book.publishedDate)}<br />
                        {book.industryIdentifiers && this.createISBNBlock(book.industryIdentifiers)}
                    </p>

                    <p>
                        <img src={book.images ? book.images.medium : noImage} />
                        {book.description && this.removeHTMLTags(book.description)}
                    </p>

                    <AddToCartButton book={book} />
                </Row>
            );
        }

        return (
            <Row>
                <p>Sorry, We can't find this book :(</p>
            </Row>
        );
    }
}

export default BookDetails;