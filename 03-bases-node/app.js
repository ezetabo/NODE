const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

crearArchivo(argv.base,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.error(err));


// const [ , ,arg3='base=1'] = process.argv;
// const [ , base = 1] = arg3.split('=');
//const base = 7;
// crearArchivo(base);
//console.log(base);
