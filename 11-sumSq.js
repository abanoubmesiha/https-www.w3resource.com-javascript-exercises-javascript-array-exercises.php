//11. Write a JavaScript program to find the sum of squares of a numeric vector. 
function sumSq(arr){
        return arr.reduce((a,b) => a+Math.pow(b,2),0)
}
console.log(sumSq([0, 1, 2, 3, 4]));