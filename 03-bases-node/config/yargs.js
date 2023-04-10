const argv = require('yargs')
    .option({
        'b': {
            alias: 'base',
            demandOption: true,            
            describe: 'numero base para generar la tabla de multiplicar',
            type: 'number'
        },
        'l':{
            alias: 'listar',
            demandOption: false, 
            default: false,                  
            describe: 'activar/desactrivar la impresion de la tabla de multiplicar',
            type:'boolean'
        },
        'h':{
            alias: 'hasta',
            demandOption: false, 
            default: false,                  
            describe: 'indica hasta que numero se va a multiplicar',
            type:'number'
        }
    })
    .check((argv, option) => {
        if (isNaN(argv.base)) {
            throw 'La base debe ser numerica';
        }
        if (isNaN(argv.h)) {
            throw 'El limite h/hasta debe ser numerico';
        }
        return true;
    })
    .argv;

    module.exports = argv;