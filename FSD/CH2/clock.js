function clock() {
    const time = new Date().toLocaleTimeString({hour12 : false})
    console.log(time)
}
clock()
setInterval(clock,1000) 