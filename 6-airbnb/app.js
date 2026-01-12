 const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded());
app.use((req,res,next) => {
console.log("Request Received",req.url,req.method,req.body);
next();
});
app.use((req,res,next)=> {
    res.statusCode = 404;
  res.send(  `<!DOCTYPE html>
<html lang="en">
<head>
  
  <title>Error</title>
</head>
<body>
  <h1>404 Page not found</h1>
</body>
</html>`)
res.end();
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`)
})