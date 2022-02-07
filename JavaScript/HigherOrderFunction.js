// Higher Order Function

var data = [11, 20, 31, 40, 50];

data = data.map(function(val) {
    return val + 10
})

var evenArray = data.filter(function(val) {
    return val % 2 == 0;
})


debugger;


console.time("Mayank");

for(var i = 0; i<data.length; i++) {
    
}
console.timeEnd("Mayank");


console.time("MayankOne");
var i = 0;
while(i < 5) {
    i++;
}
console.timeEnd("MayankOne");


console.time("MayankTwo");
var i = 0;
do {
    i++;
} while(i < 5)
console.timeEnd("MayankTwo");

// for loop
// do while
// while Loop
// Recursion