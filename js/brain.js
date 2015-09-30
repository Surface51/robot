var name;

var hello = function() {
  if (name == undefined) {
    $("#message-area").html("Hello, friend!");
  } else {
    $("#message-area").html("Hello, "+name+"!");
  }
};

var printTerm = function(term) {
  $("#log").html(term);
};

var setName = function(term) {
  $("#log").html("my name is "+ term);
  name = term;

  $("#details").append("<li>Your Name is "+name+"</li>")
};

var boston = function() {
  $("#message-area").html("BOSTON");
};

var allowed = true;
var timeout;
// When the page first loads.
$( document ).ready(function() {
  if (annyang) {
    var commands = {
      'hello': hello,
      'boston': boston,
      'my name is *term': setName,
      '*term': printTerm,
    };

    annyang.debug();
    annyang.addCommands(commands);
    annyang.setLanguage('en');
    annyang.start();
  } else {
    
  }

  /*
  $(window).keydown(function(e) {
    if (e.keyCode === 0 || e.keyCode === 32) {
      if (allowed) {
        allowed = false;
        $("#message-area").html("I'm Listening...");
        annyang.start();
        clearTimeout(timeout);
        $("body").addClass("listening");
      }
    }
  });

  $(window).keyup(function(e) {
    if (e.keyCode === 0 || e.keyCode === 32) {
      $("body").removeClass("listening");
      $("body").addClass("not-listening");

      timeout = setTimeout(function() {
       $("body").removeClass("not-listening");
       allowed = true;
       annyang.abort();
       $("#message-area").html("Hold down the space bar.");
    }, 1000);
      
    }
  });*/
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
