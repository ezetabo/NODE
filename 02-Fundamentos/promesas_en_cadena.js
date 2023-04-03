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

const id = 10;
let nombre;

getEmpleado(id)
   .then(empleado =>{
    nombre = empleado;
    return  getSalario(id)
   })
   .then(salario => console.log(`El empleado ${nombre} tiene un salario de ${salario}`))
   .catch(err => console.log(err));
