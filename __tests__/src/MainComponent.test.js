import React from 'react';
import renderer from 'react-test-renderer';

describe('MainComponent', () => {
  let MainComponent;

  beforeEach(() => {
    MainComponent = require('../../src/MainComponent').default;
  });

  it('렌더링 시킬 수 있다.', () => {
    // Given

    // When
    const json = renderer.create(<MainComponent />).toJSON();

    // Then
    expect(json).toMatchSnapshot();
  });

});