import BookApi from '../helpers/network';

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookList: []
        };

        this.getBookList    = this.getBookList.bind(this);
    }

    getBookList(data) {
        this.setState(data.items);
    }

    componentWillMount() {
        const searchQuery = this.props.match.params.query;

        BookApi.list(searchQuery).then((response) => response.json()).then(this.getBookList).catch((error) => {
            console.error(error);
        });
    }

    render() {
        return (
            <p>
                <h1>Search results for: "{this.props.match.params.query}"</h1>
                <p>{this.state.bookList}</p>
            </p>
        );
    }
}

export default Books;