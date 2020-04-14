const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv; //Dentro de require se invoca a argv porque es lo que realmente se va a usar, sino estamos tratando argv como todo el módulo entero
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite).then(data =>
            console.log(data)).catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(fichero =>
            console.log('Se ha creado el archivo: ', colors.green(fichero))).catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
}

