[{
  id: '/#5125637123y4f',
  name: 'Dylan',
  room: 'Dragon Ball Z'
}]

// addUser(id, name, room);
// removeUser(id);
// getUserList(room);

class Users {
  constructor() {
    this.users = [];
  }
  addUser(id, name, room) {
    const user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    const user = this.users.find(user => user.id === id);
    if (user) this.users.splice(this.users.indexOf(user), 1);
    return user;
  }
  getUser (id) {
    const user = this.users.find(user => user.id === id);
    return user;
  }
  getUserList (room) {
    const users = this.users.filter((user) => user.room === room);
    const namesArray = users.map(user => user.name);

    return namesArray;
  }
}

module.exports = {Users};

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription() {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }

// const me = new Person('Dylan', 24);
// const description = me.getUserDescription();
// console.log(description);