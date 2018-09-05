const users = require('../dataUsers');

module.exports = function() {
  const clients = new Map();
  const allUsers = users.initUsers;

  function addClient(client: any) {
    clients.set(client.id, { client });
  }

  function registerClient(client: any, user: any) {
    clients.set(client.id, { client, user });
  }

  function removeClient(client: any) {
    clients.delete(client.id);
  }

  function getUsers(type: string) {
    if (type === 'all') {
      return allUsers;
    }
    const usersTaken = new Set(
      Array.from(clients.values())
        .filter(c => c.user)
        .map(c => c.user.name),
    );
    return allUsers.filter((u: any) => !usersTaken.has(u.name));
  }

  function isUserAvailable(userName: any) {
    return getUsers('all').some((u: any) => u.name === userName);
  }

  function getCharacterByName(userName: any) {
    return allUsers.find((u: any) => u.name === userName);
  }

  function getUserByClientId(clientId: any) {
    return (clients.get(clientId) || {}).user;
  }

  function getUserByName(userName: any) {
    return Array.from(clients.values()).find(
      (c: any) => c.user && c.user.name === userName,
    );
  }

  return {
    addClient,
    registerClient,
    removeClient,
    getUsers,
    isUserAvailable,
    getCharacterByName,
    getUserByClientId,
    getUserByName,
  };
};
