import { Alert } from 'react-bootstrap/lib/';

class BookNotifications extends React.Component {
    render() {
        return (
            <Alert bsStyle={this.props.style} onDismiss={this.props.removeNotification}>
                Successfully {this.props.action} this book:<br/><span className="alert-book-title">"{this.props.title}"</span>
            </Alert>
        );
    }
}

export default BookNotifications;