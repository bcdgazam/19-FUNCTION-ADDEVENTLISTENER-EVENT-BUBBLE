// let arra = [10, 20, 30];

// for(let i = 0; i < arra.length; i++){
//     let sum = arra[i];
//     console.log(sum * 2);
// }

// let evenAddNumber = [10, 11, 23, 24, 12, 17, 18, 90];

// for(let i = 0; i < evenAddNumber.length; i++){
//     let element = evenAddNumber[i];
//     // console.log(element);
//     if(element % 2 == 0){
//         console.log(element, 'is an even number');
//     }
//     else{
//         console.log(element, 'is odd number');
//     }
// }

// let number = 2;
// for (let i = 1; i <= 10; i++) {
//     const result = i * number;
//     console.log(number, '*', i, '=', result);
// }



// for(let i = 0; i < n.length; i++){
//     let element = n[i];
//     console.log(element);
// }

// function doubleOnlyEven(n){
//     if(element % 2 == 0){
//         return element;
//     }
//     else{
//         return element;
//     }
// }

// let numberOne = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// doubleOnlyEven(numberOne)

// function evenify(num){
//     if(num % 2 == 0){
//         return num;
//     }
//     else{
//         return num * 2;
//     }
// }

// let result = evenify(13)
// console.log('Result',result);

function addNumbers(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum + element;
    }
    return sum;
}

let result = addNumbers(3, 5, 2, 5, 25, 500);
console.log(result);