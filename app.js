const http = require('http');

http.createServer((req,res) => {

    res.writeHead(200, {'Content_Type': 'application/json'})

    const salida = {
        nombre: 'César',
        edad: '26',
        url: req.url
    }
    res.write(JSON.stringify(salida));
    // res.write('Hola mundo');
    res.end();
})
.listen(8080);