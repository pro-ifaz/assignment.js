// creating a function to calculate feet to mile everytime when needed without repeating the same process.

function feetToMile (feet){
    var getMile = feet * 0.000189394;  // 1 feet = 0.000189394 mile [so its been multiplied]
    return getMile;
}

// calculation from feet to mile.

var mileResult = feetToMile(52800);

// reducing the extra digits after decimal of mile result 

var result = mileResult.toFixed(2);

console.log(result);