// create js file to handle server which has home page to display "wlecome to home page" in h1 tag. about page if user ask about page it should provide messge "you are on about page." if user ask for any other page it should provide message " page not found!" by setting 404 status code.


http = require('http');

// Create the server
 http.createServer((req, res) => {
 
   

     if (req.url == '/') {
         res.writeHead(200, { 'Content-Type': 'text/html' });
       
         res.write('<h1>Welcome to Home Page</h1>');
         res.end()
     }
     else if (req.url == '/about') {
         res.write("About page")
         res.end()
     }
     else {
         res.writeHead(404, { 'Content-Type': 'text/html' });
         res.write("page not  found")
         res.end()
     }
}).listen(4003)
    