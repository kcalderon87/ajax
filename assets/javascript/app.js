//====variable====
	var charactersComic = ['Batman', 'Superman', 'The Flash', 'Captain America', 'Ant-man', 'Spider-man', 'The Joker', 'Poison Ivy', 'Ultron'];

//====
	function displayCharacterGif(){

		var character = $(this).data('data-comic');
		var APIKey = "dc6zaTOxFJmzC"
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=" + APIKey + "&limit=10&rating=g&rating=pg";
		var limit = 10;
		
		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
			console.log(response);
	
			var results = response.data;

			for (var i = 0; i < results.length; i++) {
				var characterDiv = $('<div class="character">');
				var rating = results[i].rating;
				var rate = $('<p>').text("Rating: " + rating);
				var gifImage = $('<img>');
				
				gifImage.attr('src', results[i].images.fixed_height.url);
				characterDiv.append(rate);
				characterDiv.append(gifImage);

				$('#images').prepend(characterDiv);
			}

		});

	}

	