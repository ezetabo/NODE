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

const salarios = [{
    id: 1,
    salario: 1000
},
{
    id: 2,
    salario: 2000
}
];

const getEmpleado = (id,callback) => {
    const empleado = empleados.find(empleado => empleado.id === id)?.nombre;
    if (!empleado) {
       return callback(`No existe el empleado con el id ${id}`);
    }
    return callback(null, empleado);
};

const getSalario = (id,callback) => {
    const salario = salarios.find(salario => salario.id === id)?.salario;
    if (!salario) {
       return callback(`No existe el salario con el id ${id}`);
    }
    return callback(null, salario);
};

const buscar = 3; 

getEmpleado(buscar,(error,empleado)=>{
    if(error) {
        console.log('Error!');
        return console.log(error);
    }
    getSalario(buscar,(error,salario)=>{
        if(error) {           
            return console.log(error);
        }
       
        console.log(`El empleado ${empleado} tiene un salario de ${salario}`);
    });
   
});