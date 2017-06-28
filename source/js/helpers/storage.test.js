import BookStorage from './storage';

const storageKey        = '__BookStorage.Cart__';
global.sessionStorage   = localStorage;

describe('BookStorage', () => {
    const defaultStorageMock = {
            cart: []
        },
        stringifiedStorageMock = JSON.stringify(defaultStorageMock),
        cartItemMock1 = {
            id: 1
        },
        cartItemMock2 = {
            id: 2
        },
        extendedStorageMock = {
            cart: [ cartItemMock1, cartItemMock2 ]
        };

    let returnedStorage;

    beforeEach(() => {
        // GIVEN
        sessionStorage.clear();
    });

    describe('.get method', () => {
        it(`should create storage under '${storageKey}' key in sessionStorage
            if it is not exists and return new storage`, () => {
            // WHEN
            returnedStorage = BookStorage.get();

            // THEN
            expect(sessionStorage.clear).toHaveBeenLastCalledWith(storageKey);
            expect(sessionStorage.getItem).toHaveBeenLastCalledWith(storageKey);
            expect(sessionStorage.setItem).toHaveBeenLastCalledWith(storageKey, stringifiedStorageMock);
            expect(JSON.stringify(returnedStorage)).toEqual(stringifiedStorageMock);
        });

        it(`should return storage object from '${storageKey}' key in sessionStorage`, () => {
            // GIVEN
            sessionStorage.setItem(storageKey, stringifiedStorageMock);

            // WHEN
            returnedStorage = BookStorage.get();

            // THEN
            expect(sessionStorage.getItem).toHaveBeenLastCalledWith(storageKey);
            expect(JSON.stringify(returnedStorage)).toEqual(stringifiedStorageMock);
        }); 
    });

    describe('.set method', () => {
        it(`should set '${storageKey}' key's value in sessionStorage and return an object`, () => {
            // WHEN
            returnedStorage = BookStorage.set(defaultStorageMock);

            // THEN
            expect(sessionStorage.setItem).toHaveBeenLastCalledWith(storageKey, stringifiedStorageMock);
            expect(JSON.stringify(returnedStorage)).toEqual(stringifiedStorageMock);
        }); 
    });

    describe('.addToStorage', () => {
        beforeEach(() => {
            // GIVEN
            sessionStorage.setItem(storageKey, stringifiedStorageMock);
        });

        describe('WHEN item is NOT in the cart array', () => {
            it('should add item to storage', () => {
                const expectedResult = JSON.stringify({
                    cart: [ { id: 1, quantity: 1 } ]
                });

                // WHEN
                returnedStorage = BookStorage.addToStorage(cartItemMock1);

                // THEN
                expect(sessionStorage.getItem).toHaveBeenLastCalledWith(storageKey);
                expect(sessionStorage.setItem).toHaveBeenLastCalledWith(storageKey, JSON.stringify(returnedStorage));
                expect(sessionStorage.getItem(storageKey)).toEqual(expectedResult);

                // WHEN
                returnedStorage = BookStorage.addToStorage(cartItemMock2);

                // THEN
                expect(sessionStorage.getItem).toHaveBeenLastCalledWith(storageKey);
                expect(sessionStorage.setItem).toHaveBeenLastCalledWith(storageKey, JSON.stringify(returnedStorage));
                expect(sessionStorage.getItem(storageKey)).toEqual(JSON.stringify(extendedStorageMock));
            }); 
        });

        describe('WHEN item is in the cart array', () => {
            beforeEach(() => {
                sessionStorage.setItem(storageKey, JSON.stringify(extendedStorageMock));
            });

            it('should increase inner object quantity number and NOT add new object', () => {
                const expectedResult        = extendedStorageMock,
                      expectedItemResult    = cartItemMock1,
                      expectedArrayLength   = extendedStorageMock.cart.length;

                // GIVEN
                expectedItemResult.quantity++;
                expectedResult.cart[0] = expectedItemResult;

                // WHEN
                returnedStorage = BookStorage.addToStorage(cartItemMock1);

                // THEN
                expect(sessionStorage.getItem).toHaveBeenLastCalledWith(storageKey);
                expect(sessionStorage.setItem).toHaveBeenLastCalledWith(storageKey, JSON.stringify(expectedResult));
                expect(sessionStorage.getItem(storageKey)).toEqual(JSON.stringify(expectedResult));
                expect(JSON.parse(sessionStorage.getItem(storageKey)).cart.length).toEqual(expectedArrayLength);
            }); 
        });
    });

    describe('.removeOneFromStorage', () => {
        it('should decrease inner object quantity number and not remove from array', () => {
            const expectedResult        = extendedStorageMock,
                  expectedArrayLength   = extendedStorageMock.cart.length;

            // GIVEN
            expectedResult.cart[0].quantity = 2;
            sessionStorage.setItem(storageKey, JSON.stringify(expectedResult));
            expectedResult.cart[0].quantity = 1;

            // WHEN
            returnedStorage = BookStorage.removeOneFromStorage(cartItemMock1);

            // THEN
            expect(sessionStorage.getItem).toHaveBeenLastCalledWith(storageKey);
            expect(sessionStorage.setItem).toHaveBeenLastCalledWith(storageKey, JSON.stringify(expectedResult));
            expect(sessionStorage.getItem(storageKey)).toEqual(JSON.stringify(expectedResult));
            expect(JSON.parse(sessionStorage.getItem(storageKey)).cart.length).toEqual(expectedArrayLength);
        });

        it('should remove inner object if the quantity less then 0', () => {
            const expectedResult        = extendedStorageMock,
                  expectedArrayLength   = extendedStorageMock.cart.length - 1;

            // GIVEN
            expectedResult.cart.shift();
            sessionStorage.setItem(storageKey, JSON.stringify(extendedStorageMock));

            // WHEN
            returnedStorage = BookStorage.removeOneFromStorage(cartItemMock1);

            // THEN
            expect(sessionStorage.getItem).toHaveBeenLastCalledWith(storageKey);
            expect(sessionStorage.setItem).toHaveBeenLastCalledWith(storageKey, JSON.stringify(expectedResult));
            expect(sessionStorage.getItem(storageKey)).toEqual(JSON.stringify(expectedResult));
            expect(JSON.parse(sessionStorage.getItem(storageKey)).cart.length).toEqual(expectedArrayLength);
        });
    });

    describe('.removeFromStorage', () => {
        beforeEach(() => {
            sessionStorage.setItem(storageKey, JSON.stringify(extendedStorageMock));
        });

        it('should completly remove inner object', () => {
            const expectedResult        = extendedStorageMock,
                  expectedArrayLength   = extendedStorageMock.cart.length - 1;

            // GIVEN
            expectedResult.cart.shift();
            sessionStorage.setItem(storageKey, JSON.stringify(extendedStorageMock));

            // WHEN
            returnedStorage = BookStorage.removeFromStorage(cartItemMock1);

            // THEN
            expect(sessionStorage.getItem).toHaveBeenLastCalledWith(storageKey);
            expect(sessionStorage.setItem).toHaveBeenLastCalledWith(storageKey, JSON.stringify(expectedResult));
            expect(sessionStorage.getItem(storageKey)).toEqual(JSON.stringify(expectedResult));
            expect(JSON.parse(sessionStorage.getItem(storageKey)).cart.length).toEqual(expectedArrayLength);
        });
    });
});