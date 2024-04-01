"use strict";
// Question 91: Create an array of your three favorite fruits and add a new fruit to the end of the array.
let favoriteFruits = ["Mango", "Apple", "Banana"];
favoriteFruits.push("Cherry");
console.log(favoriteFruits);
console.log("\n");
// Question 92: Write a function to remove the last element from an array and return the removed element.
function removeLastElement(arr) {
    return arr.pop();
}
const fruits = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruits));
console.log(fruits);
console.log("\n");
// Question 93: Find the index of "Banana" in an array of fruits and replace it with "Mango".
function replaceBananaWithMango(fruits1) {
    const index = fruits1.indexOf("Banana");
    if (index !== -1)
        fruits1[index] = "Mango";
}
const fruits1 = ["Apple", "Banana", "Cherry"];
replaceBananaWithMango(fruits1);
console.log(fruits1);
