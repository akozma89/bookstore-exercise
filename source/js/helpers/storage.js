const storageKey = '__BookStorage.Cart__',
      defaultStorage = {
          cart: []
      };

const BookStorage = {
    initStorage: () => {
        BookStorage.set(defaultStorage);

        return defaultStorage;
    },
    addToStorage: (object) => {
        const storage = BookStorage.get();
        let isInCart;

        storage.cart.map((book) => {
            if (book.id === object.id) {
                book.quantity++;
                isInCart = true;
            }

            return book;
        });

        if (!isInCart) {
            object.quantity = 1;
            storage.cart.push(object);
        }

        return BookStorage.set(storage);
    },
    removeFromStorage: (object) => {
        const storage       = BookStorage.get(),
              newStorage    = storage;

        newStorage.cart = storage.cart.filter((book) => book.id !== object.id);

        return BookStorage.set(newStorage);
    },
    removeOneFromStorage: (object) => {
        const storage       = BookStorage.get(),
              newStorage    = storage;
        
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

        return object;
    },
    get: () => {
        const storage = JSON.parse(sessionStorage.getItem(storageKey));

        return storage && storage.cart ? storage : BookStorage.initStorage();
    }
};

export default BookStorage;