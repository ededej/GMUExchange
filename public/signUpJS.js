$(document).ready(function() {
//
//     "use strict";
// // Initialize Firebase
//     var config = {
//         apiKey: "AIzaSyD0i-jjYdLEq4iVrsnJ759fDWDO2t7Utao",
//         authDomain: "gmuexchange.firebaseapp.com",
//         databaseURL: "https://gmuexchange.firebaseio.com",
//         storageBucket: "gmuexchange.appspot.com",
//         messagingSenderId: "191322581126"
//     };
//     firebase.initializeApp(config);
//
// // creating a reference to use firebase
    var usersRef = firebase.database().ref('users');


//when use click submit button
    $('#signUpButton').click(function () {
//   varible to set the new user with uid as key
        var uid = document.getElementById('email').value;
        var uidCopy = uid;
        var pass = document.getElementById('password').value;
        console.log('In singup loop');
        console.log(uidCopy);
        // make the email as key which doesn't allow the "." so I will change that %20 to make the email a key
        uid = uid.replace(/\./g, '%20');
        console.log(uid);
        console.log(pass);
        // var ref = new Firebase("https://gmuexchange.firebaseio.com/users");

//    I will check first if the key UiD exits and later create a new with all the values
        usersRef.once('value', function (snapshot) {
            console.log(snapshot.val());
            console.log('Checking user');
            var data = snapshot.val();
            var checkUser = snapshot.hasChild(uid);
            console.log('checkUser:'+checkUser);

            // if the email already exits as key than don't create a new entry
            if (checkUser) {
                alert('User with ' + uidCopy + ' has an account.\n' + "Sorry, use another email.");
                return false;
            } else {
                console.log('adding user');
                console.log(uidCopy);
                console.log(pass);
                // setting up the firebase with all the necessary fields
                usersRef.child(uid).set(
                    {
                        FirstName: document.getElementById('firstName').value,
                        LastName: document.getElementById('lastName').value,
                        Email: uidCopy,
                        Password: pass

                    });
            }
        });
    });

 });

