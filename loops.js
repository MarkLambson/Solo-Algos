// 1. Print odd numbers from 1 to 20 -----------------------------//
for(let i = 1; i <= 20; i++) {
    // for loop iterating through 1 to 20
    let even = [];
    //array to store even numbers, not doing anything with them
    if (i % 2 === 0) {
        even.push(i);
        //if the number is divisible by 2, push it to the array
    } else {
        console.log(i);
        //otherwise, console log it!
    }
}
//---------------------------------------------------------------//



// 2. Decreasing multiples of 3, starting at 100 and ending at 0--------------------------------//
for(let i = 100; i > 0; i-=3) {
    console.log(i)
}
//---------------------------------------------------------------//



// 3. Print this sequence: 4, 2.5, 1, -0.5, -2, -3.5
for(let i = 4; i > -4; i-=1.5) {
    console.log(i)
}
//---------------------------------------------------------------//