# copy-file-destiny

## About
Copying file to a new destiny with new names of the variables

### Docs
1. [English](#)
2. [Português](#)

## Install
```bash
$ npm i -S https://github.com/renanbastos93/copy-file-destiny.git
```

## Getting Start
```js
const copy = require('copy-file-destiny');
copy({
        "oldVar": "replaceVar",
        "oldVar2": "replaceOtherVar"
    }
    , "oldFile.js", "newFile.js")
    .stream.write(this);
```

## API

 Param name | Type | value
------------|---------|-------
vars | Object | {"KEY": "value"}
old file | String | *.js
new file | String | *.js 