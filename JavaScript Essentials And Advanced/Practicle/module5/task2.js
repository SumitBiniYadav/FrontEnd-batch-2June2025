let i = 1;
let sum = 0;

while(i <= 20){
    if(i % 2 === 0){
        sum += i;
    }
    i++;
}

console.log("Sum of even numbers:", sum);