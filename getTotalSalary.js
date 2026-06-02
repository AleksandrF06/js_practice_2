const salaries = {
  Alice: 500,
  Bob: 700,
  Charlie: 300
};

function getTotalSalary(object) {
    let sum = 0
    for (let key in object) {
        sum += object[key]
    }
    return sum
}

console.log(getTotalSalary(salaries))