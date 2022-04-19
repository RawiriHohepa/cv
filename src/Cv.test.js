import React from 'react';
import renderer from 'react-test-renderer';
import Cv from './Cv';

test('should render correctly', () => {
  const component = renderer.create(
    <Cv />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
