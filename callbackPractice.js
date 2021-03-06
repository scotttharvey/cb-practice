//  In this repo your job is to write functions to make each function call work properly.
// Below is a sample problem

//
//    sayHi('Hi Katie', function(thingToSay){
//       alert(thingToSay);
//    });
//
//
// // and what you should write is the sayHi function that makes the code above work,
//
//
//    var sayHi = function(str, cb){
//     cb(str);
//    }
//
//    sayHi('Hi Katie', function(thingToSay){
//       alert(thingToSay); //should alert ('Hi Katie')'
//    });
//
//




function first(a, b) {
    var dude = a[0];
    return b(dude);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName) {
    console.log('The first name in names is ' + firstName)
});



/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



function last(arr, fun) {
    var num = arr.length - 1;
    return fun(arr[num]);
}


last(names, function(lastName) {
    console.log('The last name in names is ' + lastName);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */






function multiply(a, b, c) {
    var answer = a * b;
    return c(answer);

}

multiply(4, 3, function(answer) {
    console.log('The answer is ' + answer); //should console.log 12
})





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





function contains(aRR, newColt, funct) {
    for (var i = 0; i < aRR.length; i++) {
        if (aRR[i] === newColt) {
            return funct(true);
        } else {
            return funct(false);
        }


    }



}

contains(names, 'Colt', function(result) {
    if (result === true) {
        console.log('Colt is in the array');
    } else {
        console.log('Colt is not in the array');
    }
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */



function uniq(array, cb) {
     var newArray = array.sort();
     var fixedArray = [];
     for (var i = 0; i < newArray.length; i++) {
       if (newArray[i] !== newArray[i + 1]) {
         fixedArray.push(newArray[i]);
       }
     }
     cb(fixedArray);
   }

uniq(names, function(uniqArr) {
    console.log('The new names array with all the duplicate items removed is ', uniqArr);
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */




//Code Here for each

each(names, function(item, indice) {
    console.log('The item in the ' + indice + ' position is ' + item)
});





/* NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM ---- NEXT PROBLEM */





//code here for getUserById

var users = [{
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
}, {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
}, {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
}, ];

getUserById(users, '16t', function(user) {
    console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address);
});
