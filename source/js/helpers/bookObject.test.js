import buildBookObject from './bookObject';

describe('buildBookObject', () => {
    const bookMock = {
              id: 1,
              volumeInfo: {
                  title:                  'mockTitle',
                  description:            'mockDescription',
                  imageLinks:             [],
                  authors:                [],
                  publishedDate:          'mockDate',
                  industryIdentifiers:    []
              },
              saleInfo: {
                  saleability:  'FOR_SALE',
                  listPrice:    []
              }
          },
          expectedBookMock = {
              id:                   1,
              title:                'mockTitle',
              description:          'mockDescription',
              images:               [],
              authors:              [],
              publishedDate:        'mockDate',
              industryIdentifiers:  [],
              saleInfo:             {
                  price: []
              }
          };

    it('should return expected book object with sale if saleability is "FOR_SALE"', () => {
        // WHEN
        const result = buildBookObject(bookMock);

        // THEN
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedBookMock));
    });

    it('should return expected book object with sale if saleability is "FOR_SALE"', () => {
        // GIVEN
        const bookMockNotForSale        = bookMock,
              expectedMockNotForSale    = expectedBookMock;

        bookMockNotForSale.saleInfo.saleability = 'NOT_FOR_SALE';
        expectedMockNotForSale.saleInfo         = false;

        // WHEN
        const result = buildBookObject(bookMockNotForSale);

        // THEN
        expect(JSON.stringify(result)).toEqual(JSON.stringify(expectedBookMock));
    });
});