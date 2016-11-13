# node-graphql-api
Node GraphQL API

## Run
```
$ npm start
```

## Registers the following routes:
```
GET /graphql
```

## Headers request:
```
key: query
value: { user(id: "1") {name messages {text}} }
```

## Http request:
```
GET: http://127.0.0.1:8080/graphql?query={user(id: "1"){name messages {text}}}
```

## Result:
```
{
  "data": {
    "user": {
      "name": "Leo",
      "messages": [
        {
          "text": "Message 1"
        },
        {
          "text": "Message 2"
        },
        null
      ]
    }
  }
}
```
## Links:

[Getting started graphql, part 1](https://www.youtube.com/watch?v=rm1GalQIoXI)

