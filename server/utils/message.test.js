const expect = require('expect');

const {generateMessage} = require('./message');

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