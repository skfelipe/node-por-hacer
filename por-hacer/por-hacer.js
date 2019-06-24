const fs = require('fs');

let listadoporhacer=[];

const guardarDB = () =>{

    let data = JSON.stringify(listadoporhacer);

    fs.writeFile(`./db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo Grabar', err);
    });

}

const cargarDB = () =>{
    try {
        listadoporhacer = require('../db/data.json');
    } catch (error) {
        listadoporhacer = [];
    }
    

}
const getListado =()=>{
    cargarDB()
    return listadoporhacer;
}

const crear = (descripcion)=>{
    cargarDB();

    let porHacer ={
        descripcion,
        completado: false
    };
    listadoporhacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoporhacer.findIndex(tarea => tarea.descripcion=== descripcion );

    if(index >= 0){
        listadoporhacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) =>{
    cargarDB();
    let nuevoListado = listadoporhacer.filter(tarea =>{
        return tarea.descripcion !== descripcion
    });
    if(nuevoListado.length !== listadoporhacer.length){
        listadoporhacer = nuevoListado;
        guardarDB();
        return true;
    }else{        
        return false;
    }

}

module.exports = {
    crear,
    guardarDB,
    cargarDB,
    getListado,
    actualizar,
    borrar
}