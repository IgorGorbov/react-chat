const initialData = require('../dataUsers').initChats;

module.exports = function() {
  const chats = new Map(initialData);

  return chats;
};
