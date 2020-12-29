const express = require('express');
const exphbs  = require('express-handlebars');
const PORT = process.env.PORT || 8080
const app = express();
 
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res) {
    res.render('index');
});
 
app.listen(PORT, () => {
    console.log("App is listening to http://localhost:"+ PORT);
});