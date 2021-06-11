const express = require('express');
const morgan = require('morgan');
const { mongoose } = require('./database')
const path = require('path');
const app = express();


//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use('/xD', require('./routes/task.routes'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

//Starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});