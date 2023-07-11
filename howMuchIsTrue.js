//How Much Is True ?
// Create a function which returns the number of true values there are in an array.


//Notes
//Return 0 if given an empty array.
//All array items are of the type bool (true or false).


function countTrue(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++;
        }
    }
    return count;
}



console.log("Answer: ", countTrue([true, false, false, true, false]), "2")
console.log("Answer: ", countTrue([false, false, false, false]), "0")
console.log("Answer: ", countTrue([]), "0")