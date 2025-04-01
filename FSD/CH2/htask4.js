const http = require('http');


server=http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<html>
        <script>
        const msg = function () {
        console.log("Welcome Student");
    }
    setTimeout(msg,3000); 
    </script>
    </html>
    `);
    res.end();
}).listen(4010, () => {
    console.log("Server is running on http://localhost:4009");
});
