import{v4 as uuid4} from 'uuid';

class Tarea {
    constructor(descripcion) {
        this.id = uuid4();
        this.descripcion = descripcion;
        this.completadoEn = null;
    }   
}

export { Tarea }

