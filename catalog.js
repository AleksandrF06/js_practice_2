const products = [
  {name: "iPhone 15", price: 999, category: "Электроника",},
  {name: "Samsung TV 55", price: 799, category: "Электроника",},
  {name: "AirPods Pro", price: 249, category: "Электроника",},

  {name: "Кроссовки Nike", price: 120, category: "Одежда",},
  {name: "Куртка Zara", price: 89, category: "Одежда",},
  {name: "Джинсы Levi's", price: 75, category: "Одежда",},

  {name: "Кофемашина", price: 350, category: "Дом",},
  {name: "Пылесос Dyson", price: 450, category: "Дом",},
  {name: "Настольная лампа", price: 45, category: "Дом",},
];


function getTotalPriceByCategory(category) {
    const productsPrice = products.reduce((sum, element) => {
            if (element.category === category) {
                return sum + element.price
            }
            else {
                return sum
            }
    }, 0)

    return productsPrice
}

console.log(getTotalPriceByCategory("Дом"))

