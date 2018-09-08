// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import toJSON from 'enzyme-to-json';
// import { shallow } from 'enzyme';
// import App from '../App';
//
// describe('testing App component', () => {
//   it('should contain Root component', () => {
//     const result = shallow(<App />);
//     expect(result.find('Chat')).toHaveLength(1);
//   });
//
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(<App />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });
//
//   it('snapshot App component', () => {
//     const wrapper = shallow(<App />);
//     const tree = toJSON(wrapper);
//     expect(tree).toMatchSnapshot();
//   });
// });
