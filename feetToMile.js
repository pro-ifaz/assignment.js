// creating a function to calculate feet to mile everytime when needed without repeating the same process.

function feetToMile(feet) {

    var getMile = feet * 0.000189394;  // 1 feet = 0.000189394 mile [so its been multiplied]

    // using an if case to prevent negative value insertion. Please Let me know if this ok.  

    if (feet < -1) {
        getMile = `negative values aren't allowed. calculation cancelled.`;
    }

    return getMile;
}

// calculation 

var result = feetToMile(-5280);

console.log(result);