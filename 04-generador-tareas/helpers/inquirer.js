import colors from 'colors';
import inquirer from 'inquirer';

const inquirerMenu = async () => {
    const menuOptions = [{
        type: 'list',
        name: 'menu',
        message: 'Seleccione una opción\n',
        choices:
            [
                {
                    value: 1,
                    name: `${'1.'.magenta} Crear tarea`
                },
                {
                    value: 2,
                    name: `${'2.'.magenta} Listar tareas`
                },
                {
                    value: 3,
                    name: `${'3.'.magenta} Listar tareas completadas`
                },
                {
                    value: 4,
                    name: `${'4.'.magenta} Listar tareas pendientes`
                },
                {
                    value: 5,
                    name: `${'5.'.magenta} Completar tareas`
                },
                {
                    value: 6,
                    name: `${'6.'.magenta} Borrar tarea`
                },
                {
                    value: 0,
                    name: `${'0.'.magenta} salir`
                }
            ]
    }];

    console.clear();
    console.log(colors.magenta('===================================='));
    console.log(colors.green('\tMenu Principal'));
    console.log(colors.magenta('====================================\n'));

    const { menu } = await inquirer.prompt(menuOptions)

    return menu;
};

const pausa = async () => {
    const result = [{
        type: 'input',
        name: 'pausa',
        message: `Presione ${'ENTER'.rainbow} para continuar`,
        choices: 'any'
    }];
    console.log('\n');
    await inquirer.prompt(result)
};

const leerInput = async (mensaje) => {
    const result = [{
        type: 'input',
        name: 'desc',
        message: mensaje,
        validate(value) {
            if (value.length === 0) {
                return 'Por favor ingrese un valor';
            } else {
                return true;
            }
        }
    }];
    const { desc } = await inquirer.prompt(result);
    return desc;
};

const listadoTareasBorrar = async (tareas = []) => {
   const choices = tareas.map((tarea,i )=>{
    const index =`${i + 1}.`.magenta;
        return {
            value: tarea.id,
            name: `${index} ${tarea.descripcion}`
        }
    });

    choices.unshift({
        value: '0',
        name: `${'0'.magenta} Cancelar`
    })

    const preguntas = [{
        type: 'list',
        name: 'id',
        message: 'Borrar\n',
        choices
            
    }];    

    const { id } = await inquirer.prompt(preguntas)
    return id;
   

}

const listadoTareasCompletar = async (tareas = []) => {
    const choices = tareas.map((tarea,i )=>{
     const index =`${i + 1}.`.magenta;
         return {
             value: tarea.id,
             name: `${index} ${tarea.descripcion}`,
             checked: tarea.completadoEn ? true : false
         }
     });
     
     const pregunta = [{
         type: 'checkbox',
         name: 'ids',
         message: 'Selecione la(s) tarea(s) que desea completar\n',
         choices
             
     }];    
 
     const { ids } = await inquirer.prompt(pregunta)
     return ids;
    
 
 }

const confirmar = async (mensaje) => {
    const preguntas = [
        {
            type: 'confirm',
            name: 'ok',
            message: mensaje
        }
    ];

    const {ok} = await inquirer.prompt(preguntas);
    return ok;
}


export {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar, 
    listadoTareasCompletar
}