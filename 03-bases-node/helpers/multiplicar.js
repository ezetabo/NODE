const fs = require('fs');
const colors = require('colors');

// const crearArchivo = (base = 1) => {
//     let nombreArchivo = `tabla-${base}.txt`;
//     let data = `================================================\n` +
//         `=           Tabla del:  ${base}                =\n` +
//         `================================================\n`;
//     for (let i = 1; i <= 10; i++) {
//         data += `${base} X ${i}  = ${base * i}\n`;
//     }
//     //console.log(data);
//     fs.writeFileSync(nombreArchivo, data);
//     console.log(nombreArchivo, 'creado');
// }


// const crearArchivo = (base = 1) =>{
//     return new Promise((resolve, reject) => {        
//         let nombreArchivo = `tabla-${base}.txt`;
//         let data = `================================================\n` +
//                    `=           Tabla del:  ${base}                =\n` +
//                    `================================================\n`;
//         for (let i = 1; i <= 10; i++) {
//             data += `${base} X ${i}  = ${base * i}\n`;
//         }
//        // console.log(data);
//         fs.writeFileSync(nombreArchivo, data);
//         resolve(nombreArchivo);      
//     })
// }

const crearArchivo = async (base = 1, listar = false, hasta = 10) => {
    try {
        if (isNaN(base)) {
            throw new Error('La base debe ser un numero');
        }
        else {
            let data ='';
            let nombreArchivo = `tabla-${base}.txt`;
            let consola = `================================================\n`.green +
                `\t\t${colors.green('Tabla del:')}  ${colors.blue(base)}\n` +
                `================================================\n`.green;
            for (let i = 1; i <= hasta; i++) {
                consola += `${base} ${colors.magenta('X')} ${i}  ${colors.magenta('=')} ${base * i}\n`;
                data += `${base} X ${i}  = ${base * i}\n`;
            }
            if (listar) {
                console.log(consola);
            }
            fs.writeFileSync(`./files/${nombreArchivo}`, data);
            return nombreArchivo;
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}