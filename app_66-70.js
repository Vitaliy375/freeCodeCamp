function testGreaterThan(val) {
	if (val > '100') {
		// Change this line
		return 'Over 100'
	}

	if (val > '10') {
		// Change this line
		return 'Over 10'
	}

	return '10 or Under'
}

testGreaterThan(10)

function testGreaterOrEqual(val) {
	if (val >= 20) {
		// Change this line
		return '20 or Over'
	}

	if (val >= 10) {
		// Change this line
		return '10 or Over'
	}

	return 'Less than 10'
}

testGreaterOrEqual(10)

function testLessThan(val) {
	if (val < 25) {
		// Change this line
		return 'Under 25'
	}

	if (val < 55) {
		// Change this line
		return 'Under 55'
	}

	return '55 or Over'
}

testLessThan(10)
