import * as React from 'react';
import toJSON from 'enzyme-to-json';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import CurrentChatContainer from '../client/containers/CurrentChatContainer';
import SectionContactHeader from '../client/components/SectionContactHeader';
import SectionMessagesList from '../client/components/SectionMessagesList';

import { Map } from 'immutable';

describe('testing CurrentChatContainer', () => {
  interface IStore {
    session: Map<string, string | number>;
    chats: Map<string, any>;
    currentChat: Map<string, any>;
    filters: Map<string, string | number[]>;
    users: IUser[];
  }
  const initState: IStore = {
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
  const initStateWithChat: IStore = {
    session: Map({
      id: 1,
      name: 'test',
      avatar: 'test',
      status: 'offline',
    }),
    currentChat: Map({
      id: 'testId',
      companion: {
        id: 1,
        name: 'test2',
        avatar: 'test2',
        status: 'Online',
      },
    }),
    users: [],
    chats: Map({
      testId: {
        id: 'testId',
        users: [],
        messages: [],
      },
    }),
    filters: Map({ search: '', selectedMessages: [] }),
  };
  const mockStore = configureStore();

  it('should not contain SectionContactHeader & SectionMessagesList', () => {
    const store = mockStore(initState);
    const wrapper = mount(
      <Provider store={store}>
        <CurrentChatContainer />
      </Provider>,
    );
    expect(wrapper.find(SectionContactHeader)).toHaveLength(0);
    expect(wrapper.find(SectionMessagesList)).toHaveLength(0);
  });

  it('should contain SectionContactHeader & SectionMessagesList', () => {
    const store = mockStore(initStateWithChat);
    const wrapper = mount(
      <Provider store={store}>
        <CurrentChatContainer />
      </Provider>,
    );
    expect(wrapper.find(SectionContactHeader)).toHaveLength(1);
    expect(wrapper.find(SectionMessagesList)).toHaveLength(1);
  });

  it('snapshot CurrentChatContainer', () => {
    const store = mockStore(initStateWithChat);
    const wrapper = mount(
      <Provider store={store}>
        <CurrentChatContainer />
      </Provider>,
    );
    const tree = toJSON(wrapper);
    expect(tree).toMatchSnapshot();
  });
});
