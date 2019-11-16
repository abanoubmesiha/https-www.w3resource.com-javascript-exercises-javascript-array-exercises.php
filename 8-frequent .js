var arr1=[2,3, 'a', 'a','a','a', 'a',2, 2,2,2,2, 3, 'a', 3, 'a', 2, 4, 9, 3,'b'];
function frequent(arr){
    var sorted = arr.sort();
    var freq = [];
    var count=1
    for (let i=1; i<sorted.length;i++){
        if (sorted[i-1] == sorted[i]){
            count += 1
            freq.push(`${sorted[i-1]} (${count}) times`)
        }
        else {
            count = 1
            continue;
        };
    }
    let mapped = freq.map(item => {
        return Number(item.match(/\d(?!.*\d)/g));
    })
    console.log(mapped);
    let biggest = Math.max(...mapped);
    console.log(biggest);
    function multibleBig(arrr,val){
        var indexes = [];
        for (let i=0;i<arrr.length;i++){
           if (arrr[i] == val){indexes.push(i)}
        }
        console.log(indexes);
        console.log(freq[indexes[1]]);
        var result = [];
        for (var x=0;x<indexes.length;x++){
            result.push(freq[indexes[x]]);
        }
        console.log(result);
        return result
    }
    return (multibleBig(mapped,biggest)).join(' and ');
}
console.log(frequent(arr1));
/*
Sample array : var arr1=[2,3, 'a', 'a','a','a', 'a',2, 2,2,2,2, 3, 'a', 3, 'a', 2, 4, 9, 3,'b'];
Sample Output : 2 (7) times and a (7) times
*/