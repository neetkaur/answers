//Write a function called square that takes in a number and squares it and then assign the result to variable called ans
let square = a => a*a;
console.log(square(5))

//Write a function called minusOne that takes a parameter num. Assuming the argument is a number, print the argument -1.
let minusone = a=>a-1
console.log(minusone(99))

//Write a function makeSentence that takes three parameters and concatenates them into a fully formed sentence.
function makesentence(a,b,c){
  console.log(`Oh boy, does ${a} ${b} ${c} or what? `)
}
makesentence("Neet","want","Tacos")

//Write a function called getLastElement that takes a parameter arr
function getLastElement(arr){
  console.log(arr[arr.length-1])
}
getLastElement([[1, 2, 3], [4, 5, 6]])

//Write a function divideThreeNums that takes three parameters and prints the third parameter divided by the result of the second parameter divided by the first.
function divideThreeNums(a,b,c){
  console.log(c/(b/a))
}
divideThreeNums(10, 5, 2)

//Write a function that accepts a string. The function should capitalize the first letter of each word in the string then return the capitalized string.
let words =[]
let wordInit = []
function capInit(sentence){
  words = sentence.split(" ")
  for(let i =0 ; i<words.length;i++)
  {
    wordInit[i] = words[i][0].toUpperCase().concat(words[i].slice(1))
  }
  console.log(wordInit.join(' '))
}
capInit("hello there how are you")

//Write a function that takes three parameters (numbers), sums them, converts the sum into a string and returns the string (eg. "123")
function cto(a,b,c){
  console.log((a+b+c).toString())
}
cto(2,4,5)
