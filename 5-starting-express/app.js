 const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded());
app.use((req,res,next) => {
console.log("Request Received",req.url,req.method,req.body);
next();
});
app.get("/", (req,res,next) => {
res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  
  <title>Document</title>
</head>
<body>
  <h1>Welcome to First server</h1>
  <form action ="/buy-product" method="POST">
<input type="text" placeholder="Enter the product that you want" name="product">
<br />
<input type="text" placeholder="Enter your budget" name="budget">
<input type="submit">
  </form>
</body>
</html>`)

})
app.post("/buy-product",(req,res,next)=>{
    console.log(JSON.stringify(req.body));
  fs.writeFile('buy.json', JSON.stringify(req.body),(err) => {
  res.statusCode = 302;
  res.setHeader ('Location', '/product');
  res.end();
  })
  });
app.get("/product",(req,res,next) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  
  <title>Products</title>
</head>
<body>
  <h1>Product list will appear here.</h1>
</body>
</html>`)
})
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