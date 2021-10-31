/*
myEach(collection, callback)
  Parameter(s): a collection (either an object or an array), a callback function
  Return value: The original collection
  Behavior: Iterates over the collection of elements, passing each element in turn to the callback function. Returns the original, unmodified, collection.
*/
function myEach(collection, callback) {
  let newCollection
  if (!Array.isArray(collection)) {
    newCollection = Object.values(collection)
  } else {
    newCollection = [...collection]
  }
  for (let i = 0; i < newCollection.length; i++) {
    callback(newCollection[i])
  }
  return collection
}

/*
myMap(collection, callback)
  Parameter(s): a collection (either an object or an array), a callback function
  Return value: A new array
  Behavior: Produces a new array of values by mapping each value in collection through a transformation function, callback. Returns the new array without modifying the original.
*/
function myMap(collection, callback) {
  let copyCollection
  let returnCollection = []
  if (!Array.isArray(collection)) {
    copyCollection = Object.values(collection)
  } else {
    copyCollection = [...collection]
  }
  for (let i = 0; i < copyCollection.length; i++) {
    returnCollection.push(callback(copyCollection[i]))
  }
  return returnCollection
}

/*
myReduce(collection, callback, acc)
  Parameter(s): a collection (either an object or an array), a callback function, a starting value for the accumulator (optional)
  Return value: A single value
  Behavior: Reduce iterates through a collection of values and boils it down into a single value. acc (short for accumulator) starts at the value that's passed in as an argument, and with each successive step is updated to the return value of callback. If a start value is not passed to myReduce, the first value in the collection should be used as the start value.
*/
function myReduce(collection, callback, acc = false) {
  let copyCollection
  let total


  if (!Array.isArray(collection)) {
    copyCollection = Object.values(collection)
  } else {
    copyCollection = [...collection]
  }
  if (acc === false) {
    total = copyCollection[0]

  } else {
    total = acc
  }

  if (acc === false) {
    for (let i = 1; i < copyCollection.length; i++) {
      total = callback(total, copyCollection[i])
    }
  } else {
    for (let i = 0; i < copyCollection.length; i++) {
      total = callback(total, copyCollection[i])
    }
  }
  return total
}

/*
myFind(collection, predicate)
  Parameter(s): a collection (either an object or an array), a predicate (a callback function that returns true or false)
  Return value: A single value
  Behavior: Looks through each value in the collection, returning the first one that passes a truth test (predicate) or undefined if no value passes the test. The function should return as soon as it finds an acceptable element, without traversing the rest of the collection.
*/
function myFind(collection, callback) {
  let copyCollection

  if (!Array.isArray(collection)) {
    copyCollection = Object.values(collection)
  } else {
    copyCollection = [...collection]
  }
  for (let i = 0; i < copyCollection.length; i++) {
    let match = callback(copyCollection[i])
    if (match === true) {
      return copyCollection[i]
    }
  }
  return undefined
}

/*
myFilter(collection, predicate)
  Parameter(s): a collection (either an object or an array), a predicate (a callback function that returns true or false)
  Return value: An array
  Behavior: Looks through each value in the collection, returning an array of all the values that pass a truth test (predicate). If no matching values are found, it should return an empty array.
*/
function myFilter(collection, callback) {
  let copyCollection
  let matching = []
  if (!Array.isArray(collection)) {
    copyCollection = Object.values(collection)
  } else {
    copyCollection = [...collection]
  }

  for (let i = 0; i < copyCollection.length; i++) {
    let match = callback(copyCollection[i])
    if (match === true) {
      matching.push(copyCollection[i])
    }
  }
  return matching
}

/*
mySize(collection)
  Parameter(s): a collection (either an object or an array)
  Return value: An integer
  Behavior: Return the number of values in the collection.
*/
function mySize(collection) {
  let copyCollection
  let size = 0
  if (!Array.isArray(collection)) {
    copyCollection = Object.values(collection)
  } else {
    copyCollection = [...collection]
  }
  for (let i = 0; i < copyCollection.length; i++) {
    size += 1
  }
  return size
}

/*
myFirst(array, [n])
  Parameter(s): an array, an integer (optional)
  Return value: A single element OR an array
  Behavior: Returns the first element of an array. Passing n will return the first n elements of the array.
*/
function myFirst(array, returnSize = 1) {
  let copyCollection = []

  for (let i = 0; i < returnSize; i++) {
    copyCollection.push(array[i])
  }
  if (copyCollection.length < 2) {
    return copyCollection[0]
  } else {
    return copyCollection
  }
}

/*
myLast(array, [n])
  Parameter(s): an array, an integer (optional)
  Return value: A single element OR an array
Behavior: Returns the last element of an array. Passing n will return the last n elements of the array.
*/
function myLast(array, returnSize = 1){
  let copyCollection = [...array]
  let returnCollection = []

  for (let i = 0; i < returnSize; i++) {
    returnCollection.unshift(copyCollection.pop())
  }
  if (returnCollection.length < 2) {
    return returnCollection[0]
  } else {
    return returnCollection
  }
}

/*
myKeys(object)
  Parameter(s): an object
  Return value: An array
Behavior: Retrieve all the names of the object's enumerable properties.
*/
function myKeys(inputObject){
  let newArray = []
  for(const item in inputObject){
    newArray.push(item)
  }
  return newArray
}

/*
myValues(object)
 Parameter(s): an object
  Return value: an array
  Behavior: Return all of the values of the object's properties.
*/
function myValues(inputObject){
  let newArray = []
  for(const item in inputObject){
    newArray.push(inputObject[item])
  }
  return newArray
}

//Testing Functions
// console.log(myEach([1, 2, 3], (e) => console.log(e * 2) )); //alerts each number in turn and returns the original collection 
// console.log(myEach({one: 1, two: 2, three: 3}, (e) => console.log(`Alert ${e}`) )); //alerts each number value in turn and returns the original collection
// console.log(myMap([1, 2, 3], function (num) { return num * 3; }));
// console.log(myMap({ one: 1, two: 2, three: 3 }, function (num, key) { return num * 3; }));
// console.log(myReduce([1, 2, 3], function (acc, val, collection) { return acc + val; }, 10)); //16
// console.log(myReduce({ one: 1, two: 2, three: 3 }, function (acc, val, collection) { return acc + val; })); // 6
// console.log(myFind([1, 2, 3, 4, 5, 6], function (num) { return num % 2 == 0; })); // 2
// console.log(myFind({ one: 1, three: 3, four: 4, six: 6 }, function (num) { return num % 2 == 0; })); // 4
// console.log(myFind([1, 3, 5,], function (num) { return num % 2 == 0; })); // undefinded
// console.log(myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; })); //[2, 4, 6]
// console.log(myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; })); // []
// console.log(mySize({one: 1, two: 2, three: 3})); //3
// console.log(mySize([])); //0
// console.log(myFirst([5, 4, 3, 2, 1])); // 5
// console.log(myFirst([5, 4, 3, 2, 1], 3)); // [5,4,3]
// console.log(myLast([5, 4, 3, 2, 1])); // 1
// let testArr = [1,2,3,4]
// console.log(myLast(testArr, 3)); // [2,3,4]
// console.log(myKeys({one: 1, two: 2, three: 3}))
console.log(myValues({one: 1, two: 2, three: 3}))