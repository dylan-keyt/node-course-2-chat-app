const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  let users;
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Adrian',
      room: 'Dragon Ball Super'
    },{
      id: '2',
      name: 'Andrew',
      room: 'Dragon Ball GT'
    },{
      id: '3',
      name: 'Jodie',
      room: 'Dragon Ball Super'
    }];
  });

  it('should add new user', () => {
    const users = new Users();
    const user = {
      id: '123',
      name: 'Dylan',
      room: 'Dragon Ball Z'
    };
    const resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    users.removeUser('2');
    expect(users.users.length).toBe(2);
    expect(users.users).toEqual([{
      id: '1',
      name: 'Adrian',
      room: 'Dragon Ball Super'
    },{
      id: '3',
      name: 'Jodie',
      room: 'Dragon Ball Super'
    }]);
  });

  it('should not remove an invalid user', () => {
    users.removeUser('2234');
    expect(users.users.length).toBe(3);
  });

  it('should get a user', () => {
    const user = users.getUser('1');
    expect(user).toEqual({
      id: '1',
      name: 'Adrian',
      room: 'Dragon Ball Super'
    })
  });

  it('should not get a user that does not exist', () => {
    const user = users.getUser('9001');
    expect(user).toBe(undefined);
  });

  it('should return names for Dragon Ball Super', () => {
    const userList = users.getUserList('Dragon Ball Super');
    expect(userList).toEqual(['Adrian', 'Jodie']);
  });

  it('should return names for Dragon Ball GT', () => {
    const userList = users.getUserList('Dragon Ball GT');
    expect(userList).toEqual(['Andrew']);
  });
});
