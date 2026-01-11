 const fs = require('fs');
const {URLSearchParams} = require('url');const RequestHandler=(req,res) => {
console.log('Request Received', req.url, req.method);
res.setHeader('Content-Type', 'text/html');
if(req.url === "/"){
res.write(`<!DOCTYPE html>
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
</html>`);
res.end();
}
else if(req.url === "/buy-product"){
  console.log("Form data received");
  const buffer = [];
  req.on('data',(chunk) => {
    console.log(chunk);
    buffer.push(chunk);
  });
  req.on('end',()=> {
    const body = Buffer.concat(buffer).toString();
    const urlParams =  new URLSearchParams(body);
    const bodyJson = {};
    for(const[key,value] of urlParams.entries()){
bodyJson[key] = value;
    }
    console.log(JSON.stringify(bodyJson));
  fs.writeFile('buy.txt', JSON.stringify(bodyJson),(err) => {
  res.statusCode = 302;
  res.setHeader ('Location', '/product');
  res.end();
  console.log('Sending Resposne');
  })
  });

}
else if(req.url === "/product"){
res.write(`<!DOCTYPE html>
<html lang="en">
<head>
  
  <title>Products</title>
</head>
<body>
  <h1>Product list will appear here.</h1>
</body>
</html>`);

}
else{
  res.statusCode = 404;
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

 }

 exports.handler = RequestHandler;