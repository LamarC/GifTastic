var gamesArray = ["Earthbound", "Double Dragon", "Fire Emblem", "Punch-Out!!", "Donkey Kong Country", "Super Mario World", "The Legend of Zelda", "Metroid"];
    $('button').on('click', function() {
        var nintendo = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + nintendo + "&api_key=ZKVap5tqWVjtisZqDPeS1CF3MM5obWWs&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {


                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var newGame = $("<div>");
        
                    var p = $("<p>");

                    p.text(results[i].rating);

                    var newGameImage = $("<img/>"); newGameImage.attr("src", results[i].images.fixed_height.url);
        
                    newGameImage.attr("alt", "nintendo game");

                    newGameImage.attr("data-still", results[i].images.fixed_height_still.url);

                    newGameImage.attr("data-animate", results[i].images.fixed_height.url);

//                    attr('data-state', 'still');

                    newGame.append(p);

                    newGame.append(newGameImage);

                    newGame.prependTo($("#gifs")); //It took me forever to find this error
                }

                $(".anImage").on("click", function () {
            
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

    
        //This function "adds" the buttons 

        // handles the event when clicked
        $("#find-game").on("click", function(){
            var gameButton = $("#gif-input").val();
            //adds the new animal

            var newButton = $('<button/>').addClass('btn btn-info animal').attr('data-name',gameButton).html(gameButton);
            
            $('.btn-primary').append(newButton);

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gameButton + "&api_key=ZKVap5tqWVjtisZqDPeS1CF3MM5obWWs&limit=10";
                console.log(gameButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(res) {
            
            $("#gif-input").empty();

            var results = res.data;

                for (var i = 0; i < results.length; i++) {

                    var newGameImage = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var newGameImage = $('<img/>');

                    newGameImage.addClass('anImg')

                    newGameImage.attr('src', results[i].images.fixed_height_still.url);

                    newGameImage.attr('data-still', results[i].images.fixed_height_still.url)

                    newGameImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    //newGame.append(p);

                    newGame.append(newGameImage);

                    newGame.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
        // API key=ZKVap5tqWVjtisZqDPeS1CF3MM5obWWs