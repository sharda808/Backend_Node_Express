const http = require('http');

console.log('I was here');
 const requestHandle=(req,res) => {
console.log('Request Received', req.url, req.method, req.headers);
res.setHeader('Content-Type', 'text/html');
if(req.url == "/"){
res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  
  <title>Home</title>
</head>
<body>
  <h1>Welcome to First server</h1>
</body>
</html>`)
}
else if(req.url == "/product"){
res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  
  <title>Products</title>
</head>
<body>
  <h1>Product list will appear here.</h1>
</body>
</html>`)
}
else {
  res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  
  <title>Error</title>
</head>
<body>
  <h1>404 Page not found</h1>
</body>
</html>`)
}
res.end();
}
const server = http.createServer(requestHandle);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`)
})