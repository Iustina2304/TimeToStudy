var x=0;

var emailUser = document.getElementById("email_conectare").value;

function login(){

  var userEmail = document.getElementById("email_conectare").value;
  var userPass = document.getElementById("password_conectare").value;

      firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(authUser => {
          if(authUser.user.emailVerified){ //This will return true or false
            x=1;
            document.getElementById('alerta_mail_conectare').innerHTML = ''
            window.alert("Te-ai conectat cu succes!")
            location.replace("index2.html")
          }else{
            document.getElementById('alerta_mail_conectare').innerHTML = 'Verificati emailul! '
          }
      }).catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
    
        document.getElementById('alerta_mail_conectare').innerHTML = errorMessage;
        
      });
}

function create_account(){

  var userEmail = document.getElementById("email_field").value;
  var userPass = document.getElementById("password_field").value;
  var userPassConf = document.getElementById("confpassword_field").value;

  if(userPass==""){
    window.alert("Parola nu poate fi goala!")
    return;
  }

  if(userPassConf===userPass){
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).then(function(){
      var user = firebase.auth().currentUser;
  
      user.sendEmailVerification().then(function(){
      // Email sent.
      window.alert("Emailul de verificare a fost trimis!")
      location.replace("log_in.html")  
      })
  }).catch(function(error){
    // An error happened.
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert(errorMessage)
  });
}else{
window.alert("Parole diferite")
}
}

function logout(){
  signOutUser = () => firebase.auth.signOut();
  location.replace("log_in.html")
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

function verify_home(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      location.replace("home_conectat.html")
    } else {
      location.replace("home.html")
    }
  });
}

function need_log_in(){
  window.alert("Trebuie sa fii conectat pentru a accesa aceasta pagina!")
  location.replace("log_in.html")
}
function need_log_in_1(){
  window.alert("Trebuie sa fii conectat pentru a accesa aceasta pagina!")
  location.replace("creare_cont.html")
}



//STICKY NAVBAR
// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

//BLUR EFFECT
$(document).ready(function () {
    $(window).scroll(function (e) {
        var s = $(window).scrollTop(),
            filterVal = s === 0 ? 0 : Math.ceil((s / 20));

        $('.blur')
            .css({
                'filter': 'blur(' + filterVal + 'px)',
                '-webkit-filter': 'blur(' + filterVal + 'px)',
                '-moz-filter': 'blur(' + filterVal + 'px)',
                '-o-filter': 'blur(' + filterVal + 'px)',
                '-ms-filter': 'blur(' + filterVal + 'px)'
            });
    });
});

//EFFECTS
AOS.init({
    offset: 400, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1000 // values from 0 to 3000, with step 50ms
});

//TEXT APPEAR AND DISAPPEAR
function toggleText() {
    var text = this.closest('div').querySelector(".demo");
    if (text.style.display === "none") {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  var btnLinks = document.querySelectorAll('a.animated-button.thar-two');
  btnLinks.forEach(function(btn){
     btn.addEventListener('click', toggleText);
  });

  if(x==1){
    function preventBack() {
        window.history.forward(); 
    }
      
    setTimeout("preventBack()", 0);
      
    window.onunload = function () { null };
    }