# jwt-encode

> Generate json webtokens in the browser

## Purpose
Sometimes you need to create a Json Webtoken (JWT) in the browser. This is very tiny module that enables this but only for the `HS256` algorithm and the `JWT` type.

## Usage

```js
const sign = require('jwt-encode');
const secret = 'secret';
const data = {
  sub: '1234567890',
  name: 'John Doe',
  iat: 1516239022
};
const jwt = sign(data, secret);
console.log(jwt);
//'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.XbPfbIHMI6arZ3Y922BhjWgQzWXcXNrz0ogtVhfEd2o'
```

## API

## sign(data, secret, options) ⇒ <code>string</code>
Create a very basic JWT signature

**Kind**: global function  
**Returns**: <code>string</code> - JSON Web Token that has been signed  

| Param | Type | Description |
| --- | --- | --- |
| data | <code>Object</code> | the data object you want to have signed |
| secret | <code>string</code> | secret to use to sign token with |
| options | <code>Object</code> | JWT header options |


## Installation

This module is installed via npm:

``` bash
$ npm install jwt-encode
```

## Attribution

Based on [this codepen](https://codepen.io/jpetitcolas/pen/zxGxKN)

## License

The BSD License

Copyright (c) 2020, Eugene Ware

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
