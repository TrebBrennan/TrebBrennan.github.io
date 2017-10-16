
// ============= Only testewd in chrome

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
