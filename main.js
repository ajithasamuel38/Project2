const path = require ('path');

const express = require('express');

const bodyParser = require('body-parser');

const app = express();


const errorController = require('./controller/error');

const adminroutes = require('./routes/admin');

const shoproutes = require('./routes/shop');

const contactroutes = require('./routes/contactus');


app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminroutes);

app.use(shoproutes);

app.use (contactroutes);

app.use(errorController.get404PageFile);

app.listen(3000);