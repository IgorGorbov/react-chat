module.exports = function(client: any, clientManager: any, chatManager: any) {
  const handleGetUsers = (type: any, callback: any) => {
    return callback(null, clientManager.getUsers(type));
  };

  function handleRegister(userName: any, callback: any) {
    if (!clientManager.isUserAvailable(userName)) {
      return callback('user is not available');
    }

    const user = clientManager.getCharacterByName(userName);
    clientManager.registerClient(client, user);

    return callback(null, user);
  }

  function handleAddChat(companion: any, callback: any) {
    const user = clientManager.getUserByClientId(client.id);
    const newChat = chatManager.addChat(user, companion);

    return callback(null, newChat);
  }

  function handleGetUserChats(callback: any) {
    const user = clientManager.getUserByClientId(client.id);
    const chats = chatManager.getUserChats(user);

    return callback(null, chats);
  }

  function handleMessage(text: any, chatId: any, companion: any) {
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

  function handleDisconnect() {
    clientManager.removeClient(client);
  }

  return {
    handleGetUsers,
    handleRegister,
    handleAddChat,
    handleGetUserChats,
    handleDisconnect,
    handleMessage,
  };
};
