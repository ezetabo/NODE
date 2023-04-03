var nombre = 'Eze'; //->>> variable global

if (true) {
    let nombre = 'Pepe' //->>> local al scope donde fue declarada, valor mutable
}

const nombre = 'jorgue' //->>> local al scope donde fue declarada, valor inmutable

console.log(nombre);
