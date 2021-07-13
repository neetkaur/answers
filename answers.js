// A light switch that can be either on or off.
//This will be a boolean variable with values on and off.
let lightSwitchOn = new Boolean(true)
Let lightSwitchOff = new Boolean(false)

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
let StudentList =[
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
      "location":"location 1"
      "favShows":["show1","show2"]

    },
    {
      "name": "student2",
      "location":"location 2"
      "favShows":["show11","show22"]
    },
    {
      "name": "student3",
      "location":"location 3"
      "favShows":["show111","show222"]
    }]


//     Take it Easy


// Make an array that holds all of the colors of the rainbow.
const rainbow = ["violet","indigo","blue","green","yellow","orange","red"]

// Write code that will access "blue" from the rainbow array.
if(rainbow.includes("blue")){
  console.log(rainbow.indexOf('blue'));
}
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
