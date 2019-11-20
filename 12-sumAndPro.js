//12. Write a JavaScript program to compute the sum and product of an array of integers.
var array = [1, 2, 3, 4, 5, 6]
function sumAndPro(arr){
        return `Sum = ${arr.reduce((a,b)=>a+b)}, \n Product = ${arr.reduce((a,b)=>a*b)}`
}
console.log(sumAndPro(array))