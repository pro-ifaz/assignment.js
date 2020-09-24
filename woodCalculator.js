// function for reusing the procedure

function woodCalculator(chair, table, bed) {

    var totalWood = (chair * 1) + (table * 3) + (bed * 5);

    // using an if case to prevent negative value insertion. Please Let me know if this ok. I'm a newbie. 

    if (chair < -1 || table < -1 || bed < -1) {
        totalWood = `negative values aren't allowed. calculation cancelled.`;
    }

    return totalWood;
}

var furniture = woodCalculator(5, 6, 7);
console.log(furniture);


