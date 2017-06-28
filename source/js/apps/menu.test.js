import renderer                             from 'react-test-renderer';
import { shallow }                          from 'enzyme';

import { Navbar, Glyphicon }                from 'react-bootstrap/lib/';
import { BrowserRouter as Router, Link }    from 'react-router-dom';

import Menu                                 from './menu';
import BookSearchInput                      from '../components/searchInput';

describe('Menu component', () => {
    it('should render Menu component with necessary items', () => {
        // GIVEN
        const menuWrapper = shallow(<Menu />);

        // THEN
        expect(menuWrapper.find(Navbar)).toHaveLength(1);
        expect(menuWrapper.find(Navbar.Form)).toHaveLength(1);
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