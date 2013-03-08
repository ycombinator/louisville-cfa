var restify = require('restify'),
    routes = require('./routes')

var server = restify.createServer({
    name: 'dashboard-api',
    version: '0.0.1'
})

// Routes
server.get('/dashboard-api/v1/hello', routes.v1.hello.get)


server.listen(8001, function() {
    console.log('%s listening at %s', server.name, server.url);
})
