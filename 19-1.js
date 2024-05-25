//19-1 When to use a function, use function inside a loop

//Function uses in 3 cases

//take an array and double it
// nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

/*
for(let i = 0; i < nums.length; i++){
    let element = nums[i];
    console.log(element * 2);
    // console.log(element + ' x 3 = ', element * 3);
}

*/

/*
for(let i = 0; i <nums.length; i++){
    let element = nums[i];
    if(element % 2 == 0){
        console.log(element, ': is even number');
    }
    else{
        console.log(element *2, ': is odd number');
    }
}
*/


// Creating a multiplication table
// let number = 2;
// for (let i = 1; i <= 10; i++) {
//     const result = i * number;
//     console.log(`${number} * ${i} = ${result}`);
// }
/*
let number = 2;
for (let i = 1; i <= 10; i++) {
    const result = i * number;
    console.log(number, '*', i, '=', result);
}
*/


//Function Invocation
function evenify(element) {
    if(element % 2 == 0){
        console.log(element, ': is an even number');
    }
    else{
        console.log(element, ': is odd number');
    }
}

let num = [11, 13, 12, 17, 14];
for(let i = 0; i <num.length; i++){
    let element = num[i];
    evenify(element);
}



/*
function getOddNumber(num){
    for(let i = 0; i <num.length; i++){
        let element = num[i];
        if(element % 2 == 0){
            console.log(element, ': is an even number');
        }
        else{
            console.log(element, ': is odd number');
        }
    }
}

num = [11, 13, 12, 17, 14]
getOddNumber(num)

friendsAge = [20, 22, 27, 29, 69, 90]
getOddNumber(friendsAge)
*/