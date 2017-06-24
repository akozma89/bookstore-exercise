import renderer from 'react-test-renderer';

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
    beforeEach(() => {
        container = document.createElement('div');
    });

    it('should properly initialised', () => {
        expect(Index).toBeDefined();
    });

    it('should render Menu without crash', () => {
        // GIVEN
        container.id = 'bookstore-menu';
        mockComponent = renderer.create(
            <Menu />
        );

        // WHEN
        ReactDOM.render(
            <Menu />,
            container
        );

        // THEN
        expect(mockComponent).toMatchSnapshot();
    });

    it('should render Content without crash', () => {
        // GIVEN
        container.id = 'bookstore-content';
        mockComponent = renderer.create(
            <Content />
        );

        // WHEN
        ReactDOM.render(
            <Content />,
            container
        );

        // THEN
        expect(mockComponent).toMatchSnapshot();
    });

    it('should render Footer without crash', () => {
        // GIVEN
        container.id = 'bookstore-footer';
        mockComponent = renderer.create(
            <Footer />
        );

        // WHEN
        ReactDOM.render(
            <Footer />,
            container
        );

        // THEN
        expect(mockComponent).toMatchSnapshot();
    });
});