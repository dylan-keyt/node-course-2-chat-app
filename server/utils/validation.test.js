const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    expect(isRealString(5)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    expect(isRealString('       ')).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    expect(isRealString('I am Dylan and I am 24 years old')).toBe(true);
  });
});