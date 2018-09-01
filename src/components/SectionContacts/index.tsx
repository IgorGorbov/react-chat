import * as React from 'react';
import { SectionContactsList } from '../../styledComponents';
import UserInfoContainer from '../../containers/UserInfoContainer';
import ChatsListContainer from '../../containers/ChatsListContainer';
import SearchInput from '../../containers/SearchInput';

const SectionContacts = (): JSX.Element => {
  return (
    <SectionContactsList>
      <UserInfoContainer />
      <SearchInput />
      <ChatsListContainer />
    </SectionContactsList>
  );
};

export default SectionContacts;
