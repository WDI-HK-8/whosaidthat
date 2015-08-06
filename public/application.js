$(document).ready(function(){
  //populate drop down menu with all authors and their ids from the database
  $.ajax({
    type: 'GET',
    url: 'authors',
    success: function(response){
      html = "";

      response.forEach(function(elem,i){
       html += '<option label="' + elem.name + '" value="' + elem._id + '"></option>'
      });

      $('#selectAuthor select').append(html);
    }
  });
  // once an author is selected, generate quotes and all bios 

  $('#clickDisplay').click(function(){
    var option = $('select option:selected')[0];

    $.ajax({
      type: 'GET',
      url: 'authors/' + option.value,
      success: function(response){
        html = '<div class="dAfterSearch col-lg-12">'

        response.quotes.forEach(function(elem,i) {
          html +=  '<div id="authorDOB">'
          html +=     '<p>quote:' + elem.quote + '</p>'
          html +=  '</div>'
        });

        html +=  '<div id="authorOccup">'
        html +=     '<p>Occupation/Industry:'+response.author.occup+'</p>'
        html += ' </div>'
        html +=  '<div id="authorNationality">'
        html +=    '<p> Nationality:' + response.author.nationality + '</p>'
        html +=  '</div>'
        html +=  '<div id="authorImage">'
        html +=    '<img id="authorImage" class="img-responsive center-block" src="' + response.author.images +'">'
        html +=  '</div>'
        html +=    '<button class="btn btn-success" type="button" id="clearpostbtn">Clear Post </button>'
        html +=  '</div>'

        $('.dAfterSearch').append(html);
      },
      error: function(response){
        console.log("Cannot find quotes and data for author.");
      }
    });
  });

  // Search Quotes
  $('#searchauthorbtn').click(function(){
    var query = $('#searchAuthor').val();

    $.ajax({
      type: 'GET',
      // http://localhost:3000/quotes/search?terms=fool
      url: 'quotes/search?terms=' + query,
      success: function(response){

        html = '<div class="dAfterSearch col-lg-12">'

        response.forEach(function(elem,i) {
          html +=  '<div id="authorDOB">'
          html +=     '<p>' + elem.quote + '</p>'
          html +=  '</div>'
        });

        $('.dAfterSearch').append(html);

      }
    })
  });

});
