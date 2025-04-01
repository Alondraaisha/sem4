http = require('http')
server = http.createServer((req, res) => {

    res.write("<h1>How are you?</h1>") // after end any write will not be exicuted.
    res.write("hi ") // res.write can nor be empty...
    res.end("hello") // can be empty but compulsory

})

server.listen(5052)
console.log("server connnected")