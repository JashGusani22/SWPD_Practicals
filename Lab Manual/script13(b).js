let a = parseInt(prompt("Enter value of a :- "));
let b = parseInt(prompt("Enter value of b :- "));
let c = parseInt(prompt("Enter value of c :- "));

let gretest = "is the Gretest Number";

if (a > b && a > c) {
    console.log(`${a} ${gretest}`);
} else if (a < b && b > c) {
    console.log(`${b} ${gretest}`);
}
else {
    console.log(`${c} ${gretest}`);
}