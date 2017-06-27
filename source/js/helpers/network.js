const googleBookAPIUrl = 'https://www.googleapis.com/books/v1/volumes';

const BookApi = {
    list: (text) => {
        return fetch(`${googleBookAPIUrl}?q=${text}&printType=books&maxResults=12`);
    },
    get: (id) => {
        return fetch(`${googleBookAPIUrl}/${id}`);
    },
    getCarouselData: () => {
        return fetch(`${googleBookAPIUrl}?q=javascript&printType=books&maxResults=3&showPreorders=true`);
    }
};


export default BookApi;