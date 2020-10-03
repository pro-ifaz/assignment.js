function woodCalculator(chair, table, bed) {

var chairCount = chair * 1;
var tableCount = table * 3;
var bedCount = bed * 5;

var furniture = chairCount + tableCount + bedCount;
return furniture;
}

var result = woodCalculator(5, 6, 7);
console.log(result);


