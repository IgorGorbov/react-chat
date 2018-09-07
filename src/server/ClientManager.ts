import { Socket } from 'socket.io';

const users = require('../dataUsers');

declare interface IUser {
  id: number;
  name: string;
  avatar: string;
  status: string;
}

declare interface IClient {
  id: number;
  client: Socket;
  user: IUser;
}

module.exports = function() {
  const clients = new Map();
  const allUsers = users.initUsers;

  function addClient(client: Socket) {
    clients.set(client.id, { client });
  }

  function registerClient(client: Socket, user: IUser) {
    clients.set(client.id, { client, user });
  }

  function removeClient(client: Socket) {
    clients.delete(client.id);
  }

  function changeUser(client: Socket, user: IUser) {
    clients.set(client.id, { client, user });
    allUsers.forEach((u: IUser, i: number) => {
      if (u.id === user.id) {
        allUsers[i] = user;
      }
    });

    return clients.get(client.id).user;
  }

  function getUsers(type: string) {
    if (type === 'all') {
      return allUsers;
    }
    if (type === 'selected') {
      return Array.from(clients.values())
        .filter(c => c.user)
        .map(c => c.user);
    }
    const usersTaken = new Set(
      Array.from(clients.values())
        .filter(c => c.user)
        .map(c => c.user.name),
    );
    return allUsers.filter((u: IUser) => !usersTaken.has(u.name));
  }

  function isUserAvailable(userName: string) {
    return getUsers('all').some((u: IUser) => u.name === userName);
  }

  function getCharacterByName(userName: string) {
    return allUsers.find((u: IUser) => u.name === userName);
  }

  function getUserByClientId(clientId: number) {
    return (clients.get(clientId) || {}).user;
  }

  function getUserByName(userName: string) {
    return Array.from(clients.values()).find(
      (c: IClient) => c.user && c.user.name === userName,
    );
  }

  function getClientWithoutUser() {
    return Array.from(clients.values()).filter((c: IClient) => !c.user);
  }

  return {
    addClient,
    changeUser,
    registerClient,
    removeClient,
    getUsers,
    isUserAvailable,
    getCharacterByName,
    getUserByClientId,
    getUserByName,
    getClientWithoutUser,
  };
};
