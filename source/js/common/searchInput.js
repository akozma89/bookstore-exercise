import { InputGroup, Button, FormControl, Glyphicon } from 'react-bootstrap/lib/';
import { Link } from 'react-router-dom';

class BookSearchInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchValue: ""
        };

        this.handleChange   = this.handleChange.bind(this);
        this.redirectToBook = this.redirectToBook.bind(this);
    }

    redirectToBook() {
        if (this.state.searchValue) {
            ReactDOM.findDOMNode(this.goToBook).click();
        } else {
            ReactDOM.findDOMNode(this.searchInput).focus();
        }
    }

    handleChange(event) {
        this.setState({
            searchValue: event.target.value
        });
    }

    render() {
        return (
            <InputGroup>
                <FormControl 
                    type="text"
                    value={this.state.searchValue}
                    placeholder="Search for a Book"
                    onChange={this.handleChange}
                    ref={(input) => { this.searchInput = input; }}
                />
                <InputGroup.Button>
                    <Button onClick={() => this.redirectToBook()}>
                        <Glyphicon glyph="search" />
                    </Button>
                    <Link to={`/books/${this.state.searchValue}`} ref={(link) => { this.goToBook = link; }}/>
                </InputGroup.Button>
            </InputGroup>
        );
    }
}

export default BookSearchInput;