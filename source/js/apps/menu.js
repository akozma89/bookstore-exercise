import { Navbar, Nav, Glyphicon } from 'react-bootstrap/lib/';
import { Link } from 'react-router-dom';
import BookSearchInput from '../common/searchInput';

class Menu extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Link to="./">
                        <Navbar.Brand>
                            <Glyphicon glyph="book" />A Book-Store
                        </Navbar.Brand>
                    </Link>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <Navbar.Form pullLeft>
                            <BookSearchInput />
                        </Navbar.Form>
                        <Link to="./cart">
                            <Glyphicon glyph="shopping-cart" />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;