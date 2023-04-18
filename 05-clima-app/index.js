import { inquirerMenu, pausa, leerInput, listadoTareasBorrar,
    confirmar,listadoTareasCompletar } from './helpers/inquirer.js';
import { Busquedas } from './models/busquedas.js';

const main  = async() =>{
    let options = 0;   
    const busquedas = new Busquedas();    
    do {
        options = await inquirerMenu('Seleccione una opcion: ');

        switch (options) {
            case 1:
                // mostrar mensaje
                const lugar = await leerInput('Ciudad: ');
                // buscar lugares
                // seleccionar el lugar
                // clientInformationmostrar resultados
                console.log('opcion 1');
                break;
            case 2:
                console.log('opcion 2');
                break;
           
            default:
                break;
        }      
        if(options != 0) {await pausa();}
    } while (options != 0);
}

main();