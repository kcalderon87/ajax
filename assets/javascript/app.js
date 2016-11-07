//====variable====
	var charactersComic = ['Batman', 'Superman', 'The Flash', 'Captain America', 'Ant-man', 'Spider-man', 'The Joker', 'Poison Ivy', 'Ultron'];

//====
	function displayCharacterGif(){

		var character = $(this).data('data-name');
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=dc6zaTOxFJmzC&limit=10&rating=g&rating=pg";
		
		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {
			console.log(response);
	
			var results = response.data;

			for (var i = 0; i < results.length; i++) {
				var characterDiv = $('<div class="character">');
				var rating = results[i].rating;
			}
			
