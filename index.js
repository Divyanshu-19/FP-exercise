// Immutability Slide

//object with mother name and your age, now create obj for your sibling by age difference

// const mother = {name:"abc", age:30}   obj
function newObjWhichTakesanotherobj(mother){
    return {...mother, age: mother.age-30}
}
//create new array by adding two more color
function createNewArrayByAddingColor(arr){
    return [...arr,'newcolor1', 'newcolor2']
}

// -------------------------------------------
//Pure Function
//take person name and age in obj and increase age
function nameAndAge(obj){
    return {...obj, age: obj.age-10}
}

//-------------------------------------------------
//Higher Order Function
//return obj for each item given array of number
function takeItemReturnObj(item){
    return {item}
}
arr.map(takeItemReturnObj)
//Calculate the sum
function calculateSumOfArray(prevSum, current){
    return prevSum+current
}
arr.reduce(calculateSumOfArray,0)

//Reducer using for loop

//HomeWork Questions
//sum of odd numbers
function sumofodd(prevVal, currVal){
    if(currVal%2!==0)
        return prevVal+currVal;
    return prevVal;
}

arr.reduce(sumofodd, 0)

//sum of number at odd indices
function sumofoddindices(prevVal, currVal, index){
    if(index%2!==0)
        return prevVal+currVal;
    return prevVal;
}

arr.reduce(sumofoddindices, 0)

//biggest number
function biggest(prevVal, current){
    if(current>prevVal)
        return current
    return prevVal
}

arr.reduce(biggest, 0)

//numbers divisible by 10
function divisibleByTen(val){
    return val%10===0
}
arr.filter(divisibleByTen)

//Increase odd number and decrease even number by 1
function increaseOddDecreaseEven(currVal){
    if(currVal%2!==0)
        return currVal+1;
    return currVal-1;
}

arr.map(increaseOddDecreaseEven)

//Object with sum of all odd numbers and even numbers seperately
function sumofoddandEvenObject(prev, curr){
    if(curr%2===0)
        return {...prev, even: prev.even+curr};
    return {...prev, odd: prev.odd+curr};
}

arr.reduce(sumofoddandEvenObject,{even:0, odd:0})

//Return an array of objects with key as item and value as number of character in string

function keyValueObject(str, indice){
    return {[indice]: str.length}
}

arr.map(keyValueObject)

//Curring
function takeNameReturnFuction(name){
    return (str) => `${name} says ${str}`
}

takeNameReturnFuction('Divyanshu')("What's up?")


// The One
const compose = (...args) => {
    return (num) => args.reduce((acc, cur) => cur(acc), num);
}

const increment = (n) => n + 1;
const square = (n) => n * n;

const incrementThenSqaure = compose(increment, square);
console.log(incrementThenSqaure(2));