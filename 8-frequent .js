//8.Write a JavaScript program to find the most frequent item of an array.
var arr1=[9,4,3,2,'b', 'a', 'a','a','a', 'a',2, 2,2,2,2, 3, 'a', 3, 'a', 2,   3,'b'];
function mostFreq(arr)    {
    var count = 0;
    var checker=2;
    var counted = [];
    var result;
    for (let i=0;i<arr.length;i++){
        if (counted.includes(arr[i])){continue}
        for (let x=i;x<arr.length;x++){
            if (arr[x] == arr[i] ){
                if(!(counted.includes(arr[x]))){
                    counted.push(arr[x]);
                }
                count++;
            }
            else continue;
        }
        console.log(arr[i],count,checker)
        if (count > checker){
            checker=count
            result=(`item : ${arr[i]} is found (${count}) times`);
            count=0;
        }
        count = 0;
    }
    return result
}
console.log(mostFreq(arr1));
/*
Sample array : var arr1=[2,3, 'a', 'a','a','a', 'a',2, 2,2,2,2, 3, 'a', 3, 'a', 2, 4, 9, 3,'b'];
Sample Output : 2 (7) times and a (7) times
*/