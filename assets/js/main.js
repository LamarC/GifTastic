var gamesArray = ["Earthbound", "Double Dragon", "Fire Emblem", "Punch-Out!!", "Donkey Kong Country", "Super Mario World", "The Legend of Zelda", "Metroid"];

$(document).ready(function(){
 
    $(".btn-primary").on("click", function() {
        
        var nintendo = $(this).attr("data-game");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + nintendo + "&api_key=ZKVap5tqWVjtisZqDPeS1CF3MM5obWWs&limit=10";

  $.ajax({
    url: queryURL,
    method: "GET"
  }) //I don't see the error here but the terminal does .. ?
  
  .then(function(res) {
    // Log the resulting object & URL
    console.log(res);
    console.log(queryURL);

    var results = response.data;

    for (var i = 0; i < results.length; i++) {
        //Making sure we don't get anything crazy here //Rating 
        if (results[i].rating !== "r" && results[i].rating !== "pg-13")
        //Creating variables for html tags
        var newGame = $("<div>");
        var p = $("<p>");

        p.text(results[i].rating);
        
        var newGameImage = $("<img>");

        newGame.attr('src', results[i].images.fixed_height.url);
        newGame.attr("alt", "nintendo game");

        newGameImage.attr('data-still', results[i].images.fixed_height_still.url)   
    
        newGameImage.att('data-animate', results[i].images.fixed_height.url)

        .attr('data-state', 'still');

        newGame.append(p);
        newGame.append(newGameImage);
        newGame.prepend("#gifs");
    }

    $(".anImage").on("click", function() {
            
        var state = $(this).attr("data-state"); 
        console.log(this);

        if (state == "still") {
        
        $(this).attr("src", $(this).data("animate"));
        
        $(this).attr("data-state", "animate");

        } else {
                
        $(this).attr("src", $(this).data("still"));
        
        $(this).attr("data-state", "still");
        }
    });  
  });
});

var games = [''];

function submitButton() {
    var userInput = $("gif-input").val();
    searchGif(userInput);
}


});





  
// API key=ZKVap5tqWVjtisZqDPeS1CF3MM5obWWs