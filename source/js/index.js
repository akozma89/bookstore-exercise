/* IMPORT STYLE */
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/index.scss';

/* IMPORT APPS */
import Menu     from './apps/menu';
import Content  from './apps/content';
import Footer   from './apps/footer';

import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
    (
        <Router>
            <div id="bookstore-app">
                <Menu />
                <Content />
                <Footer />
            </div>
        </Router>
    ),
    document.getElementById('bookstore-router') || document.createElement('div')
);
