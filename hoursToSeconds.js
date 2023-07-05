//Write a function that converts hours into seconds.

function howManySeconds(hours) {
    let min = hours * 60;
    let sec = min * 60;
    return sec;
}

console.log("Answer: ", howManySeconds(6), "Expected: 21600")
console.log("Answer: ", howManySeconds(1), "Expected: 3600")
console.log("Answer: ", howManySeconds(90), "Expected:324000")