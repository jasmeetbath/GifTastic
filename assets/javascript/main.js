var singersArray = ["Rihanna", "Lady Gaga", "Lana Del Ray"];

$(document).ready(function() {
  for (var i = 0; i < athletesArray.length; i++) {
    $("#singer-buttons").append(
      "<button type='button' onclick='searchGif(\"" +
        athletesArray[i] +
        "\")' class='btn btn-primary' value=' " +
        singersArray[i] +
        "'> " +
        singersArray[i] +
        " </button>"
    );
  }
});

function singerButtonClicked() {
  var userInput = $("#artist-input").val();
  searchGif(userInput);
}

function submitButtonClicked() {
  var userInput = $("#artist-input").val();

  if (userInput) {
    $("#singer-buttons").append(
      "<button type='button' onclick='searchGif(\"" +
        userInput +
        "\")' class='btn btn-primary' value=' " +
        userInput +
        "'> " +
        userInput +
        " </button>"
    );
  }
}

function searchGif(gifName) {
  $.ajax({
    url:
      "https://api.giphy.com/v1/gifs/search?q= " +
      gifName +
      " &api_key=dc6zaTOxFJmzC",
    type: "GET"
  }).done(function(response) {
    displayGif(response);
  });
}

$(".movImage").on("click", function() {
  var state = $(this).attr("data-state");
  if (state == "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }
});
