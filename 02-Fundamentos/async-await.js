const empleados = [
    {
        id: 1,
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 20,
        direccion: 'Calle 123',
        telefono: '123456789'
    },
    {
        id: 2,
        nombre: 'Maria',
        apellido: 'Lopez',
        edad: 25,
        direccion: 'Calle 123',
        telefono: '123456289'
    },
    {
        id: 3,
        nombre: 'Pedro',
        apellido: 'Gonzalez',
        edad: 30,
        direccion: 'Calle 123',
        telefono: '123456789'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];

const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(empleado => empleado.id === id)?.nombre;
       empleado ? resolve(empleado) : reject(`No existe el empleado con id ${id}`);        
    });
};

const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find(salario => salario.id === id)?.salario;
       salario ? resolve(salario) : reject(`No existe el salario con id ${id}`);       
    });
};

const getInfoUsuario = async(id) => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El empleado ${empleado} tiene un salario de ${salario}`;
    } catch (error) {
        throw error;
    }
};

const id = 1;

getInfoUsuario(id)
  .then(msg => console.log(msg))
  .catch(error => console.log(error));