
fs=require("fs")
http = require('http');

// Create the server
http.createServer((req, res) => {



    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.write('<h1>Welcome to Home Page</h1>');
        res.end()
    }
    else if (req.url == '/login') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`
            <html>
            <body>
            <form action='#'>
            User Name: <input type="text"><br><br>
            Password: <input type="password"><br><br>
            <button>login</button><br><br>
            </form>
            </body>
            </html>
            `);
    }
    else if (req.url == '/gallery') {
        res.writeHead(200, { 'Content-Type': 'image/png' });
        var a=fs.readFileSync('c1.png')
        res.write(a)
        res.end()
    }

    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.write("page not  found")
        res.end()
    }
}).listen(4006)
