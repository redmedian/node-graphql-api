// Подключаем GraphQL
var graphql = require('graphql');
// Подключаем БД (в нашем случае это файл с данными)
var data = require('./data.json');

// Создаем тип User
var userType = new graphql.GraphQLObjectType({
    name:'User',
    fields:{
        name:{
            type:graphql.GraphQLString
        },
        id:{
            type:graphql.GraphQLString
        }
    }
});

// Создаем базовый тип, который будет инкапсулировать в себя все оствльные типы и будет входной точкой запросов которые будет обрабатывать наше приложение
var queryType = new graphql.GraphQLObjectType({
    name:'Query',
    fields:{
        user:{
            type:userType,
            args:{
                id:{
                    type:graphql.GraphQLString
                }
            },
            // эти два аргумента root и args мы будем использовать для выборки данных из массива data.json
            resolve:function (root, args) {
                return data[args.id];
            }
        }

    }
});

// Опишем схему, функция которой будет принимать у нас в аргумент объект query
var schema = new graphql.GraphQLSchema({
    query:queryType
});

module.exports = schema;
