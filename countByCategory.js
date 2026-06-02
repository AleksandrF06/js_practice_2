const products = [
  { name: "Phone", category: "Electronics" },
  { name: "TV", category: "Electronics" },
  { name: "Jeans", category: "Clothing" },
  { name: "T-shirt", category: "Clothing" },
  { name: "Blender", category: "Home" }
];


function countByCategory(products) {
    const object = {}
    for (let key of products) {
        if (object[key.category] == undefined){
         object[key.category] = 1
        }
        else {
            object[key.category] += 1
        }
    }
    return object
}

console.log(countByCategory(products))