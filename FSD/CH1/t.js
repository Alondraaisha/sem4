const person = [{ name: "PQR", age: 38 }, { name: "ABC", age: 35 }, { name: "XYZ", age: 47 }]

function fun(person) {

    return person.sort((a, b) => a.name.localeCompare(b.name) )[0]
}
console.log(fun(person))