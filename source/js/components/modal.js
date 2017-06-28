import { Modal, Button } from 'react-bootstrap/lib/';

class BookModal extends React.Component {
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.dissmissModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{this.props.modalContent}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.dissmissModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default BookModal;