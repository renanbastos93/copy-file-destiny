const fs = require('fs');
var api = {};

var copy = (vars, oldFile, newFile) => {
  var data = '';
  if(api.exists(oldFile)){
    var ready = api.ready(oldFile);
    data = api.changeVariables(vars, ready);
  }
  return {stream: api.create(newFile), data: data};
};

api.exists = function(file){
  return fs.existsSync('./'+file);
};

api.changeVariables = function(vars, ready){
	for(v in vars){
		ready = ready.replace(RegExp(v, 'gi'), vars[v]);
	};
	return ready;
};

api.ready = function(file){
    return fs.readFileSync(__dirname+'/'+file, 'utf8');
};

api.create = function(file){
  return fs.createWriteStream(file, 'utf8');
};

// var a = copy({teste: 'renan', init: 'inicio', fim: 'end'},'newTeste.js', 'muchParams.js');
// var b = copy({'teste': 'renan'}, 'newTeste.js', 'normaly.js');
// a.stream.write(a.data)
// b.stream.write(b.data)
