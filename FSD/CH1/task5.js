data = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]
function formListToObj() {
    
    obj = {}
    for (i = 0; i< data.length; i++){
        data2 = data[i]
        obj[data2[0]] = data2[1]
        
    }
    console.log(obj)
}
formListToObj() //{ make: 'Ford', model: 'Mustang', year: 1964 }