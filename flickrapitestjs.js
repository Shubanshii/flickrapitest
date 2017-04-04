var FLICKR_API_URL = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=223dada70906f1313c684816e130e877&auth_token=72157680159533291-b7631e7af6089cc2&api_sig=a5c201ec4996f4b6fc3bd310c872522b&";
//&format=json&nojsoncallback=1";  

function getDataFromAPI(searchTerm, callback){
	var params = {
	
	};
	  $.getJSON(FLICKR_API_URL + "tags=" + searchTerm + "&format=json&nojsoncallback=1", function(json){
	  	var resultElement = '';
	  	resultElement += '<div><img src="https://farm' + json.photos.photo[1].farm + '.staticflickr.com/' + json.photos.photo[1].server + '/' + json.photos.photo[1].id + '_' + json.photos.photo[1].secret + '.jpg"></div>'
	 	$('.js-search-results').html(resultElement);
	  });


}

// function displayFlickrImage(data){
// 	console.log(json.photos.photo);
// 	var resultElement = '';
// 	//console.log(data.items[1]);
// 	if(data.items[1].id.kind === "youtube#video"){
// 		console.log("working");
// 	}
// 	  if (data.items) {
//     data.items.forEach(function(item) {
//     	if(item.id.kind === "youtube#video"){
//     		console.log(item.id.videoID);
//     		resultElement += '<div><a href=https://www.youtube.com/watch?v='+item.id.videoId+'><img src='+item.snippet.thumbnails.default.url+'></a></div>';
//     	}
//     });
//   }
//   else {
//     resultElement += '<p>No results</p>';
//   }
  
//   $('.js-search-results').html(resultElement);

// }



$(document).ready(function(){
	$('.js-search-form').submit(function(e) {
	flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
	var query = $(this).find('.js-query').val();
	flickrOptions = {
		tags: query,
		format: "json"}

	function renderPhotos(data){
		console.log(data.items[0].media.m);
		resultElement = '<img src="' + data.items[0].media.m + '" >';
		//resultElement = '<div><img src="' + json.title + '"></div>'
		$('.js-search-results').html(resultElement);
}
		
	$.getJSON(flickrAPI, flickrOptions, renderPhotos);
    e.preventDefault();
    var query = $(this).find('.js-query').val();
   // getDataFromAPI(query, displayFlickrImage);
  });

})