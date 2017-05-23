const fs = require('fs');
const copyFileDestiny = {};

function init(param){
  _readyFile = fs.readFileSync(__dirname+'/'+param, 'utf8');
  changeVariables('teste', 'renan', _readyFile, param);
};

function changeVariables(oldVar, newVar, ready, file){
  ready = ready.split(oldVar).join(newVar);
  fs.createWriteStream(file, 'utf8').write(ready);
}

init('newTeste.js')
