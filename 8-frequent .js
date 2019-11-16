//8.Write a JavaScript program to find the most frequent item of an array.
var arr1=[9,4,3,2,'b', 'a', 'a','a','a', 'a',2, 2,2,2,2, 3, 'a', 3, 'a', 2,   3,'b'];
function mode(arr){
    let item = arr.sort((a,b) =>
          arr.filter(v => v===a).length - arr.filter(v => v===b).length
    ).pop();
    return `${item} + (${arr.filter(v => v===item).length+1}) times`
}

console.log(mode(arr1));
/*
Sample array : var arr1=[2,3, 'a', 'a','a','a', 'a',2, 2,2,2,2, 3, 'a', 3, 'a', 2, 4, 9, 3,'b'];
Sample Output : 2 (7) times and a (7) times
*/