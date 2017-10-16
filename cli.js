var program = require('commander');

program
    .version(require('../package.json').version)
    .usage('[command] [options] [directory]')
    .option('-h, --help', 'I\'ll help you the copy your files for with other variables or it changed.')
    .parse(process.argv);