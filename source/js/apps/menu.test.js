import Menu from './menu';
import { Navbar, Nav, Glyphicon } from 'react-bootstrap/lib/';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import BookSearchInput from '../common/searchInput';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Menu component', () => {
    it('should have router', () => {

    });

    it('should render Menu component with necessary items', () => {
        // GIVEN
        const menuWrapper = shallow(<Menu />);

        // THEN
        expect(menuWrapper.find(Navbar)).toHaveLength(1);
        expect(menuWrapper.find(Nav)).toHaveLength(1);
        expect(menuWrapper.find(BookSearchInput)).toHaveLength(1);
        expect(menuWrapper.find(Glyphicon)).toHaveLength(2);
        expect(menuWrapper.find(Link)).toHaveLength(2);
    });

    it('should match snapshot with menuSnapshot', () => {
        // GIVEN
        const menuSnapshot = renderer.create(
            <Router>
                <Menu />
            </Router>
        );

        // THEN
        expect(menuSnapshot.toJSON()).toMatchSnapshot();
    });
});