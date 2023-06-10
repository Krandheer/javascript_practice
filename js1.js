const sumAll = (startIndex, endIndex) => {
    let total = 0
    for (let i = startIndex; i <= endIndex; i++) {
        total = total+i
    }
    return total
}
// console.log(sumAll(1, 100))


// using map
let users = [{name: 'harkirat', age: 22}, {name: 'randheer', age: 28}]
function printAllUsers(user){
    user.map(item => {
    console.log(`${item.name} is of age: ${item.age}`)
})}

// printAllUsers(users)

// fib in javascript
function fib(num){
    if (num <= 1){
        return num
    }
    return fib(num-1)+fib(num-2)
}
// for (let i = 0; i<6; i++){
//     console.log(fib(i))
// }


// pattern printing in function
function createPattern(numberOfRows) {
    for (let i = 0; i < numberOfRows; i++) {
       let stringToPrint = ""
       for (let j = 0; j < i+1; j ++){
            stringToPrint = stringToPrint+"*"
       }
        console.log(stringToPrint)
    }
}

function pyramidPattern(numOfRows) {
    for (let i=0; i <= numOfRows; i ++) {

    }
}
createePattern(10)