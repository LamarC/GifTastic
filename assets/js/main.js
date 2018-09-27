var gamesArray = ["Earthbound", "Double Dragon", "Fire Emblem", "Punch-Out!!", "Donkey Kong Country", "Super Mario World", "The Legend of Zelda", "Metroid"];

$(document).ready(function(){
 
    $(".btn-primary").on("click", function() {
        
        var nintendo = $(this).attr("data-game");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + nintendo + "&api_key=ZKVap5tqWVjtisZqDPeS1CF3MM5obWWs&limit=10";
// AJAX call
  $.ajax({
    url: queryURL,
    method: "GET"
  }) 
  
  .done(function(res) {
    // Log the resulting object & URL
    console.log(res); //Didn't get anything!!

    var results = res.data;

    for (var i = 0; i < results.length; i++) {
        
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
        
        var newGame = $("<div>");
        
        var p = $("<p>");

        p.text(results[i].rating);
        
        var newGameImage = $("<img>");
        
        newGameImage.addClass("anImg");
        
        newGameImage.attr("src", results[i].images.fixed_height.url);
        
        newGameImage.attr("alt", "nintendo game");
        
        newGameImage.attr("data-still", results[i].images.fixed_height_still.url);
        
        newGameImage.attr("data-animate", results[i].images.fixed_height.url);

        //attr("data-state", "still");
        
        newGame.append(p);
        
        newGame.append(newGameImage);
        
        newGame.prepend("#gifs");
    }

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

//var games = [''];

$("#find-game").on("click", function(){
    var gameButton = $("#gif-input").val();

    var newButton = $("<button>").addClass("btn-primary").attr("data-name", gameButton).html(gameButton);

    $("gameButton").append(newButton);

    queryURL = "https://api.giphy.com/v1/gifs/search?q=" + nintendo + "&api_key=ZKVap5tqWVjtisZqDPeS1CF3MM5obWWs&limit=10";

    $.ajax({
        url: queryURL,
        method: 'GET'
        })
    
    .done(function(res){
        var results= res.data;

        for(var i =0; i < results.length; i++) {
        
        var newGame = $("<div>");
        
        var p = $("<p>");

        p.text(results[i].rating);
        
        var newGameImage = $("<img>");
        
        newGameImage.addClass("anImg");
        
        newGameImage.attr("src", results[i].images.fixed_height.url);
        
        newGameImage.attr("alt", "nintendo game");
        
        newGameImage.attr("data-still", results[i].images.fixed_height_still.url);
        
        newGameImage.attr("data-animate", results[i].images.fixed_height.url);

        //attr("data-state", "still");
        
        newGame.append(p);
        
        newGame.append(newGameImage);
        
        newGame.prepend("#gifs");
        }
    
        $(".anImg").on("click", function(){
            var state 
        })
    
    })
})

});





  
// API key=ZKVap5tqWVjtisZqDPeS1CF3MM5obWWs