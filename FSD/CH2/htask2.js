http = require("http")
http.createServer((req, res) => {
    if (req.url == "/") {
        const a = { "name": "Aisha", "age": 20 }
        res.writeHead(200, { 'content-Type': 'application/json' })
        res.write(JSON.stringify(a))
        res.end()
    }
}).listen(4005)