import React from 'react';
import renderer from 'react-test-renderer'

import Navigation from '../index';

describe('Navigation', () => {
  test('Navigation renders without crashing', () => {
    const tree = renderer.create(
      <Navigation />
    ).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
