import BookDetails      from '../components/bookDetails';
import BookApi          from '../helpers/network';
import BookStorage      from '../helpers/storage';
import buildBookObject  from '../helpers/bookObject';

class Book extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Book: null
        };

        this.getBookDetails = this.getBookDetails.bind(this);
        this.setBookDetails = this.setBookDetails.bind(this);
    }

    setBookDetails(book) {
        if (!book) {
            throw Error('Something went wrong. There is no book to show.');
        }

        this.setState({
            Book: buildBookObject(book)
        });
    }

    getBookDetails(id) {
        BookApi.get(id).then((response) => response.json()).then(this.setBookDetails).catch((error) => {
            throw Error('Something went wrong.');
        });
    }

    componentWillMount() {
        this.getBookDetails(this.props.match.params.id);
    }

    render() {
        return (
            <BookDetails book={this.state.Book} cartHandler={() => BookStorage.addToStorage(this.state.Book)}/>
        );
    }
}

export default Book;