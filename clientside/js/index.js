

let start1= performance.now();
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
numbers.forEach(num => {
 sum += num;
});
console.log(sum); // 55
let stop1= performance.now();


console.log(stop1-start1);


let start2= performance.now();
const betterSum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(betterSum); // 55
let stop2= performance.now();

console.log(stop2-start2);