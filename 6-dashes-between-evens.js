/*6. Write a JavaScript program which accept a number as input and
 insert dashes (-) between each two even numbers. 
For example if you accept 025468 the output should be 0-254-6-8.*/
function dashesBetEvens(num){
    let arr = num.split('');
    var result = [];
                let i;
        for (i=0;i<arr.length;i++){
            if ((parseInt(arr[i]) % 2 === 0) && (parseInt(arr[i+1]) % 2 === 0)){
                result.push(arr[i]+'-')
            }
            else {
                result.push(arr[i])
            }
            
        }
return result;

}

console.log(dashesBetEvens("025468"));
//0-254-6-8