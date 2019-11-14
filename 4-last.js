function last(arr,n=1){
    if (n > (arr.length-1) ) {n=arr.length}
    return arr.slice([arr.length-n],)
}
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
/*
-2
[9, 0, -2]
[7, 9, 0, -2]*/