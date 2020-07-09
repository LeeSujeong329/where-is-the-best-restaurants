describe('SearchBar : onChangeText', () => {
    let SearchBar;
    beforeEach(() => {
      SearchBar = require('../../../../src/components/SearchBar').default;
    });
    it('인자로 받은 text를 setState함수로 갱신할 수 있다.', () => {
      // Given
      SearchBar.prototype.setState = jest.fn();
      // When
      SearchBar.prototype.onChangeText('a');
      // Then
      expect(SearchBar.prototype.setState).toBeCalledWith({text: 'a'});
    });
  });