import BookListItem from '../common/bookListItem';
import BookApi from '../helpers/network';

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BookList: []
        };

        this.setBookList    = this.setBookList.bind(this);
        this.updateBookList = this.updateBookList.bind(this);
    }

    setBookList(data) {
        if (!data) {
            throw Error('Something went wrong');
        }

        const BookList = data.items.map((item) => {
            const itemVolumeInfo = item.volumeInfo;

            return {
                id: item.id,
                title: itemVolumeInfo.title,
                images: itemVolumeInfo.imageLinks
            };
        });

        this.setState({
            BookList: BookList
        });
    }

    updateBookList(searchQuery) {
        BookApi.list(searchQuery).then((response) => response.json()).then(this.setBookList).catch((error) => {
            console.error(error);
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.query !== nextProps.match.params.query) {
            this.updateBookList(nextProps.match.params.query);
        }
    }

    componentWillMount() {
        this.updateBookList(this.props.match.params.query);
    }

    render() {
        return (
            <div>
                <h1>Search results for: "{this.props.match.params.query}"</h1>
                <BookListItem books={this.state.BookList}/>
            </div>
        );
    }
}

export default Books;