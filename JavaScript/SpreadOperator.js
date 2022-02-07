// Immutability

// var arrayData = [10, 20, 30, 20, 40];

// var data = arrayData;

// var dataOther = [...arrayData];

// dataOther[0] = 100

// debugger;

var a = [10, 20, 30];
a.push(40); // Wrong, It is getting Mutated

a = [...a, 40] // Right, Immutability