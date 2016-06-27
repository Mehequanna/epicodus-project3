// Business End Logic
var output = [];

function pingPong(input) {
  for (var i=1; i <= input; i+=1) {
    if(i % 15 === 0) {
      output.push("pingpong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
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
