import { Row, Col, Panel, Label }   from 'react-bootstrap/lib/';

import AddToCartButton              from '../components/addToCartButton';
import CustomList                   from '../components/unorderedList';
import BookNotifications            from '../components/notifications';

import noImage                      from '../../images/no-image-available.jpg';

class BookDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            action: null
        };

        this.removeHTMLTags     = this.removeHTMLTags.bind(this);
        this.buildPriceBlock    = this.buildPriceBlock.bind(this);
        this.buildPriceBlock    = this.buildPriceBlock.bind(this);
        this.removeNotification = this.removeNotification.bind(this);
    }

    showNotification(action, style, item) {
        this.setState({
            action: {
                style:  style,
                action: action,
                title:  item.title
            }
        });
    }

    removeNotification() {
        this.setState({
            action: null
        });
    }

    removeHTMLTags(text) {
        return text.replace(/<\/?[^>]+(>|$)/g, "");
    }

    buildPriceBlock(book) {
        const retail = book.saleInfo;

        if (!retail) {
            return (
                <div key={'priceblock-none'} className={'price-block out-of-stock'}>
                    <Label bsStyle="danger">Out of stock</Label>
                </div>
            );
        }

        return (
            <div key={'priceblock-available'} className={'price-block'}>
                <h2>{`${retail.price.amount} ${retail.price.currencyCode}`}</h2>

                <AddToCartButton book={book} callback={() => this.showNotification('added one piece of', 'success', book)} />
            </div>
        );
    }

    render() {
        const book = this.props.book;

        if (book) {
            return (
                <Row bsClass={'book-details row'}>
                    <Panel header={book.title} bsStyle="info">
                        {this.state.action ?
                            <BookNotifications action={this.state.action.action} style={this.state.action.style} title={this.state.action.title} removeNotification={this.removeNotification} /> :
                            ''
                        }

                        <Row>
                            <Col xs={12}>
                                <h2>{`${(book.authors.length === 1) ? 'Author:' : 'Authors:'}`}</h2>

                                <CustomList customList={book.authors} />

                                {this.buildPriceBlock(book)}
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={12}>
                                <h2>Description</h2>
                                <p>
                                    <img src={book.images ? book.images.medium : noImage} />

                                    {book.description ?
                                        this.removeHTMLTags(book.description) :
                                        ('This book has no description.')}
                                </p>
                            </Col>
                        </Row>
                    </Panel>
                </Row>
            );
        }

        return (
            <Row />
        );
    }
}

export default BookDetails;