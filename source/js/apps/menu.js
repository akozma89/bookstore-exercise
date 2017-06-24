import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap/lib/';
import BookSearchInput from '../common/searchInput';

class Menu extends React.Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Glyphicon glyph="book" />A Book-Store
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <Navbar.Form pullLeft>
                            <BookSearchInput />
                        </Navbar.Form>
                        <NavItem eventKey={2} href="#"><Glyphicon glyph="shopping-cart" /></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Menu;