// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

// const secretCodeWord1 = "Lackadaisical"
//Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
//Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
//Expected output: "3cc3ntr1c"

// describe ("secretCode", () => {
//     test ("takes in a string and returns a string with a coded message", () => {
//         expect(secretCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//         expect(secretCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//         expect(secretCode(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
// })

//Output of test: fail - secretCode is not defined

//b) Create the function that makes the test pass.

//First we are going to create a function called secretCode that takes in each string of secretCodeWord() and converts the a to 4, e to 3, i to 1, and o to 0. I will use the .replace method to replace the letters with the numbers.  Then will use regex to replace the letters with the numbers. Now I will use the .split method to split the string into an array.  I will use the .join method to join the array back into a string and will return the newString.

const secretCodeWord1 = "Lackadaisical"
const secretCodeWord2 = "Gobbledygook"
const secretCodeWord3 = "Eccentric"

const secretCode = (string) => {
    let newString = string.replace(/a/gi, 4).replace(/e/gi, 3).replace(/i/gi, 1).replace(/o/gi, 0).split("").join("")
    return newString
}

console.log (secretCode(secretCodeWord1)) 
// Returned: L4ck4d41s1c4l
console.log (secretCode(secretCodeWord2)) 
// Returned: G0bbl3dyg00k
console.log (secretCode(secretCodeWord3)) 
// Returned: 3cc3ntr1c


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

// const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

// const letterA = "a"
// // Expected output: ["Mango", "Apricot", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]

// describe ("letterFinder", () => {
//     test ("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
//         expect(letterFinder(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
//         expect(letterFinder(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     })
// })

// Output of test: fail - letterFinder is not defined

// b) Create the function that makes the test pass.

//First I will create a function called letterFinder that takes in an array and a letter. Then creating a variable called newArray that will map through the array and change all the values to lowercase. Then I will return the newArray and use the .filter method to filter through the array and return the values that include the letter. Then I will use the .map method to map through the array and change the first letter of each word to uppercase and return the new array.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
const letterA = "a"
const letterE = "e"


const letterFinder = (array, letter) => {
    let newArray = array.map(value => value.toLowerCase())
       return newArray.filter(value => value.includes(letter)).map(value => value.charAt(0).toUpperCase() + value.slice(1))
}

console.log(letterFinder(fruitArray, letterA))
// Return:['Mango', 'Apricot', 'Peach']
console.log(letterFinder(fruitArray, letterE))
// Return:['Cherry', 'Blueberry', 'Peach']




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
// const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
// const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
// const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// describe ("fullHouse", () => {
//     test ("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
//         expect(fullHouse(hand1)).toEqual(true)
//         expect(fullHouse(hand2)).toEqual(false)
//         expect(fullHouse(hand3)).toEqual(false)
//         expect(fullHouse(hand4)).toEqual(true)
//     })
// })

// Output of test: fail - fullHouse is not defined

// b) Create the function that makes the test pass.

//First I will create a function called fullHouse that takes in an array.  I will use a for loop to loop through the array and create a variable called count that will count the number of times a value appears in the array.  Then I will use an if statement to check if the count is equal to 2 or 3 and return true.  If the count is not equal to 2 or 3 then I will return false.

const hand1 = [5, 5, 5, 3, 3]
const hand2 = [5, 5, 3, 3, 4]
const hand3 = [5, 5, 5, 5, 4]
const hand4 = [7, 2, 7, 2, 7]

const fullHouse = (array) => {
    let countObj = {}
    for (let i of array) {countObj[i] = (countObj[i] || 0) + 1
}
    let count = Object.values(countObj)
    if ((count[0] === 2 && count[1] === 3) || (count[1] === 2 && count[0] === 3)) {
        return true
}
    return false
}



console.log (fullHouse(hand1))
// Return: true
console.log (fullHouse(hand2))
// Return: false
console.log (fullHouse(hand3))
// Return: false
console.log (fullHouse(hand4))
// Return: true