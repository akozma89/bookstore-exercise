import renderer     from 'react-test-renderer';
import { shallow }  from 'enzyme';

import { Grid }                             from 'react-bootstrap/lib/';
import { BrowserRouter as Router, Route }   from 'react-router-dom';

import Content                              from './content';
import RootConfig                           from '../helpers/routes.config';

describe('Content component', () => {
    it('should render Content component with necessary items', () => {
        // GIVEN
        const contentWrapper = shallow(<Content />);

        // THEN
        expect(contentWrapper.find(Grid)).toHaveLength(1);
        expect(contentWrapper.find(Route)).toHaveLength(RootConfig.length);
    });

    it('should match snapshot with contentSnapshot', () => {
        // GIVEN
        const contentSnapshot = renderer.create(
            <Router>
                <Content />
            </Router>
        );

        // THEN
        expect(contentSnapshot.toJSON()).toMatchSnapshot();
    });
});