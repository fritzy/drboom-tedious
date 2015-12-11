# Dr. Boom: Seaquell

![npm i drboom-tedious](https://nodei.co/npm/drboom-tedious.png)

Auto-cast errors from [tedious](https://npmjs.org/package/tedious) into Hapi HTTP Errors.

##Example / Boilerplate

Plugin registration boilerplate:

```javascript
var hapi = require('hapi');
var config = require('./config.json');
var Boom = require('boom');

var server = new hapi.Server();
server.connection(config);

server.register([{
    register: require('drboom'),
    options: {
        plugins: [require('drboom-tedious')()]
    },
}, function (err) {
    server.log(['startup'], 'Loaded pgboom plugin');
    server.start(function (err) {
        //...
    }
});
```

Now, you can pass your tedious errors right on through to hapi reply!

```javascript
function someHandler(request, reply) {
    mssql.query("some query", reply);
});
```

