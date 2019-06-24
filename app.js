const colors = require("colors");
const argv = require('./config/yargs').argv;
const porhacer = require('./por-hacer/por-hacer');


//console.log(argv);

let comando = argv._[0];


switch(comando){
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);
        console.log(tarea);
    break;
    case 'listar':
        let listado = porhacer.getListado();
        for(let tarea of listado){
            console.log("====Por Hace=======".green);
            console.log(tarea.descripcion);
            console.log("Estado", tarea.completado);
            console.log("===================".green);
        }
    break;
    case 'actualizar':
        //console.log("asdsa");
    
        let resultado = porhacer.actualizar(argv.descripcion, argv.completado);
        if(resultado){
            console.log("Actualizado Correctamente.");
        }else{
            console.log("Sin Resultados para Actualizar.");
        }


    break;
    case 'borrar':
            let borrado = porhacer.borrar(argv.descripcion);
            console.log(borrado);

    break;
    default:
        console.log('Comando no es reconocido.');
    
}