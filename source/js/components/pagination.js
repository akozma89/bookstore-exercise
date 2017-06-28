import { Pagination } from 'react-bootstrap/lib/';

class BookPagination extends React.Component {
    render() {
        return (
            <Pagination
                prev
                next
                ellipsis={false}
                items={this.props.totalItems}
                maxButtons={3}
                activePage={this.props.activePage}
                onSelect={this.props.changePage} />
        );
    }
}

export default BookPagination;