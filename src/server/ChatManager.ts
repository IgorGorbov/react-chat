const helpers = require('./helpers');
const initialChats: any = require('../dataUsers').initChats;

module.exports = function() {
  let chats: any = new Map(<any>(
    Object.values(initialChats).map((c: any) => [c.id, c])
  ));

  function getAllChats() {
    return helpers.mapToObj(chats);
  }

  function getUserChats(user: any) {
    const allChats = helpers.mapToObj(chats);
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

  function getChatById(id: any) {
    return chats.get(id);
  }

  function addMessage(text: any, chatId: any, user: any, companion: any) {
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

  return {
    getAllChats,
    getUserChats,
    addChat,
    addMessage,
    getChatById,
  };
};
