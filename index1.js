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