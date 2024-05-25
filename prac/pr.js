// let arra = [10, 20, 30];

// for(let i = 0; i < arra.length; i++){
//     let sum = arra[i];
//     console.log(sum * 2);
// }

let evenAddNumber = [10, 11, 23, 24, 12, 17, 18, 90];

for(let i = 0; i < evenAddNumber.length; i++){
    let element = evenAddNumber[i];
    // console.log(element);
    if(element % 2 == 0){
        console.log(element, 'is an even number');
    }
    else{
        console.log(element, 'is odd number');
    }
}