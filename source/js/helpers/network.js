const googleBookAPIUrl = 'https://www.googleapis.com/books/v1/volumes';

const BookApi = {
    list: (text, start) => {
        return fetch(`${googleBookAPIUrl}?q=${text}&printType=books&maxResults=12&orderBy=relevance&projection=full${start ? `&startIndex=${start}` : ''}`);
    },
    get: (id) => {
        return fetch(`${googleBookAPIUrl}/${id}`);
    },
    getCarouselData: () => {
        return fetch(`${googleBookAPIUrl}?q=javascript&printType=books&maxResults=4&showPreorders=true&orderBy=relevance`);
    }
};

export default BookApi;