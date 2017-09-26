// ============= Smooth scroll
document.documentElement.className = 'js';

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


// ============= Active Nav Check
// Only testewd in chrome

// Get the page URL
var url = window.location.href;
var urlres = url.split("/");
var urlPage = urlres[urlres.length-1];

// Get all the links inside an element that has the class "hasActive"
$('.hasActive').find('a').each(function() {
  // Check if the URL matches the link
  if ( $(this).attr('href') == urlPage ){
    // Make it nice
    $(this).addClass('active');
  }
});


// ============= Sidenav

function openNav(target){
  parent = target.closest('.navGroup');
  parent.find('ul').slideToggle(200);
  parent.toggleClass('open');
}

$('.navGroup h4 a').click(function(e){
  var x = $(this);
  openNav(x);
});


$( ".openByDefault" ).each(function() {
    var x = $( this );
    openNav(x);
});
