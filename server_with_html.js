var http=require('http');

var server=http.createServer((req,res)=>
{
  res.writeHead(200,{'Content-Type':'text/html'})
  //res.writeHead(200, {'Content-Type':'text/html'})
  if(req.url=='/')
     res.write("<h1><u>Hello World!!!!</u></h1>");
  else if(req.url=="/admin")
    res.write("Sorry, entry restricted!!!!!!!!");
  else
    res.write("Not a valid page");

  res.end();

});

server.listen(8080);
console.log("Server status   :   activated.......@8080");
