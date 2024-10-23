//

//imports
const express = require('express');
const app = express()

//constants
const hostname = '192.168.0.26';
const port = 3000;

//static files
app.use(express.static('public'));
app.use("/css", express.static(__dirname + '/public/css'))
app.use("/js", express.static(__dirname + '/public/js'))
app.use("/img", express.static(__dirname + '/public/img'))

//set views
app.set('views', './views')
app.set('view engine', 'ejs')

//server code/file serving code
app.get('', (req, res) => {
    res.render('index', {text: 'das is cool'});
})

app.get('/about', (req, res) => {
    res.render('about', {text: 'woah hello'});
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
 
