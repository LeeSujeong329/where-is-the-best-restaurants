describe('MainComponent : setTheBestRestaurants', () => {
  let MainComponent;

  beforeEach(() => {
    MainComponent = require('../../../src/MainComponent').default;
  });

  it('맛집 리스트를 저장할 수 있다.', () => {
    // Given
    const theBestRestaurants = [];

    const mockSetState = jest.fn();

    MainComponent.prototype.setState = mockSetState; // 맞는지 확인

    // When
    MainComponent.prototype.setTheBestRestaurants(theBestRestaurants);

    // Then
    expect(mockSetState).toBeCalledWith({theBestRestaurants: theBestRestaurants});
  });
});