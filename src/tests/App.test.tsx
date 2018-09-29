import * as React from 'react';
import toJSON from 'enzyme-to-json';
import { shallow } from 'enzyme';
import App from '../App';

import RootContainer from '../client/containers/RootContainer';

describe('testing App component', () => {
  it('should contain Root component', () => {
    const result = shallow(<App />);
    expect(result.find(RootContainer)).toHaveLength(1);
  });

  it('snapshot App component', () => {
    const wrapper = shallow(<App />);
    const tree = toJSON(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
