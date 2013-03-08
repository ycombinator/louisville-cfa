var restify = require('restify'),
    routes = require('./routes')

var server = restify.createServer({
    name: 'dashboard-restapi',
    version: '0.0.1'
})

server.use(restify.CORS())
server.use(restify.fullResponse())

// Routes
server.get('/v1/hello', routes.v1.hello.get)

server.listen(process.env.PORT || 8000, function() {
    console.log('%s listening at %s', server.name, server.url);
})
