function timesFive(num) {
	return num * 5
}
const x = timesFive(30)
//******* */
// Declare the myGlobal variable below this line
const myGlobal = 10
function fun1() {
	oopsGlobal = 5
	// Assign 5 to oopsGlobal Here
}
// Only change code above this line
function fun2() {
	var output = ''
	if (typeof myGlobal != 'undefined') {
		output += 'myGlobal: ' + myGlobal
	}
	if (typeof oopsGlobal != 'undefined') {
		output += ' oopsGlobal: ' + oopsGlobal
	}
	console.log(output)
}
//****** */
function myLocalScope() {
	// Only change code below this line
	var myVar = 2
	console.log('inside myLocalScope', myVar)
}
myLocalScope()
// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar)
//****** */
// Setup
const outerWear = 'T-Shirt'

function myOutfit() {
	// Only change code below this line
	let outerWear = 'sweater'
	// Only change code above this line
	return outerWear
}
myOutfit()
//****** */
// Setup
let sum = 0

function addThree() {
	sum = sum + 3
}

// Only change code below this line
function addFive() {
	sum = sum + 5
}

// Only change code above this line

addThree()
addFive()
