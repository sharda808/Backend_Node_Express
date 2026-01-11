//Core module
const http = require('http');
// Local Module
const {handler} = require('./RequestHandler');

console.log('I was here');
const server = http.createServer(handler);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`)
})