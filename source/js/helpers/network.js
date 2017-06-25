const googleBookAPIUrl = 'https://www.googleapis.com/books/v1/volumes';

const BookApi = {
    list: (text) => {
        return fetch(`${googleBookAPIUrl}?q=${text}`);
    },
    get: (id) => {
        return fetch(`${googleBookAPIUrl}/${id}`);
    }
};


export default BookApi;