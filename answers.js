// A light switch that can be either on or off.
//This will be a boolean variable with values on and off.
let lightSwitchOn = new Boolean(true)
let lightSwitchOff = new Boolean(false)

// A user's email address.
//This will be a string variable
let userEmailAddress = "xyz@gmail.com"

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
//This will be object variable
const spaceship = {
  hull: true,
  laserBlaster: true,
  tractorBeam: true,
  wrapDrive: true}
// A list of student names from our class.
//Thiis will be type array
let nameList = ['name1', 'name2']

// A list of student names from our class, each with a location.
//Array of objects
let studentList =[
  {
    "name": "student1",
    "location":"location 1"
  },
  {
    "name": "student2",
    "location":"location 2"
  },
  {
    "name": "student3",
    "location":"location 3"
  }]
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
//array of objects with one object property being Array

  let StudentList =[
    {
      "name": "student1",
      "location":"location 1",
      "favShows":["show1","show2"]

    },
    {
      "name": "student2",
      "location":"location 2",
      "favShows":["show11","show22"]
    },
    {
      "name": "student3",
      "location":"location 3",
      "favShows":["show111","show222"]
    }]


//     Take it Easy


// Make an array that holds all of the colors of the rainbow.
const rainbow = ["violet","indigo","blue","green","yellow","orange","red"]

// Write code that will access "blue" from the rainbow array.
if(rainbow.includes("blue")){
  console.log(rainbow.indexOf('blue'));
} else {console.log("not present")}
// Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const neet = {
  food:"TexMex",
  hobby:"Wasting Time",
  town:"austin",
  datatype:"string"
}
// Write code that will access your hobby from the object that you just created.
console.log(neet['hobby'])
console.log(neet.hobby)

/// Crazy Object!


const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

//
// "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5])
// "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0])

// "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby)

// "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1])

// The object the contains the name funkhauser
console.log(crazyObject.larry.characters[1])

// Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.
crazyObject.larry.quotes.push( "I'm trying to elevate small talk to medium talk")
console.log(crazyObject.larry.quotes[4])
