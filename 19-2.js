//19-2 Again When to return from a function and from where

//When use return and when not use return (When I want a result and want to see it.)

/*
function evenify(num){
    if(num % 2 == 0){
        return num;
    }
    else{
        return num * 2;
    }
}

let result = evenify(13)
console.log('Result',result);
*/

//We can write like the below


function evenify(num){
    let result;
    if(num % 2 == 0){
        result = num;
    }
    else{
        result = num * 2;
    }
    return result;
}

let result = evenify(9)
//Now we will make squire
square = result * result;
console.log('Square',square);
