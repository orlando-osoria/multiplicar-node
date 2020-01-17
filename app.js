//requires
const argv = require('./config/yargs').argv;

const colors = require('colors/safe');

const { CrearArchivo, ListarTabla } = require('./multiplicar/multiplicar');


let comando = argv._[0];

switch (comando) {
    case 'listar':
        ListarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        CrearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');

}

console.log(argv);

let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1];

// console.log(argv.base);