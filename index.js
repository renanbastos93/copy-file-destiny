const fs = require('fs');
const copyFileDestiny = {};

copyFileDestiny.exists = function(file){
  return fs.existsSync('./'+file);
};

copyFileDestiny.changeVariables = function(vars, ready){
	for(v in vars){
		ready = ready.replace(RegExp(v, 'gi'), vars[v]);
	};
	return ready;
};

copyFileDestiny.ready = function(file){
    return fs.readFileSync(__dirname+'/'+file, 'utf8');
};

copyFileDestiny.create = function(file){
  return fs.createWriteStream(file, 'utf8');
};

module.exports = function(vars, oldFile, newFile){
  var data = '';
  if(copyFileDestiny.exists(oldFile)){
    var ready = copyFileDestiny.ready(oldFile);
    data = copyFileDestiny.changeVariables(vars, ready);
  }
  if(data != ('' || null || undefined)){
    return copyFileDestiny.create(newFile).write(data);
  }
  return false;
};