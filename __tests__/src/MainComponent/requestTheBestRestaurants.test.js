describe('MainComponent : requestTheBestRestaurants', () => {
    let MainComponent;

    beforeEach(() => {
        MainComponent = require('../../../src/MainComponent').default;
    });

    it('API 요청을 할 수 있다.', () => {
        // Given
        const mockFetch = jest.fn();

        fetch = mockFetch;

        const sigunNM = '수원시';
        const path = 'https://openapi.gg.go.kr/PlaceThatDoATasteyFoodSt?SIGUN_NM=' + encodeURIComponent(sigunNM);
        const options = {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            },
        };

        // When
        MainComponent.prototype.requestTheBestRestaurants(sigunNM);

        // Then
        expect(mockFetch).toBeCalledWith(path, options);
    });
});