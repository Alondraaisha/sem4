url = require('url')
addr = "http://sites.google.com/view/search/?year=2025&month=April"
u = url.parse(addr, true) // true: object  false: string
console.log(u)
console.log(u.query)