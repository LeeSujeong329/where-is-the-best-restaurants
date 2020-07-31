import React from 'react';
import renderer from 'react-test-renderer';

describe('SearchBar', () => {
  let SearchBar;

  beforeEach(() => {
    SearchBar = require('../../../../src/components/SearchBar').default;
  });

  it('렌더링 시킬 수 있다.', () => {
    // Given

    // When
    const json = renderer.create(<SearchBar />).toJSON();

    // Then
    expect(json).toMatchSnapshot();
  });

});