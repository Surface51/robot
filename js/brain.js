var name = undefined;

var hello = function() {
  if (name == "undefined") {
    respond("hello! what is your name?");
  } else {
    respond("hello, "+name+". how are you?");
  }
};

var setName = function(term) {
  name = term;
  respond(name + ". I like that name.");
};

var tellMeAboutYourself = function() {
  respond("I am Stanely Brobot, your best friend Robot.");
}

var soFancy = function() {
  respond("Damn Straight!");
}


var respond = function(response) {
  $("#message-area").html(response);
  responsiveVoice.speak(response, "UK English Male", {onstart: startVoice, onend: endVoice})
}


function startVoice() {
  annyang.abort();
}

function endVoice() {
  annyang.start();

}

var allowed = true;
var timeout;
// When the page first loads.
$( document ).ready(function() {

  console.log(name);

  if (annyang) {
    var commands = {
      'hello': hello,
      'my name is *term':setName,
      'tell me about yourself':tellMeAboutYourself,
      '(you are so) fancy':soFancy
   //   '*term': printTerm,
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
       $("body").removeAttr("class");
       allowed = true;
       annyang.abort();
       //$("#message-area").html("Hold down the space bar.");
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
