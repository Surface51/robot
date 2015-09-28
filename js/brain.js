

var hello = function() {
  $("#hello").slideDown("slow");
  $("#message-area").html("Hello!");
};


// When the page first loads.
$( document ).ready(function() {
  if (annyang) {
    var commands = {
      'hello':        hello,
    };

    annyang.debug();
    annyang.addCommands(commands);
    annyang.setLanguage('en');
    annyang.start();
  } else {
    
  }
});

// When everything on the page has loaded.
$(window).bind("load", function() {

});

// When the page is scrolled
$(window).scroll(function() {
  
});

// When the page is resized
$(window).resize(function() {

});
