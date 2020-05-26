const { expect } = require('chai');
const sign = require('../src/index.js');

describe('jwt', () => {
  it('should be able to sign a basic jwt', () => {
    const secret = 'secret';
    const data = {
      sub: '1234567890',
      name: 'John Doe',
      iat: 1516239022
    };
    const jwt = sign(data, secret);
    const expected = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o';
    expect(jwt).to.equal(expected);
  });

  it('should be able to sign a unicode payload', () => {
    const secret = 'secret';
    const data = {
      payload: 'eugene rules — 💻'
    };
    const jwt = sign(data, secret);
    const expected = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjoiZXVnZW5lIHJ1bGVzIOKAlCDwn5K7In0.ZjO6iIgwJHSRD2IwFDUdyVkQeXW_37Jb2DJPkrdAc_w';
    expect(jwt).to.equal(expected);
  });
});
