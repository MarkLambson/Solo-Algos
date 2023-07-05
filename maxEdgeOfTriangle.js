//Create a function that finds the maximum range of a triangle's third edge, where the side lengths are all integers.

function nextEdge(side1, side2) {
    let sum = (side1 + side2) - 1;
    return sum;
}

console.log("Answer: ", nextEdge(4, 9), "Expected: 12")