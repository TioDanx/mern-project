const mongoose = require('mongoose');
const URI = 'mongodb+srv://cluster0.dqtkz.mongodb.net/mern-project';
mongoose.connect(URI)
    .then(db => console.log('base de datos conectada'))
    .catch(err => console.log(err));

module.exports = mongoose;