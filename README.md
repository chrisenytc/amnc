# AMNC [![Build Status](https://secure.travis-ci.org/chrisenytc/amnc.png?branch=master)](http://travis-ci.org/chrisenytc/amnc) [![NPM version](https://badge-me.herokuapp.com/api/npm/amnc.png)](http://badges.enytc.com/for/npm/amnc)

> Detect the browser name, browser version, os name, plataform, country, region, city and others.

## Getting Started
Install the module with: 

```bash
$ npm install amnc
```

```javascript
var amnc = require('amnc');
amnc.parse('userAgentString', 'ip');
```

## Documentation

#### .parse(userAgentString, ip)

**Parameter**: `userAgentString`
**Type**: `String`

**Example**: `Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36`


**Parameter**: `ip`
**Type**: `String`
**Example**: `207.97.227.239`

The 'parse' method is responsible for parse the data and return a json object with result.

How to use this method

```javascript
var result = amnc.parse('Mozilla/5.0 (X11; Linux i686) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.116 Safari/537.36', '207.97.227.239');
//Show
console.log(result);
```

## Contributing

Please submit all issues and pull requests to the [chrisenytc/amnc](http://github.com/chrisenytc/amnc) repository!

## Support
If you have any problem or suggestion please open an issue [here](https://github.com/chrisenytc/amnc/issues).

## License 

The MIT License

Copyright (c) 2014, Christopher EnyTC

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

