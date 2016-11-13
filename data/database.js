var users = {
    1: { id: 1, name: "Leo", messages:[1,2,5] },
    2: { id: 2, name: "Mike", messages:[4,6,7] },
    3: { id: 3, name: "Raf", messages:[8,9,10] }
};

var messages = {
    1: { id: 1, text: 'Message 1' },
    2: { id: 2, text: 'Message 2' },
    3: { id: 3, text: 'Message 3' },
    4: { id: 4, text: 'Message 4' }
};

exports.getMessages = function (userid) {
  return users[userid].messages.map(function (mid) {
      return messages[mid];
  })
};

exports.users = users;