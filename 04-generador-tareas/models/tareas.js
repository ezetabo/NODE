import colors from 'colors';
import { Tarea } from './tarea.js';

class Tareas {
    constructor() {
        this._listado = {};
    }

    getListadoArray() {
        const listado = [];
        Object.keys(this._listado).forEach(key => {
            listado.push(this._listado[key]);
        });
        return listado;
    }

    crearTarea(descripcion = '') {
        const tarea = new Tarea(descripcion);
        this._listado[tarea.id] = tarea;
    }

    cargarTareafromArray(info = []) {
        info.forEach(x => {
            this._listado[x.id] = x;
        })
    }

    imprimirTareas() {
        // this.getListadoArray().forEach(x, Y => {
        //     console.log(`Id: ${x.id} - Descripcion: ${x.descripcion} - Completado en: ${x.completadoEn}`);
        // })
        this.getListadoArray().forEach((tarea, pos, estado) => {
            estado = tarea.completadoEn != null ? "Completada".green : "Pendiente".red;
            console.log(`${++pos}. ${tarea.descripcion} :: ${estado}`);
        });
    }

    listarPorEstadoCompletadas(completada = true) {
        let imprimir = completada ? "Completada".green : "Pendiente".red;
        let pos = 1;
        this.getListadoArray().forEach((tarea, estado) => {
            estado = tarea.completadoEn != null ? "Completada".green : "Pendiente".red;
            if (imprimir === estado) {
                console.log(`${pos++}. ${tarea.descripcion} :: ${estado}`);
            }
        });
    }


}


export { Tareas }
