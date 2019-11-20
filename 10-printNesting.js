//10. Write a JavaScript program which prints the elements of the following array.
var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7],[5,7]];
console.log(a[0].length)
function printNesting(arr){
    var result = []
        for (let i in arr){
            result.push(`row ${i}`)
            for (let x in arr[i]){
                result.push(`${arr[i][x]}`)
            }
        }
    return result.join('\n');
}
console.log(printNesting(a));
/*
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
*/