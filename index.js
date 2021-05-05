var x=1;
function login(){

  var userEmail = document.getElementById("email_conectare").value;
  var userPass = document.getElementById("password_conectare").value;
  var x=1;

      firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(authUser => {
        var x=0;
          if(authUser.user.emailVerified){ //This will return true or false
            window.alert("Te-ai conectat cu succes")
            location.replace("https://www.w3schools.com")
            var x=0;
          }else{
            window.alert('email not verified')
          }
      }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
    
        window.alert("Error : " + errorMessage);
      });
  

}

function create_account(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  var userPassConf = document.getElementById("confpassword_field").value;

  if(userPass==""){
    window.alert("The password should not be empty!")
    return;
  }

  if(userPassConf===userPass){
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(){
      var user = firebase.auth().currentUser;
  
      user.sendEmailVerification().then(function(){
      // Email sent.
      window.alert("Email verification sent")
      location.replace("log_in.html")  
      })
  }).catch(function(error){
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage)
  });
}else{
window.alert("Different passwords")
}
}

function logout(){
  firebase.auth().signOut();
}

function change_password(){
  var auth = firebase.auth();
  var emailAddress = document.getElementById("email_conectare").value;

  auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
  window.alert("Email verification sent.")
  }).catch(function(error) {
  // An error happened.
  var errorMessage = error.message;
  window.alert(error.message)
  });
}

if(x==0){
function preventBack(){window.history.forward();}
    setTimeout("preventBack()", 0);
    window.onunload=function(){null};
}