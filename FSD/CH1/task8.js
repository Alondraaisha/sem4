var test = {
    "division1": {

        "name": ["Z", "B", "H" , "AISHA"]

    },

    "division2": {

        "name": ["Y", "A", "G" , "ANJALI"]

    }

}
div1 = test.division1.name
div2 = test.division2.name
data = div1.concat(div2).sort()
console.log(data)