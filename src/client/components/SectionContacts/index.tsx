import * as React from 'react';
import { SectionContactsList } from '../../styledComponents/index';
import UserInfoContainer from '../../containers/UserInfoContainer/index';
import ChatsListContainer from '../../containers/ChatsListContainer/index';
import SearchInput from '../../containers/SearchInput/index';

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
