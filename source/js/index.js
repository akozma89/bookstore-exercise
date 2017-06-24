/* IMPORT STYLE */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

/* IMPORT APPS */
import Menu from './apps/menu';
import Content from './apps/content';
import Footer from './apps/footer';

ReactDOM.render(
    <Menu />,
    document.getElementById('bookstore-menu') || document.createElement('div')
);

ReactDOM.render(
    <Content />,
    document.getElementById('bookstore-content') || document.createElement('div')
);

ReactDOM.render(
    <Footer />,
    document.getElementById('bookstore-footer') || document.createElement('div')
);

