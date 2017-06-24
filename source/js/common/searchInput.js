import { InputGroup, Button, FormControl, Glyphicon } from 'react-bootstrap/lib/';

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
                    <Button>
                        <Glyphicon glyph="search" />
                    </Button>
                </InputGroup.Button>
            </InputGroup>
        );
    }
}

export default BookSearchInput;