import {Row, Col, Panel} from 'react-bootstrap/lib/';
import BookListItem from '../components/bookListItem';
import BookPagination from '../components/pagination';
import BookApi from '../helpers/network';

class Books extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            BookList: [],
            totalItems: null,
            activePage: 1
        };

        this.setBookList    = this.setBookList.bind(this);
        this.updateBookList = this.updateBookList.bind(this);
        this.changePage     = this.changePage.bind(this);
    }

    setBookList(data) {
        if (!data || !data.items) {
            this.setState({
                activePage: this.state.activePage !== 1 ? this.state.activePage - 1 : 1
            });

            throw Error('Something went wrong');
        }

        const BookList = data.items.map((item) => {
            const itemVolumeInfo = item.volumeInfo;

            return {
                id:         item.id,
                title:      itemVolumeInfo.title,
                images:     itemVolumeInfo.imageLinks,
                saleInfo:   item.saleInfo && item.saleInfo.saleability === 'FOR_SALE' && true
            };
        });

        this.setState({
            BookList: BookList
        });

        if (!this.state.totalItems) {
            this.setState({
                totalItems: Math.round(data.totalItems / 12)
            });
        }
    }

    updateBookList(searchQuery, start) {
        BookApi.list(searchQuery, start).then((response) => response.json()).then(this.setBookList).catch((error) => {
            throw Error(error);
        });
    }

    changePage(eventKey) {
        const listStartIndex = eventKey === 1 ? 0 : ((eventKey - 1) * 12);

        if (this.state.activePage !== eventKey) {
            this.setState({
                activePage: eventKey
            });

            this.updateBookList(this.props.match.params.query, listStartIndex);
        }
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
            <Row bsClass="book-list row">
                <Col xs={12}>
                    <Panel header={`Search results for: "${this.props.match.params.query}"`}>
                        <BookListItem books={this.state.BookList}/>
                        <Row bsClass={`row book-pagination ${!this.state.BookList.length && 'hidden'}`} >
                            <Col xs={12}>
                                <BookPagination totalItems={this.state.totalItems} activePage={this.state.activePage} changePage={(eventKey) => this.changePage(eventKey)} />
                            </Col>
                        </Row>
                    </Panel>
                </Col>

            </Row>
        );
    }
}

export default Books;