// Setup
const myArray = []
for (let i = 1; i < 6; i++) {
  myArray.push(i)
}

// Only change code below this line

// Setup
const myArray = []
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0) continue
  myArray.push(i)
}
// Only change code below this line

// Setup
const myArray = []
for (let i = 10; i > 0; i--) {
  if (i % 2 == 0) continue
  myArray.push(i)
}
// Only change code below this line

// Setup
const myArr = [2, 3, 4, 5, 6]
let total = 0
for (let i = 0; i < myArr.length; i++) {
  total += myArr[i]
}

// Only change code below this line
function multiplyAll(arr) {
  let product = 1
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) product = product * arr[i][j]
  }
  // Only change code above this line
  return product
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
])
