const http = require('http');


http.createServer((req, res) => {

    //res.setHeader('Content-Disposition', 'attaxhment; filename=lista.csv');
    //res.writeHead(200, {'Content-Type': 'application/csv'});

    res.write('id, nombre\n ');
    res.end();
    
})
.listen(8080);


console.log('Escuchando el puerto', 8080);