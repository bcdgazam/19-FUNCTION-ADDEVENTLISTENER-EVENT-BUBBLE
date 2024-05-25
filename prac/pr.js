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


function doubleOnlyEven(n){
    for(let i = 0; i < n.length; i++){
        let element = n[i];
        if(element % 2 == 0){
            console.log(element, 'is a even number');
        }
        else{
            console.log(element * 2, 'is an odd number');
        }
    }
}

let numberOne = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
doubleOnlyEven(numberOne)
doubleOnlyEven(numberOne)