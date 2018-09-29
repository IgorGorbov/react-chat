window.requestAnimationFrame = callback => {
  setTimeout(callback, 0);
  return 0;
};

import * as Enzyme from 'enzyme';
import { default as Adapter } from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// console.error = (message: any) => {
//   throw new Error(message);
// };
