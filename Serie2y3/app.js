const express = require('express');
const bodyParser = require('body-parser');


const pizza = require('./routes/pizzas.route');

const app = express();


const mongoose = require('mongoose');
let dev_db_url = 'mongodb://lpovalle:ovalle.08O@ds037097.mlab.com:37097/pizzas';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/pizzas', pizza);


app.listen(4000, () => {

console.log('Server listening on port 4000');

});