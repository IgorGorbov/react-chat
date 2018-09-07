import { Socket } from 'socket.io';

const helpers = require('./helpers');

module.exports = function(
  client: Socket,
  clientManager: any,
  chatManager: any,
) {
  const handleGetUsers = (type: string, callback: any) => {
    return callback(null, clientManager.getUsers(type));
  };

  function handleRegister(userName: string, callback: any) {
    if (!clientManager.isUserAvailable(userName)) {
      return callback('user is not available');
    }

    const clientUser = clientManager.getCharacterByName(userName);
    clientManager.registerClient(client, clientUser);

    const users = clientManager.getUsers('available');
    const clients = clientManager.getClientWithoutUser();
    clients.forEach((c: any) => {
      if (c) {
        c.client.emit('getAvailableUsers', users);
      }
    });

    return callback(null, clientUser);
  }

  function handleAddChat(companion: any, callback: any) {
    const user = clientManager.getUserByClientId(client.id);
    const newChat = chatManager.addChat(user, companion);
    const clientCompanion = clientManager.getUserByName(companion.name);
    if (clientCompanion) clientCompanion.client.emit('newChat', newChat);

    return callback(null, newChat);
  }

  function handleDeleteChat(chatId: number) {
    const currentClient = clientManager.getUserByClientId(client.id);
    const chat = chatManager.getChatById(chatId);
    if (chat) {
      const companion = chat.users.find(
        (u: any) => u.name !== currentClient.name,
      );
      const companionClient = clientManager.getUserByName(companion.name);
      if (companionClient) {
        companionClient.client.emit('deleteChat', chatId);
      }
      chatManager.removeChatById(chatId);
    }
  }

  function handleGetUserChats(callback: any) {
    const user = clientManager.getUserByClientId(client.id);
    const chats = chatManager.getUserChats(
      user,
      clientManager.getUsers('selected'),
    );

    return callback(null, chats);
  }

  function handleMessage(text: string, chatId: number, companion: any) {
    const user = clientManager.getUserByClientId(client.id);
    const message = chatManager.addMessage(text, chatId, user, companion);
    const chat = chatManager.getChatById(chatId);

    chat.users.forEach((user: any) => {
      const socket = clientManager.getUserByName(user.name);
      if (socket) {
        socket.client.send(chatId, message);
      }
    });
  }

  function handleDeleteMessages(payload: number, callback: any) {
    const messages = chatManager.deleteMessages(payload);

    return callback(null, messages);
  }

  function handleChangeUserStatus(user: any) {
    const updateUser = clientManager.changeUser(client, user);
    const chats = helpers.mapToArr(
      chatManager.getUserChats(updateUser, clientManager.getUsers('selected')),
    );
    const chatsIds = chats.map((c: any) => c.id.toString());
    const companions = chats.reduce((acc: any, chat: any) => {
      const user = chat.users.filter(
        (user: any) => user.name !== updateUser.name,
      );
      return [...acc, ...user];
    }, []);
    companions.forEach((u: any) => {
      const socket = clientManager.getUserByName(u.name);
      if (socket) {
        socket.client.emit('updateUser', updateUser, chatsIds);
      }
    });
  }

  function handleDisconnect() {
    const user = clientManager.getUserByClientId(client.id);
    handleChangeUserStatus({ ...user, status: 'Offline' });
    clientManager.removeClient(client);
  }

  return {
    handleGetUsers,
    handleRegister,
    handleAddChat,
    handleDeleteChat,
    handleGetUserChats,
    handleDisconnect,
    handleMessage,
    handleDeleteMessages,
    handleChangeUserStatus,
  };
};
