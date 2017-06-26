const storageKey = '__BookStorage__';


const BookStorage = {
    set: (object) => {
        const newObject = JSON.stringify(object);

        return sessionStorage.setItem(storageKey, newObject);
    },
    get: () => {
        if (!sessionStorage.getItem(storageKey)) {
            const defaultStorage = {
                cart: []
            };

            sessionStorage.setItem(storageKey, defaultStorage);
        }

        return sessionStorage.getItem(storageKey);
    }
};


export default BookStorage;