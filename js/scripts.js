// Business End Logic

  function pingPong(input) {
    for (var i=0; i <= input; i+=1) {
      if(i % 15 === 0) {
        console.log("pingpong");
      } else if (i % 3 === 0) {
        console.log("ping");
      } else if (i % 5 === 0) {
        console.log("pong");
      } else {
        console.log(i);
      }
    }
  }

// User End Logic
$(document).ready(function() {
  $("form#numberForm").submit(function(event) {
    var input = parseInt($("input#numberInput").val());
    pingPong(input);

    event.preventDefault();
  });
});

// $("ul#numberOutput").append("<li>pingpong</li>");
