const initialData = require('../chats');

module.exports = function() {
  const chats = new Map(initialData);

  return chats;
};
