import Home from '../sections/home';
import Books from '../sections/books';
import Book from '../sections/book';
import Cart from '../sections/cart';

const RootConfig = [
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/books',
        component: Books
    },
    {
        path: '/books/:id',
        component: Book
    }
];

export default RootConfig;