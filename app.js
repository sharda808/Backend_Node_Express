const http = require('http');
console.log('I was here');
 const requestHandle=(req,res) => {
console.log('I was here in handler');
}
const server = http.createServer(requestHandle);
server.listen(3000);