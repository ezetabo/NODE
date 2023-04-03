// setTimeout(()=>{
//     console.log('Hola mundo')
// },1000);

// const getUsuarioById = (id)=>{
//     const usuario = {
//         id,
//         nombre: 'eze'
//     }
//     setTimeout(()=>{
//         console.log(usuario)
//     },1500)
// };

// getUsuarioById(10);

const getUsuarioById = (id,tarea)=>{
    const info = {
        id,
        nombre: 'eze'
    }
    setTimeout(()=>{
        tarea(info)
    },1500)
};

getUsuarioById(10,(data)=>{
    console.log(data)
});