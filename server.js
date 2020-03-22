const express = require('express')
const app = express()

const hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000

app.use(express.static( __dirname + '/public' ));
//Express HBS engine
app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' );

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'César',
    })
})

app.get('/about', (req, res) => {
    res.render('about')
})
 
app.listen(port, () => {
    console.log(`escuchando peticiones en el puesto ${port}`);
})