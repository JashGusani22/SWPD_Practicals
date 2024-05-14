let a = parseInt(prompt("Enter value :- "));
let b = parseInt(prompt("Enter value :- "));
let c = parseInt(prompt("Enter value :- "));

let ans = (b*a)-(4*a*c);

if(ans > 0 ){
    let root1 = (-b + Math.sqrt(ans))/(2*a);
    let root2 = (-b - Math.sqrt(ans))/(2*a);

    console.log(`root1 ${root1}`);
    console.log(`root2 ${root2}`);
    console.log(`This Root are Real and Different`);

}else if(ans < 0 ){
    let o1 = -b/(2*a);
    let o2 = a/(2*a);
    console.log(o1);
    console.log(`Root 1 = ${o1.toFixed(1)} + ${o2.toFixed(2)}`);
    console.log(`Root 2 = ${o1.toFixed(2)} - ${o2.toFixed(2)}`);
    console.log("The Roots are Imaginary and Different");
}else{
    let root = (-b/2*a);
    console.log(`Root=${root}`);
    console.log("The root are Real and Equal");
}