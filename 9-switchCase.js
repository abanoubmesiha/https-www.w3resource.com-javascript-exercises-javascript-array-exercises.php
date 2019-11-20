/*
9. Write a JavaScript program which accept a string as input and swap the case of 
each character. For example if you input 'The Quick Brown Fox' the output should be
 'tHE qUICK bROWN fOX'.
*/
function switchCase(str){
    let result = str.split('')
    for ( let i=0;i<str.length;i++){
        if (isNaN(result[i]) && (result[i] == result[i].toUpperCase())){
            result.splice(i,1,result[i].toLowerCase());
        }
        else if (isNaN(result[i]) && (result[i] == result[i].toLowerCase())){
            result.splice(i,1,result[i].toUpperCase());
        }
    }
    return result.join('');
}
console.log(switchCase('1-The Quick Brown Fox'));