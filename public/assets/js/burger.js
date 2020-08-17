/*jshint ignore:start */

$(function () {
    $(".createForm").on("submit", function(event) {
        event.preventDefault();
        const newBurger = {
            burger_name: $("#burger-input").val().trim()
        };

        $.ajax("api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("New Burger To Destroy").
            location.reload();
        });
    });
  $(".decimatedBurger").on("click", function (event) {
    event.preventDefault();

    var id = $(this).data("id");
    var decimatedState = {
      decimated: 1
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: decimatedState
  }).then(function() {
      location.reload();
  });
  });


});
