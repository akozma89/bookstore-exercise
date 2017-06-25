import BookApi from './network';

describe('BookApi', () => {
    const googleBookAPIUrl = 'https://www.googleapis.com/books/v1/volumes';

    beforeEach(() => {
        // GIVEN
        fetch.resetMocks();
    });

    it('should send fetch on right url if \'list\' called', () => {
        // GIVEN
        const mockQuery = 'testBook';

        // WHEN
        BookApi.list(mockQuery);

        // THEN
        expect(fetch).toHaveBeenCalledWith(`${googleBookAPIUrl}?q=${mockQuery}`);
        expect(fetch.mock.calls).toHaveLength(1);
    });

    it('should send fetch on right url if \'get\' called', () => {
        // GIVEN
        const mockId = 'testBookId';

        // WHEN
        BookApi.get(mockId);

        // THEN
        expect(fetch).toHaveBeenCalledWith(`${googleBookAPIUrl}/${mockId}`);
        expect(fetch.mock.calls).toHaveLength(1);
    });
});