const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('===================='.green);
    console.log(`=== TABLA DE ${ base } ====`.green);
    console.log('===================='.green);
    let data = '';
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }`);
    }

}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('base No es un numero');
            return;
        }

        console.log(`limite = ${ limite } `);
        if (!Number(limite)) {
            reject('limite No es un numero');
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla-${ base }.txt`);
        });
    });
}

module.exports = {
    listarTabla,
    crearArchivo
}