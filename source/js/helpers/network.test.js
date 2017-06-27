import BookApi from './network';

describe('BookApi', () => {
    const googleBookAPIUrl = 'https://www.googleapis.com/books/v1/volumes';

    beforeEach(() => {
        // GIVEN
        fetch.resetMocks();
    });

    describe('.list call', () => {
        it('should send fetch on right url', () => {
            // GIVEN
            const mockQuery = 'testBook';

            // WHEN
            BookApi.list(mockQuery);

            // THEN
            expect(fetch).toHaveBeenCalledWith(`${googleBookAPIUrl}?q=${mockQuery}&printType=books&maxResults=12&orderBy=relevance&projection=full`);
            expect(fetch.mock.calls).toHaveLength(1);
        });

        it('should send fetch on right url with startIndex', () => {
            // GIVEN
            const mockQuery = 'testBook',
                startIndex = 12;

            // WHEN
            BookApi.list(mockQuery, startIndex);

            // THEN
            expect(fetch).toHaveBeenCalledWith(`${googleBookAPIUrl}?q=${mockQuery}&printType=books&maxResults=12&orderBy=relevance&projection=full&startIndex=${startIndex}`);
            expect(fetch.mock.calls).toHaveLength(1);
        });
    });

    describe('.get call', () => {
        it('should send fetch on right url', () => {
                // GIVEN
                const mockId = 'testBookId';

                // WHEN
                BookApi.get(mockId);

                // THEN
                expect(fetch).toHaveBeenCalledWith(`${googleBookAPIUrl}/${mockId}`);
                expect(fetch.mock.calls).toHaveLength(1);
        });
    });

    describe('.getCarouselData call', () => {
        it('should send fetch on right url', () => {
                // WHEN
                BookApi.getCarouselData();

                // THEN
                expect(fetch).toHaveBeenCalledWith(`${googleBookAPIUrl}?q=javascript&printType=books&maxResults=4&showPreorders=true&orderBy=relevance`);
                expect(fetch.mock.calls).toHaveLength(1);
        });
    });
});