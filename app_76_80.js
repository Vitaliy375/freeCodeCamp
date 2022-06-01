function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5"
  } else if (val < 10) {
    return "Less than 10"
  } else {
    return "Greater than or equal to 10"
  }
}

orderMyLogic(7)

function testSize(num) {
  // Only change code below this line
  if (num < 5) return "Tiny"
  else if (num < 10) return "Small"
  else if (num < 15) return "Medium"
  else if (num < 20) return "Large"
  else if (num >= 20) return "Huge"

  return "Change Me"
  // Only change code above this line
}

testSize(7)

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go Home!",
]

function golfScore(par, strokes) {
  // Only change code below this line

  if (strokes == 1) {
    return names[0]
  } else if (strokes <= par - 2) {
    return names[1]
  } else if (strokes === par - 1) {
    return names[2]
  } else if (strokes === par) {
    return names[3]
  } else if (strokes === par + 1) {
    return names[4]
  } else if (strokes === par + 2) {
    return names[5]
  } else {
    return names[6]
  }

  // Only change code above this line
}

golfScore(5, 4)

function caseInSwitch(val) {
  let answer = ""
  // Only change code below this line
  switch (val) {
    case 1:
      answer = "alpha"
      break
    case 2:
      answer = "beta"
      break
    case 3:
      answer = "gamma"
      break
    case 4:
      answer = "delta"
      break
  }

  // Only change code above this line
  return answer
}

caseInSwitch(1)

function switchOfStuff(val) {
  let answer = ""
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple"
      break
    case "b":
      answer = "bird"
      break
    case "c":
      answer = "cat"
      break

    default:
      answer = "stuff"
      break
  }

  // Only change code above this line
  return answer
}

switchOfStuff(1)
