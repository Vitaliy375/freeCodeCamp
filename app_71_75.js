function testLessOrEqual(val) {
  if (val <= 12) {
    // Change this line
    return "Smaller Than or Equal to 12"
  }

  if (val <= 24) {
    // Change this line
    return "Smaller Than or Equal to 24"
  }

  return "More Than 24"
}

testLessOrEqual(10)

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
    return "Yes"
  }

  // Only change code above this line
  return "No"
}

testLogicalAnd(10)

function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside"
  }

  // Only change code above this line
  return "Inside"
}

testLogicalOr(15)

function testElse(val) {
  let result = ""
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5"
  } else {
    result = "5 or Smaller"
  }

  // Only change code above this line
  return result
}

testElse(4)

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10"
  } else if (val < 5) {
    return "Smaller than 5"
  } else {
    return "Between 5 and 10"
  }
}

testElseIf(7)
