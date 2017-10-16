const fs = require('fs');
const copyFileDestiny = {};

copyFileDestiny.exists = (file) => {
  return fs.existsSync('./'+file);
};

copyFileDestiny.changeVariables = (vars, ready) => {
	for(v in vars){
		ready = ready.replace(RegExp(v, 'gi'), vars[v]);
	};
	return ready;
};

copyFileDestiny.ready = (file) => {
    return fs.readFileSync(__dirname+'/'+file, 'utf8');
};

copyFileDestiny.create = (file) => {
  return fs.createWriteStream(file, 'utf8');
};

module.exports = (vars, oldFile, newFile) => {
  let data = '';
  if(copyFileDestiny.exists(oldFile)){
    const ready = copyFileDestiny.ready(oldFile);
    data = copyFileDestiny.changeVariables(vars, ready);
  }
  if(data != ('' || null || undefined)){
    return copyFileDestiny.create(newFile).write(data);
  }
  return false;
};