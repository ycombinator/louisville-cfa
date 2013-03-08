var httpProxy = require('http-proxy'),
    connect = require('connect')

var options = {
    router: {
        '.*/dashboard-api/(.*)': '127.0.0.1:8001/$1'
    }
}

httpProxy.createServer(connect.logger(), options).listen(process.env.PORT || 8000)


