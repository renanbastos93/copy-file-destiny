const fs = require('fs');
// const copyFileDestiny = {};

function init(param){
  _readyFile = fs.readFileSync(__dirname+'/'+param[0], 'utf8');
  changeVariables('teste', 'renan', _readyFile, param[1]);
};

function changeVariables(oldVar, newVar, ready, file){
  ready = ready.split(oldVar).join(newVar);
  fs.createWriteStream(file, 'utf8').write(ready);
}

init(['newTeste.js', 'endTeste.js']);
// init({0:'newTeste.js', 1:'endTeste.js'});

function copyFileDestiny(oldVar, newVar, ready, file){
   if(Array.isArray(oldVar) && Array.isArray(newVar)){
      return this.changeVariables(arguments);
   }
   if(Array.isArray(oldVar) || Array.isArray(newVar)){
     return {error: new Error('Arguments of lenght different')};
   }

};

copyFileDestiny.prototype = copyFileDestiny;

copyFileDestiny.prototype.changeVariables = function(oldVar, newVar, ready, file){
  ready = ready.split(oldVar).join(newVar);
};
