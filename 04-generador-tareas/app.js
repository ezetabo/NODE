import colors from 'colors';
//const {mostrarMenu, pausa} = require('./helpers/mensajes');
import { inquirerMenu, pausa, leerInput, listadoTareasBorrar,
         confirmar,listadoTareasCompletar } from './helpers/inquirer.js';
// import { Tarea } from './models/tarea.js';
import { Tareas } from './models/tareas.js';
import { guardarDB, leerDB } from './helpers/guardarArchivo.js';


const main = async () => {
    let options = 0;
    let tareas = new Tareas();
    // console.log(leerDB());
    // await pausa(); 
    const data = leerDB();
    if (data) {
        tareas.cargarTareafromArray(data);
    }
    do {
        options = await inquirerMenu();

        switch (options) {
            case 1:
                const descripcion = await leerInput('descripcion:');
                tareas.crearTarea(descripcion);
                break;
            case 2:
                //console.log(tareas.getListadoArray());
                tareas.imprimirTareas();
                break;
            case 3:
                tareas.listarPorEstadoCompletadas();
                break;
            case 4:
                tareas.listarPorEstadoCompletadas(false);
                break;
            case 5:
                const ids = await listadoTareasCompletar(tareas.getListadoArray());
                tareas.toggleCompletdas(ids);
                //console.log(ids);
                break;
            case 6:
                const id = await listadoTareasBorrar(tareas.getListadoArray());
                if (id !=='0') {
                    const borrar = await confirmar('Confirme que desea eleminar');
                    if (borrar) {
                        if (tareas.borrarTarea(id)) {
                            console.log('Borrado Exitoso');
                        } else {
                            console.log('Se produjo un error al intentar borrar');
                        }
                    }
                }
                break;
            default:
                break;
        }

        guardarDB(tareas.getListadoArray());

        await pausa();
    } while (options != 0);
}

main();