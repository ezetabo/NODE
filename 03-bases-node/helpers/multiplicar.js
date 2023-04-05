const fs = require('fs');

const crearArchivo = (base = 1) => {
    const nombre_archivo = `tabla-${base}.txt`;
    let data = `================================================\n` +
               `=           Tabla del:  ${base}                =\n` +
               `================================================\n`;
    for (let i = 1; i <= 10; i++) {
        data += `${base} X ${i}  = ${base * i}\n`;
    }
    fs.writeFileSync(nombre_archivo, data);
    console.log(`Archivo ${nombre_archivo} creado`);
}

module.exports = {
    crearArchivo
}