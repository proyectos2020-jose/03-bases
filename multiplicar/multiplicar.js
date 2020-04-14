const fs = require('fs');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if(base.isNaN || limite.isNaN) {
            reject('El limite o la base no son numericos');
        }
        
        let data = '';
        for(let i = 1; i < limite; i++) {
            data += `${base} * ${i} = ${base * i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-${limite}.txt`, data, (err) => {
            if (err) reject(err)
            else resolve(`The file tabla-${base}-${limite}.txt has been saved!`);
        });
    });
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if(base.isNaN || limite.isNaN) {
            reject('La base o el límite introducidos no son números');
        } else {
            let data = '';
            for(let i = 0; i < limite; i++) {
                data += `${base} * ${i} = ${base * i} \n`;
            }
            resolve(data);
        }
    });
}

module.exports = {crearArchivo, listarTabla}

