const numbers : number[] = [2,4,6,2,3,11,59];
const doubledNumbers : number[] = numbers.map((number) => number * 2);
const sum : number = numbers.reduce((a,b) => a + b);
const hasGreaterThan10 : boolean = numbers.some((number) => number > 10);
console.log(numbers);
console.log(doubledNumbers);
console.log(sum);
console.log("List has at least one number greater than 10: " + hasGreaterThan10);

const words : string[] = ["Hello", "Dolphin", "Minister","Fish"];
const longWords : string[] = words.filter((word) => word.length > 5);
console.log(words);
console.log(longWords);


