import { Navbar, Nav, Glyphicon, Button }   from 'react-bootstrap/lib/';
import { Link }                             from 'react-router-dom';

import BookSearchInput                      from '../components/searchInput';

class Menu extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Link to="/">
                        <Navbar.Brand>
                            <Glyphicon glyph="book" />A Book-Store
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Navbar.Form>
                        <BookSearchInput />
                        <Link to="/cart">
                            <Button>
                                <Glyphicon glyph="shopping-cart" />
                            </Button>
                        </Link>
                    </Navbar.Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;