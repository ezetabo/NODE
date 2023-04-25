import * as dotenv from 'dotenv';
dotenv.config();
import {
    inquirerMenu, pausa, leerInput, listarLugares,
    confirmar, listadoTareasCompletar
} from './helpers/inquirer.js';
import { Busquedas } from './models/busquedas.js';

//console.log(process.env.MAPBOX_KEY);

const main = async () => {
    let options = 0;
    const busquedas = new Busquedas();  
    do {
        options = await inquirerMenu('Seleccione una opcion: ');
        switch (options) {
            case 1:
                const lugar = await leerInput('Ciudad: ');
                const lugares = await busquedas.ciudad(lugar);
                const seleccion = await listarLugares(lugares);

                if (seleccion !== '0') {
                    const ciudad = await Busquedas.buscarCiudad(lugares, seleccion);
                    const clima = await busquedas.climaLugar(ciudad.lat, ciudad.long)
                    busquedas.agregarHistorial(ciudad.nombre);
                    Busquedas.mostrarCiudadClima(ciudad, clima);
                }else{
                    continue;
                }

                break;
            case 2:
                busquedas.historial.forEach((lugar,i)=>{
                    const index  = `${i + 1}`.green;
                    console.log(`${index} ${lugar}`);
                });
                
                break;
        }
        if (options != 0) { await pausa(); }
    } while (options != 0);
}

main();