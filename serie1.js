var jwt = require('jsonwebtoken');

var token = jwt.sign(
    { 
    'Pizzas': {
        'Descripción':'STRING',
        'Ingredientes' : 'ARRAY',
        'Tipo de masa' : 'STRING',
        'Tamaño' : 'STRING',
        'Número de porciones' : 'INT',
        'Extra queso' : 'BOOLEAN'
        } 
    }, 'secret', { algorithm: 'HS256'});

console.log(token);