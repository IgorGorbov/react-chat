const initialChats: any = require('../dataUsers').initChats;

module.exports = function() {
  const helpers = require('./helpers');

  let chats: any = new Map(<any>(
    Object.values(initialChats).map((c: any) => [c.id, c])
  ));

  function getAllChats() {
    return helpers.mapToObj(chats);
  }

  function updateChats(updateUsers: any) {
    if (!updateUsers) return;
    const allChats = Object.values(helpers.mapToObj(chats));
    return allChats.map((chat: any) => {
      const chatUsers = chat.users.map((chatUser: any) => {
        let afterUpUser = chatUser;
        updateUsers.forEach((updateUser: any) => {
          if (updateUser.id === chatUser.id) {
            afterUpUser = updateUser;
          }
        });
        return afterUpUser;
      });
      return { ...chat, users: chatUsers };
    });
  }

  function getUserChats(user: any, users: any) {
    const allChats = helpers.objToMap(updateChats(users));

    return Object.values(allChats).reduce((acc: any, chat: any) => {
      const isBelongs = chat.users.some((u: any) => u.id === user.id);
      if (isBelongs) {
        return { ...acc, ...{ [chat.id]: chat } };
      }
      return acc;
    }, {});
  }

  function addChat(user: any, companion: any) {
    const id = new Date().getMilliseconds();
    const newChat: any = {
      id,
      users: [user, companion],
      messages: [],
    };
    chats.set(id, newChat);
    return newChat;
  }

  function removeChatById(id: any) {
    chats.delete(id);
  }

  function getChatById(id: any) {
    return chats.get(id);
  }

  function addMessage(text: string, chatId: number, user: any, companion: any) {
    const currentChat = getChatById(chatId);
    const time = helpers.getTime();

    const newMessage = {
      id: time.time,
      text,
      from: user,
      to: companion,
      date: `${time.day}/${time.month}/${time.year} - ${time.hours}:${
        time.minutes
      }`,
      deletedBy: [],
      isRead: false,
    };
    currentChat.messages.push(newMessage);
    chats.set(currentChat.id, currentChat);

    return newMessage;
  }

  function deleteMessages({
    selectedMessages,
    currentUserID,
    currentChatId,
  }: {
    selectedMessages: number[];
    currentUserID: number;
    currentChatId: number;
  }) {
    const currentChat = getChatById(currentChatId);
    const messages = currentChat.messages;
    const updateMessages = messages.map((message: any) => {
      if (selectedMessages.includes(message.id)) {
        return {
          ...message,
          deletedBy: [...message.deletedBy, currentUserID],
        };
      }
      return message;
    });
    chats.set(currentChat.id, { ...currentChat, messages: updateMessages });

    return updateMessages;
  }

  return {
    getAllChats,
    getUserChats,
    addChat,
    removeChatById,
    addMessage,
    deleteMessages,
    getChatById,
  };
};
