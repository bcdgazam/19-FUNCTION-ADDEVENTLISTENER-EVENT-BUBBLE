//19-4 arguments and deal with unknown number of arguments

//Normal Function
/*
function addNumbers(numOne, numTwo){
    return numOne + numTwo;
}

let result = addNumbers(3, 5);
console.log(result);
*/



// Arguments Function (arguments only works on functions; Its looks like a object hase property and value, it's called array like object)

function addNumbers(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element;
    }
    return sum;
}

let result = addNumbers(3, 5, 2, 5, 25);
console.log(result);