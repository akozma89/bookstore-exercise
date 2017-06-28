import Footer from './footer';
import { Grid } from 'react-bootstrap/lib/';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('Footer component', () => {
    it('should render Footer component with necessary items', () => {
        // GIVEN
        const footerWrapper = shallow(<Footer />);

        // THEN
        expect(footerWrapper.find('a')).toHaveLength(4);
        expect(footerWrapper.find('footer')).toHaveLength(1);
    });

    it('should match snapshot with footerSnapshot', () => {
        // GIVEN
        const footerSnapshot = renderer.create(<Footer />);

        // THEN
        expect(footerSnapshot.toJSON()).toMatchSnapshot();
    });
});