// There is a single operator in JavaScript, capable of providing the remainder of a division operation. 
// Two numbers are passed as parameters. 
// The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.
// The tests only use positive and negative integers.

function remainder(x, y) {
    return x % y;
}

console.log("Answer: ", remainder(9, 3), "Expected: 0")
console.log("Answer: ", remainder(8, 45), "Expected: 8")
console.log("Answer: ", remainder(997, -7), "Expected: 3")
