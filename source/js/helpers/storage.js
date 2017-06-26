const storageKey = '__BookStorage.Cart__';


const BookStorage = {
    initStorage: (object) => {
        const defaultStorage = {
            cart: []
        };

        BookStorage.set(JSON.stringify(defaultStorage));

        return defaultStorage;
    },
    addToCart: (object) => {
        const storage = BookStorage.get();
        let isInCart;

        object.quantity = 1;

        storage.cart.map((book) => {
            if (book.id === object.id) {
                book.quantity++;
                isInCart = true;
            }

            return book;
        });

        if (!isInCart) {
            storage.cart.push(object);
        }

        return BookStorage.set(storage);
    },
    removeFromCart: (object) => {
        const storage = BookStorage.get(),
            newStorage = storage;
        
        newStorage.cart = storage.cart.filter((book) => {
            if (book.id === object.id) {
                book.quantity--;
            }

            return book.quantity > 0;
        });

        return BookStorage.set(newStorage);
    },
    set: (object) => {
        const newObject = JSON.stringify(object);

        sessionStorage.setItem(storageKey, newObject);

        return newObject;
    },
    get: () => {
        const storage = JSON.parse(sessionStorage.getItem(storageKey));

        return storage && storage.cart ? storage : BookStorage.initStorage();
    }
};

export default BookStorage;