var data = {
    name: "Mayank",
    age: 30,
    designation: "Developer"
}

data.age = 40; // Mutating the Original Object

var data = {
    ...data,
    age: 40,
    salary: 3000
}

debugger;      