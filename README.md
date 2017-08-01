## About
Copying file to a new destiny with new names of the variables. 

### What is the purpose of this module?
The objective this module is for auxiliar the development of the developer's. How to example, he want create a new file that's go to enjoy some features. Let's suppose that you wish ...

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
copy(
        {
            "oldVar": "replaceVar",
            "oldVar2": "replaceOtherVar"
        }
        , "oldFile.js", "newFile.js"
    );
```

## API

 Param name | Type | value
------------|---------|-------
vars | Object | {"KEY": "value"}
old file | String | *.js
new file | String | *.js 