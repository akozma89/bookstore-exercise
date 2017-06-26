import BookDetails from '../common/BookDetails';
import BookApi from '../helpers/network';
import BookStorage from '../helpers/storage';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Book: null
        };

        this.getBookDetails = this.getBookDetails.bind(this);
        this.setBookDetails = this.setBookDetails.bind(this);
        this.addToCart      = this.addToCart.bind(this);
    }

    setBookDetails(book) {
        if (!book) {
            throw Error('Something went wrong. There is no book to show.');
        }

        const bookVolumeInfo = book.volumeInfo;

        this.setState({
            Book: {
                id:                     book.id,
                title:                  bookVolumeInfo.title,
                description:            bookVolumeInfo.description,
                images:                 bookVolumeInfo.imageLinks,
                authors:                bookVolumeInfo.authors,
                publishedDate:          bookVolumeInfo.publishedDate,
                industryIdentifiers:    bookVolumeInfo.industryIdentifiers,
                saleInfo:               (book.saleInfo && book.saleInfo.saleability === 'FOR_SALE') && {
                    price: book.saleInfo.listPrice
                }
            }
        });
    }

    getBookDetails(id) {
        BookApi.get(id).then((response) => response.json()).then(this.setBookDetails).catch((error) => {
            throw Error('Something went wrong.');
        });
    }

    addToCart() {
        console.log('sessionstorage: ', BookStorage.get());
    }

    componentWillMount() {
        this.getBookDetails(this.props.match.params.id);
    }

    render() {
        return (
            <BookDetails book={this.state.Book} cartHandler={this.addToCart}/>
        );
    }
}

export default Book;