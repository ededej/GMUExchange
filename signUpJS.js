$(document).ready(function() {

// // creating a reference to use firebase
    var usersRef = firebase.database().ref('users');


//when use click submit button
    $('#signUpButton').click(function () {
//   varible to set the new user with uid as key
        var uid = document.getElementById('email').value;
        var uidCopy = uid;
        var pass = document.getElementById('password').value;
        // make the email as key which doesn't allow the "." so I will change that %20 to make the email a key
        uid = uid.replace(/\./g, '%20');
        // var ref = new Firebase("https://gmuexchange.firebaseio.com/users");

//    I will check first if the key UiD exits and later create a new with all the values
        usersRef.once('value', function (snapshot) {
            var data = snapshot.val();
            var checkUser = snapshot.hasChild(uid);
            // if the email already exits as key than don't create a new entry
            if (checkUser) {
                alert('User with ' + uidCopy + ' has an account.\n' + "Sorry, we are not able to register you with this email.");
                return false;
            } else {
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

