const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    const res = generateMessage('dylan', 'hello');
    expect(res).toInclude({
      from: 'dylan',
      text: 'hello'
    });
    expect(res.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate the correct location message object', () => {
    const res = generateLocationMessage('someone', 24, 8);
    expect(res).toInclude({
      from: 'someone',
      url: 'https://www.google.com/maps?q=24,8'
    });
    expect(res.createdAt).toBeA('number');
  });
});