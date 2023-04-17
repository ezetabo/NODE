const colors = require('colors');

const mostrarMenu = () => {
    console.clear();
    return new Promise(resolve => {
        console.log(colors.green('===================================='));
        console.log(colors.green('\tMenu Principal'));
        console.log(colors.green('====================================\n'));

        console.log(`${'1.'.blue} Crear tarea`);
        console.log(`${'2.'.blue} Listar tareas`);
        console.log(`${'3.'.blue} Listar tareas completadas`);
        console.log(`${'4.'.blue} Listar tareas pendientes`);
        console.log(`${'5.'.blue} Completar tareas`);
        console.log(`${'6.'.blue} Borrar tarea`);
        console.log(`${'0.'.blue} salir\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question('Ingrese una opcion: ', (opcion) => {
            readline.close();
            resolve(opcion);
        });
    });
}

const pausa = () => {
    return new Promise(resolve => {
        ;
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readline.question(`\nPresione ${'ENTER'.rainbow} para continuar\n`, (opcion) => {
            readline.close();
            resolve();
        });
    })
};

module.exports = {
    mostrarMenu,
    pausa
}