
    var userInput = "cats"
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInput +"&api-key=L1u0qkuWONsGdwpDFgUNCfUQ8GxtMoTr"
    
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.response.docs
      console.log(results);
    });