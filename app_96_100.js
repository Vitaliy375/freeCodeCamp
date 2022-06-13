function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp]
  } else {
    return 'Not Found'
  }
  // Only change code above this line
}

const myMusic = [
  {
    artist: 'Billy Joel',
    title: 'Piano Man',
    release_year: 1973,
    formats: ['CD', '8T', 'LP'],
    gold: true,
  },

  {
    artist: 'Hit rid',
    title: 'Mister n',
    release_year: 1965,
    formats: ['CD', '8T', 'LP'],
    gold: true,
  },
]

const myStorage = {
  car: {
    inside: {
      'glove box': 'maps',
      'passenger seat': 'crumbs',
    },
    outside: {
      trunk: 'jack',
    },
  },
}

const gloveBoxContents = myStorage.car.inside['glove box']

const myPlants = [
  {
    type: 'flowers',
    list: ['rose', 'tulip', 'dandelion'],
  },
  {
    type: 'trees',
    list: ['fir', 'pine', 'birch'],
  },
]

const secondTree = myPlants[1].list[1]

// Setup
const myArray = []
let i = 5

while (i > -1) {
  myArray.push(i)
  i--
}

// Only change code below this line
