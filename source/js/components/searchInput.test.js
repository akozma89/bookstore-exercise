import BookSearchInput from '../common/searchInput';
import { InputGroup, Button, FormControl, Glyphicon } from 'react-bootstrap/lib/';
import { Link } from 'react-router-dom';

import { shallow } from 'enzyme';

let bookSearchInputWrapper;

describe('BookSearchInput component', () => {
    beforeEach(() => {
        // GIVEN
        bookSearchInputWrapper = shallow(<BookSearchInput />);
    });

    it('should render BookSearchInput component with necessary items', () => {
        // THEN
        expect(bookSearchInputWrapper.find(InputGroup)).toHaveLength(1);
        expect(bookSearchInputWrapper.find(FormControl)).toHaveLength(1);
        expect(bookSearchInputWrapper.find(InputGroup.Button)).toHaveLength(1);
        expect(bookSearchInputWrapper.find(Link)).toHaveLength(1);
        expect(bookSearchInputWrapper.find(Button)).toHaveLength(1);
        expect(bookSearchInputWrapper.find(Glyphicon)).toHaveLength(1);
    });

    it('should update BookSearchInput state\'s searchValue if text input value is changing', () => {
        // GIVEN
        const expectedValue = 'New Value',
              searchInput = bookSearchInputWrapper.find(FormControl);

        expect(bookSearchInputWrapper.state('searchValue')).toBeFalsy();

        // WHEN
        searchInput.props().onChange({
            target: {
                value: expectedValue
            }
        });

        expect(bookSearchInputWrapper.state('searchValue')).toEqual(expectedValue);
    });
});