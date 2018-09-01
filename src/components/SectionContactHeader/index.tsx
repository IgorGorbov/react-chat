import * as React from 'react';
import ModalDeleteChat from '../../components/ModalDeleteChat';
import { statusColors } from '../../constants/user';
import {
  SectionContactHeader as ContactHeader,
  ContactInfoContainer,
  UserButton,
  UserAvatar,
  Text,
} from '../../styledComponents';

interface InterfaceContactHeaderProps {
  currentUser: IUser;
  user: IUser;
  currentChatId: number;
  selectedMessages: number[];
  deleteChat: (chatId: number) => { type: string; payload: number };
  deleteMessages: (
    selectedMessages: number[],
    currentUserID: number,
    currentChatId: number,
  ) => {
    type: string;
    payload: {
      selectedMessages: number[];
      currentUserID: number;
      currentChatId: number;
    };
  };
}

const SectionContactHeader = ({
  currentUser,
  user,
  currentChatId,
  deleteChat,
  selectedMessages,
  deleteMessages,
}: InterfaceContactHeaderProps) => {
  const isSelectedMessages: boolean = selectedMessages.length > 0;
  return (
    <ContactHeader>
      <UserAvatar
        src={user.avatar}
        size="tiny"
        circular={true}
        maxheight="65px"
        maxwidth="65px"
        bordersize="2px"
        bordercolor="grey"
        cursor="false"
      />
      <ContactInfoContainer>
        <Text
          textColor="#000"
          textSize="20px"
          textLineHeight="1.2"
          textWeight="500"
          textFontFamily="Titillium Web"
        >
          {user.name}
        </Text>
        <Text
          textColor={statusColors[user.status]}
          textSize="15px"
          textLineHeight="1"
          textWeight="500"
          textFontFamily="Titillium Web"
        >
          {user.status}
        </Text>
      </ContactInfoContainer>
      {isSelectedMessages ? (
        <UserButton
          buttonwidth="40px"
          buttonmargin="0 10px 0 auto"
          buttonheight="35px"
          color="red"
          icon="trash alternate outline"
          onClick={() =>
            deleteMessages(selectedMessages, currentUser.id, currentChatId)
          }
        />
      ) : (
        <ModalDeleteChat
          userName={user.name}
          currentChatId={currentChatId}
          deleteChat={deleteChat}
        />
      )}
    </ContactHeader>
  );
};

export default SectionContactHeader;
