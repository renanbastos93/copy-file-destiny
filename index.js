const fs = require('fs');
var api = {};

var copy = (old, actual, oldFile, newFile) => {
  if(api.exists(oldFile)){
    var ready = api.ready(oldFile);
    ready = (Array.isArray(old)) ? old.map((item, index) => {
      return (Array.isArray(actual) && actual.length == old.length) ?
      actual.map((act, index, arr) => {
        return api.changeVariablesVector(item, act, ready);
      }) : ready
    }) : api.changeVariablesSingle(old, actual, ready);
  }
  var data = (Array.isArray(ready)) ? ready.toString() : ready;
  return {stream: api.create(newFile), data: data};
};

api.exists = function(file){
  return fs.existsSync('./'+file);
};

api.changeVariablesSingle = function(old, actual, ready){
  return ready.split(old).join(actual);
};

api.changeVariablesVector = function(old, actual, ready){
  return ready.split(/\;/).map(item => {
    return item.replace(old, actual)
  });
};

api.ready = function(file){
    return fs.readFileSync(__dirname+'/'+file, 'utf8');
};

api.create = function(file){
  // return fs.createReadStream(file).pipe(ready);
  return fs.createWriteStream(file, 'utf8');
};

var a = copy(['SERVPUB', 'init'], ['renan2', 'end'], 'newTeste.js', 'muchParams.js');
var b = copy('SERVPUB', 'renan', 'newTeste.js', 'normaly.js');
a.stream.write(a.data)
b.stream.write(b.data)
