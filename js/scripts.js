// Business End Logic

  function pingPong(input) {
    for (var i=1; i <= input; i+=1) {
      if(i % 15 === 0) {
        $("ul#numberOutput").append("<li>pingpong</li>");
      } else if (i % 3 === 0) {
        $("ul#numberOutput").append("<li>ping</li>");
      } else if (i % 5 === 0) {
        $("ul#numberOutput").append("<li>pong</li>");
      } else {
        $("ul#numberOutput").append("<li>" + i + "</li>");
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
