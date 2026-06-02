const categories = {
  name: "Electronics",
  subcategories: [
    {
      name: "Phones",
      subcategories: [
        { name: "Smartphones", subcategories: [] },
        { name: "Feature Phones", subcategories: [] }
      ]
    },
    {
      name: "Computers",
      subcategories: [
        { name: "Laptops", subcategories: [] },
        { name: "Desktops", subcategories: [] }
      ]
    }
  ]
}


function findCategory(name, tree) {
  if (tree.name == name) {
    return tree
  }
  for (let element of tree.subcategories) {
    if (element.name == name) {
      return element
    }
    const result = findCategory(name, element)
    if (result) {
      return findCategory(name, element)
    }
    return "Категория отсутствует"

  }

}
console.log(findCategory("Feature", categories))