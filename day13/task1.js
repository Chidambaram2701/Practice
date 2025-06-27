let fruit=["banana","orange","apple","grapes","mango"];
console.log(fruit[2]);
fruit.push("cherry")
fruit.shift();
console.log(fruit.length);
for( let i=0;i<fruit.length;i++){
    console.log(fruit[i]);
}
fruit.reverse();
console.log(fruit);
let sum=0;
for (let j=0;j<fruit.length;j++){
    sum += j;
}
console.log(sum);
