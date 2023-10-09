function fizzBuzz(n) {
    let result = [];
    //array to store results
    for (let i = 1; i <= n; i++) {
        //loop from 1 to n (user provides n)
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
            //check to see if n is divisible by 3 and 5 add "FizzBuzz"
            //to result array
        } else if (i % 3 === 0) {
            result.push("Fizz");
            //check to see if n is divisible by 3 add "Fizz"
            //to result array
        } else if (i % 5 === 0) {
            result.push("Buzz");
            //check to see if n is divisible by 5 add "Buzz"
            //to result array
        } else {
            result.push(i.toString());
            //add current number as a string
            //to result array
        }
    } return result;
    //return result array
}
let n = 100;
let result = fizzBuzz(n);
console.log(result.join(' '))