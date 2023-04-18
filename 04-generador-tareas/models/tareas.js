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

    borrarTarea(id = '') {
        if (this._listado[id]) {
            delete this._listado[id];
            return true
        }
        return false;
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
            console.log(`${((++pos) + '.').magenta}. ${tarea.descripcion} :: ${estado}`);
        });
    }

    listarPorEstadoCompletadas(completada = true) {
        let pos = 1;
        this.getListadoArray().forEach((tarea) => {
            if (completada) {
                if (tarea.completadoEn) {
                    console.log(`${((pos++) + '.').magenta} ${tarea.descripcion} :: ${tarea.completadoEn.green}`);
                }
            } else {
                if (!tarea.completadoEn) {
                    console.log(`${((pos++) + '.').magenta} ${tarea.descripcion} :: ${"Pendiente".red}`);
                }
            }

        });
    }

    toggleCompletdas(ids = []) {

        ids.forEach(id => {
            const tarea = this._listado[id];
            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toLocaleDateString();
            }
        });
        this.getListadoArray().forEach( tarea => {
            if (!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }

}


export { Tareas }
