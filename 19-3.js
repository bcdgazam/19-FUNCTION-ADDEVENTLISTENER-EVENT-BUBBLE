//19-3 Callback function and pass different function

function explain_callback(name, age, task){
    console.log('Hello:', name);
    console.log('Your age:', age);
    task();
}

function wash_hand(){
    console.log('Wash your hand with soap');
}
function takeShower(){
    console.log('You need to take shower');
}
function scrollFacebook(){
    console.log('Scroll Facebook but don\'t like any post');
}

explain_callback('Sogir Uddin', 18, wash_hand);
explain_callback('Jobir Uddin', 13, takeShower);
explain_callback('Mogir Uddin', 10, scrollFacebook);