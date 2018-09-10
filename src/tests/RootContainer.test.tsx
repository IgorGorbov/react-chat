import * as React from 'react';
import toJSON from 'enzyme-to-json';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import RootContainer from '../client/containers/RootContainer';
import ModalWindow from '../client/components/ModalLogin';
import { GridLayout } from '../client/styledComponents';
import { Map } from 'immutable';

describe('testing RootContainer', () => {
  interface IStore {
    session: Map<string, string | number>;
    chats: Map<string, IChat>;
    currentChat: Map<string, string>;
    filters: Map<string, string | number[]>;
    users: IUser[];
  }
  const initState: IStore = {
    session: Map({}),
    currentChat: Map({}),
    users: [],
    chats: Map({}),
    filters: Map({ search: '', selectedMessages: [] }),
  };
  const initStateWithUser: IStore = {
    session: Map({
      id: 1,
      name: 'test',
      avatar: 'test',
      status: 'offline',
    }),
    currentChat: Map({}),
    users: [],
    chats: Map({}),
    filters: Map({ search: '', selectedMessages: [] }),
  };

  const mockStore = configureStore();

  it('should contain ModalWindow', () => {
    const store = mockStore(initState);
    const wrapper = mount(
      <Provider store={store}>
        <RootContainer />
      </Provider>,
    );
    expect(wrapper.find(ModalWindow)).toHaveLength(1);
  });

  it('should contain GridLayout', () => {
    const store = mockStore(initStateWithUser);
    const wrapper = mount(
      <Provider store={store}>
        <RootContainer />
      </Provider>,
    );
    expect(wrapper.find(GridLayout)).toHaveLength(1);
  });

  it('snapshot RootContainer', () => {
    const store = mockStore(initState);
    const wrapper = mount(
      <Provider store={store}>
        <RootContainer />
      </Provider>,
    );
    const tree = toJSON(wrapper);
    expect(tree).toMatchSnapshot();
  });

  it('snapshot RootContainer with user', () => {
    const store = mockStore(initStateWithUser);
    const wrapper = mount(
      <Provider store={store}>
        <RootContainer />
      </Provider>,
    );
    const tree = toJSON(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
