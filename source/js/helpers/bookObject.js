const buildBookObject = (book) => {
    const bookVolumeInfo    = book.volumeInfo,
          saleInfo          = book.saleInfo;

    return {
        id:                     book.id,
        title:                  bookVolumeInfo.title,
        description:            bookVolumeInfo.description,
        images:                 bookVolumeInfo.imageLinks,
        authors:                bookVolumeInfo.authors,
        publishedDate:          bookVolumeInfo.publishedDate,
        industryIdentifiers:    bookVolumeInfo.industryIdentifiers,
        saleInfo:               (saleInfo && saleInfo.saleability === 'FOR_SALE') && {
            price: saleInfo.listPrice
        }
    };
};

export default buildBookObject;