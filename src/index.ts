 const server = require('./app/server');

server.listen(server.get('port'), function() {
    console.log("listening")
});
