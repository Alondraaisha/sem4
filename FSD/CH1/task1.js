const a = {

    "Datastructures":

        [

            {

                "Name": "tree",

                "course": "Intro",

                "content": ["1", "B", "C"]

            },

            {

                "Name": "tree1",

                "course": "Intro1",

                "content": ["1", "B", "C", "d"]

            }

        ],

    "xyz":

    {

        "Name": "Graphics",

        "Topic": ["BFS", "CDF", "Sorting"],

    }

}

console.log(a.Datastructures[1].Name)
console.log(a.Datastructures[0].Name)
console.log(a.xyz.Name)
console.log(a.xyz.Topic)
console.log(a.xyz.Topic[0])
console.log(a.Datastructures[0])
console.log(a.xyz.Topic[3])
console.log(a.xyz)


// tree1
// tree
// Graphics
// ['BFS', 'CDF', 'Sorting']
// BFS
// { Name: 'tree', course: 'Intro', content: ['1', 'B', 'C'] }
// undefined
// { Name: 'Graphics', Topic: ['BFS', 'CDF', 'Sorting'] }