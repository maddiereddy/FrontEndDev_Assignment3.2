/*
Map and Set:
● Create map instance object using new Map() and set value using set().
Add values here(Key can be string, object and function.)

● Create Set() instance and then add values using add() method
Note: Check new property before adding, if it’s there or not using has()
method.
● Add multiple values using Set(), then iterate them using for loop.
● Create an array(stringArray) of strings then set this array to Set instance using:
var mySet = new Set(stringArray);
Now check if all values are there or not using set’s has() method.
Print all values of array in one time(using spread operator)
*/

console.log("*** Start Map Example ***");

var myMap = new Map();

myMap.set(0, "zero");
myMap.set(1, "one");

var keyString = "a string",
    keyObj = {},
    keyFunc = function () {};

// setting the values
myMap.set(keyString, "value associated with 'a string'");
myMap.set(keyObj, "value associated with keyObj");
myMap.set(keyFunc, "value associated with keyFunc");

console.log("size: " + myMap.size);

myMap.forEach(function(value, key) {
  console.log(key + " : " + value);
});

/*----------------------------------------------------------*/

console.log("\n *** Start Set Example ***");

//add an array of strings to a Set object instance
let stringArray = ["dog", "cat", "book", "xray", "apple"];
let mySet = new Set(stringArray);

//add values
mySet.add(1);
mySet.add(5);
mySet.add("Hello").add("World").add("!");

//check if a value already in Set using has()
if (mySet.has("wolf")) {
  console.log("Set has wolf already");
} else {
  mySet.add(1)
  console.log("wolf added to set");
}

//loop through Set using for loop
mySet.forEach(function(value) {
  console.log(value);
});

//add as an object
let o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2});

//check if a value already in Set using has()
if (mySet.has(1)) {
  console.log("Set has 1 already");
} else {
  mySet.add(1)
  console.log("1 added to set");
}

//output size of Set - should be 12
console.log("Size: " + mySet.size);

//print using spread operator
console.log([...mySet]);
