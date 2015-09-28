

var hello = function() {
  $("#message-area").html("Hello!");
};

var allowed = true;
var timeout;
// When the page first loads.
$( document ).ready(function() {
  if (annyang) {
    var commands = {
      'hello': hello
    };

    annyang.debug();
    annyang.addCommands(commands);
    annyang.setLanguage('en');
    //annyang.start();
  } else {
    
  }

  $(window).keydown(function(e) {
    if (e.keyCode === 0 || e.keyCode === 32) {
      if (allowed) {
        allowed = false;
        console.log('Space down');
        annyang.start();
        clearTimeout(timeout);
        $("body").css("background-color", "green");
      }
    }
  });

  $(window).keyup(function(e) {
    if (e.keyCode === 0 || e.keyCode === 32) {
      console.log('Space up');
      $("body").css("background-color", "white");

      timeout = setTimeout(function() {
        allowed = true;
        annyang.abort();
    }, 1000);
      
    }
  });
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
