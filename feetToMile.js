// creating a function to calculate feet to mile everytime when needed without repeating the same process.

function feetToMile (feet){
    var getMile = feet * 0.000189394;  // 1 feet = 0.000189394 mile [so its been multiplied]
    return getMile;
}

// function is between the comments


// calculation from feet to mile.

var mileResult = feetToMile(12);

console.log(mileResult);