var arr1 = [ -6,-7,-4,1,-3,5,2,-1,2 ];
function sortArr(arr){
    return arr.sort((a,b)=> {
       if (a<b){return -1}
       else if (a>b){return +1}
       else if (a==b){return 0}
   });
}
console.log(sortArr(arr1));
