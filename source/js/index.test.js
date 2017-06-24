import Menu     from './apps/menu';
import Content  from './apps/Content';
import Footer   from './apps/Footer';

jest.mock('./apps/menu', () => 'MenuMock');
jest.mock('./apps/Content', () => 'Content');
jest.mock('./apps/Footer', () => 'Footer');

import Index from './index';

let mockComponent,
    container;

describe('index module', function() {
    const expectedResult = 'This isn\'t crashed';

    beforeEach(() => {
        // GIVEN
        container = document.createElement('div');
    });

    it('should properly initialised', () => {
        expect(Index).toBeDefined();
    });

    it('should be able to render Menu component without crash', () => {
        // WHEN
        ReactDOM.render(
            <Menu />,
            container
        );

        // THEN
        expect(expectedResult).toEqual(expectedResult);
    });

    it('should be able to render Content component without crash', () => {
        // WHEN
        ReactDOM.render(
            <Content />,
            container
        );

        // THEN
        expect(expectedResult).toEqual(expectedResult);
    });

    it('should be able to render Footer component without crash', () => {
        // WHEN
        ReactDOM.render(
            <Footer />,
            container
        );

        // THEN
        expect(expectedResult).toEqual(expectedResult);
    });
});