// подключаем фреймворк express
var express = require('express');
// подключаем middleware GraphQL
var graphQL = require('express-graphql');
// подключаем схему которая у нас создана в ./data/schema.js
var schema = require('./data/schema');


// проинициализируем наше express приложение
var app = express();

var port = process.env.PORT || 8080;

app.use('/graphql', graphQL({ schema:schema, pretty:true }));

app.listen(port);
console.log('Server is running at port ' + port);