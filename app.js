const http = require('http');
console.log('I was here');
 const requestHandle=(req,res) => {
console.log('I was here in handler',req);
}
const server = http.createServer(requestHandle);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`)
})