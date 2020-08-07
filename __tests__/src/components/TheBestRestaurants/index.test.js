import React from 'react';
import renderer from 'react-test-renderer';
import TheBestRestaurants from '../../../../src/components/TheBestRestaurants';

describe('TheBestRestaurants', () => {
  let SearchBar;

  beforeEach(() => {
    SearchBar = require('../../../../src/components/TheBestRestaurants').default;
  });

  it('렌더링 시킬 수 있다.', () => {
    // Given

    // When
    const json = renderer.create(<TheBestRestaurants />).toJSON();

    // Then
    expect(json).toMatchSnapshot();
  });

});