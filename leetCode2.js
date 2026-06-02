
const arr = [[1, [2], [3, [4]]]];

function flat(arr, depth = 1) {
  if (depth == 0) {
    return arr
  }
  let array = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      array.push(...flat(arr[i], depth-1))
    }
    else {
      array.push(arr[i])
    }
  }
  return array
}

console.log(flat(arr))
// [1, 2, 3, [4]]
console.log(flat(arr, 1))
// [1, 2, 3, [4]]
console.log(flat(arr, 3))
// [1, 2, 3, 4]