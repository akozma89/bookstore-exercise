import { InputGroup, Button, FormControl, Glyphicon } from 'react-bootstrap/lib/';
import { Link } from 'react-router-dom';

class BookSearchInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        };

        this.handleChange = this.handleChange.bind(this);
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
                />
                <InputGroup.Button>
                    <Link to={ `/books/${this.state.searchValue}` }>
                        <Button>
                            <Glyphicon glyph="search" />
                        </Button>
                    </Link>
                </InputGroup.Button>
            </InputGroup>
        );
    }
}

export default BookSearchInput;