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

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo.concat("-Changed"))

//BOND FILMS

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

let bondTitles =[]
bondFilms.forEach((item, i) => {
  bondTitles.push(item.title)
})
console.log(bondTitles)

let oddBonds =[]
bondFilms.forEach((item, i) => {
  if(item.year%2 !== 0)
  oddBonds.push(item.title)
})
console.log(oddBonds)

let total = 0
bondFilms.forEach((item, i) => {
total = total + parseInt(item.gross.replaceAll("$","").replaceAll(',' , "")) //console.log(parseInt(item.replace(/$|,/g,'')))
})
console.log("Total Gross = "+ total)

//find actor with least movie count
  //find list of all actors
  //put a count against each name
  //pick the one with least count
//find movie with that actor


// //BONUS
// const actorMovie = [{
//   "actor": String,
//   "Movie":Number
// }]
//
// bondFilms.forEach((item, i) => {
// actorMovie.actor= item.actor
// })
// console.log(actorMovie[0])
