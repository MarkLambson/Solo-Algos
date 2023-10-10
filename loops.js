console.log("answer to question 1")
// 1. Print odd numbers from 1 to 20 -----------------------------//
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}
//---------------------------------------------------------------//

console.log("-------------------------------------")

console.log("answer to question 2")
// 2. Decreasing multiples of 3, starting at 100 and ending at 0 //
for (let i = 100; i > 0; i -= 3) {
    console.log(i)
}
//---------------------------------------------------------------//

console.log("-------------------------------------")

console.log("answer to question 3")
// 3. Print this sequence: 4, 2.5, 1, -0.5, -2, -3.5
for (let i = 4; i > -4; i -= 1.5) {
    console.log(i)
}
//---------------------------------------------------------------//

console.log("-------------------------------------")

console.log("answer to question 4")
// 4. Add all values from 1 to 100 together and display answer //
var sum = 0;
for (var i = 1; i < 101; i++) {
    sum += i;
}
console.log(sum);
//---------------------------------------------------------------//

console.log("-------------------------------------")

console.log("answer to question 5")
// 5. Multiply all values from 1 to 12 togeher and display answer //
var product = 1;
for (var i = 1; i < 13; i++) {
    product *= i;
}
console.log(product);
//---------------------------------------------------------------//

console.log("-------------------------------------")