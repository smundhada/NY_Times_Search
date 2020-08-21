
   


    $(".submit").on("click", function () { 
      var titleSearch = $('#search').val();
      var numberArticles = $('#numberArticles').val();
      var endYear = $('#endYear').val();
      var startYear = $('#startYear').val();
      var userInput = "cats"
      console.log(titleSearch);

      var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + titleSearch +"&endYear="+ endYear +"&startYear="+ startYear +"&api-key=L1u0qkuWONsGdwpDFgUNCfUQ8GxtMoTr"
      var results;
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
         results = response.response.docs
        console.log(results);
        for (var i = 0; i < results.length; i++){
          var title_Article = results[i].headline.main;
          var divTitle = $("<div col-12>");
          divTitle.text(title_Article);
          $('#articles').append(divTitle);
        }
      });

      

    });
    
    
    