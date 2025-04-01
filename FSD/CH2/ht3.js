http = require('http')
server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': text / html })

    res.write(req.url) // res.write can nor be empty...
    res.write("<h1>How are you?</h1>") // after end any write will not be exicuted.
    res.end("hello") // can be empty but compulsory

})

server.listen(5053/"Kaise ho?")
console.log("server connnected")