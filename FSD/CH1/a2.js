data =JSON.parse ('{"name":"aisha","age":20}')
console.log(data)
console.log(data.name)
// { name: 'aisha', age: 20 }
// aisha



data1 = JSON.stringify({"name":"aisha","age":20})
console.log(data1)
console.log(data1.name)

// { "name": "aisha", "age": 20 }
// undefined

//  JSON.parse --> convert string to obj
//  JSON.stringify --> convert obj to string