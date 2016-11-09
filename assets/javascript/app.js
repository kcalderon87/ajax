//====variable for buttons====
	var charactersComic = ['Batman', 'Superman', 'The Flash', 'Captain America', 'Ant-man', 'Spider-man', 'The Joker', 'Poison Ivy', 'Ultron'];

//====displaying gifs=====
	function displayCharacterGif(){

		var character = $(this).data('comic');
		var APIKey = "dc6zaTOxFJmzC"
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=" + APIKey + "&limit=10&rating=g&rating=pg";
		var limit = 10;
		
		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
			console.log(response);
	
			var results = response.data;

			for (var i = 0; i < results.length; i++) {
				var characterDiv = $('<div id="show">');
				var rating = results[i].rating;
				var rate = $('<p>').text("Rating: " + rating);
				var gifImage = $('<img>');
				
				var still = results[i].images.fixed_height_still.url;
				var animated = results[i].images.fixed_height.url;
             	gifImage.attr('src', still);
             	gifImage.attr('data-still', still);
             	gifImage.attr('data-animate', animated);
             	gifImage.attr('data-state', 'still')
             	gifImage.addClass('gifImage');

				characterDiv.append(rate);
				characterDiv.append(gifImage);

				$('#images').prepend(characterDiv);
			}

		});

	}

	// ====Still and animate feature====

	$(document).on('click','.gifImage', function() {
		var state = $(this).attr('data-state');

		if (state == 'still') {
			$(this).attr('src', $(this).data('animate'));
			$(this).attr('data-state', 'animate');
		}else{
			$(this).attr('src', $(this).data('still'));
			$(this).attr('data-state', 'still');
		}
	});

	// ====so buttons appear====

	function renderButtons(){ 
		//characterDiv.empty();
		$('#buttonsView').empty();

		for (var i = 0; i < charactersComic.length; i++){

		    var btn = $('<button>');
		    btn.addClass('character');
		    btn.data('comic', charactersComic[i]);
		    btn.text(charactersComic[i]);
		    $('#buttonsView').append(btn);

		}
	}

	// ====when button is clicked/submitted====

	$('#addCharacter').on('click', function(){

		var character = $('#choose').val().trim();

		charactersComic.push(character);
		
		renderButtons();

		return false;
	})

	$(document).on('click', '.character', displayCharacterGif);

	renderButtons();


	//things to fix:
	//1. should not add more pictures when new btns clicked
