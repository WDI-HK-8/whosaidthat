$(document).ready(function(){

  var QuoteFinder = function(){
     author = this.quotes;
  };
//populate drop down menu with all authors and their ids from the database
  $.ajax({
    type:'GET',
    url: 'authors',
      success: function(response){
        html = "<div id='selectAuthor'>"
        response.forEach(function(elem,i)){

          html += '<option>' + elem.name +  '</option>'
        }
      }
  }),
  
  // GET  quotes
    
  $.ajax({
    type: 'GET',
    url: 'quotes',
     success: function(response){
      html = '<div class="dAfterSearch col-lg-12">'
      
      response.forEach(function(elem,i) {

        
        html +=  '<div id="authorDOB">'
        html +=     '<p>quote:' + elem.quote + '</p>'
    });

    $('.dAfterSearch').append(html);
   },
   error: function(response){
     console.log("Cannot find quotes and data for author.");
  }
 }),

// GET bios of author 

  $.ajax({
    type: 'GET',
    url: 'authors',
     success: function(response){
      html = '<div class="dAfterSearch col-lg-12">'
      
      response.forEach(function(elem,i) {
        html +='<div id="authorDOB">'
        html += '<p>DOB:' + elem.DOB + '</p>'
        html +=  '</div>'
        html += '<div id="authorOccup">'
        html += '<p>Occupation/Industry:' + elem.occupation + '</p>'
        html += '</div>'
        html += '<div id="authorNationality">'
        html += '<p>Nationality:' + elem.nationality + '</p>'
        html += '</div>'
        html += '<div id="authorImage">'
        html += '<img id="authorImage" class="img-responsive center-block" src="">'
        html += '</div>'
       
    });

    $('.dAfterSearch').append(html);
   },
   error: function(response){
     console.log("Cannot find quotes and data for author.");
  }
 }),
        

    $('.dAfterSearch').append(html);
   },
   error: function(response){
     console.log("Cannot find quotes and data for author.");
  }
 }),

//Clear quotes data 

  $('#clearpostbtn').on('click', function(){
    $.ajax({
      type: "DELETE",
      url: "quotes",
      success: function(response){
        console.log(response);
      },
    });
  }),

  //Clear delete data 

  $('#clearpostbtn').on('click', function(){
    $.ajax({
      type: "DELETE",
      url: "authors",
      success: function(response){
        console.log(response);
      },
    });
  });

};




// $('#clickDisplay').click(function(){
//     var search = $('#searchterms').val()
//     urlDestination="findRecipe?search="+search;
//     window.location.href=urlDestination;
//   })



//2. GET type an author into the input bar, display data from authors database, give quotes also 
//      QuoteFinder.prototype.searchAuthor = function(author){
//        $.ajax({
//         context: this,
//         type: 'GET',
//         url: '/authors/search',
//         success: function(response){
//            response.forEach(function(elem,i) {
//                 html = '<div class="results container col-lg-12">';
//                 html +=    '<div id= 'authorName' class='col-xs-12'>';
//                 html +=       '<h1>'+elem.name+'</h1>';
//                 html +=     '</div>'
//                 html +=     '<div id=authorImage>' class="col-xs-12">';
//                 html +=       '<img class="img-responsive center-block" src="+elem.picture+">';
//                 html +=     '</div>'
//                 html +=     '<div id='authorDOB' class='col-xs-12'>';
//                 html +=        '<h3>'+elem.DOB+'</h3>';
//                 html +=     '</div>'
//                 html +=     '<div id='authorOccup' class='col-xs-12'>';
//                 html +=         '<h3>'+elem.Occup+'</h3>';
//                 html +=     '</div>'
//                 html +=     '<div id='authorNationality' class='col-xs-12'>';
//                 html +=          '<h3>'+elem.nationality+'</h3>';
//                 html +=      '</div>'
//                 html += '</div>'
//         $('.dAfterSearch').append(html);
//       })
//     },
//         error: function(response){
//         console.log("Cannot find quotes and data for author.");
//         }
//     })
// $('#clearpostbtn').on('click', function(){
//     $.ajax({
//       type: "DELETE",
//       url: "/quotes",
//       success: function(response){
//         console.log(response);
//       }
//     })
//   })

//   $('#submitTerms').click(function(){
//     var search = $('#searchterms').val()
//     urlDestination="findRecipe?search="+search;
//     window.location.href=urlDestination;
//   })
// })
                

 



    //   var constructHtml = function(response, keys){
    //     var html = '';

    //     keys.forEach(function(key){
    //     html += '<li>';
    //     });

    //  return html;
    // };

    // var successFunction = function(response){
    //   alert("Finish searching for", author);
    //   alert("These are the quotes below:", response)
    // }

    //   };
    //  }


//3. GET type a string of a quote, searches through the quote database and displays a quote with author data
//     QuoteFinder.prototype.searchQuoteString = function(quote)
//    $.ajax({
//     type: 'GET',
//     url: '/quotes/' +quote,
//    })
    
//     $('#').on('click', function(){
//        var search = $('searchterms').val()
//        urlDestination="quotes?search="+search;
//        window.location.href = urlDestination;

//     })

//     }

// //4. GET type a DOB, occupation, or nationality, get an author's name, user may choose the author
//     QuoteFinder.prototype.searchData = function(DOB, occupation, nationality)
//      $.ajax({

//      })
    

// //4. DELETE /quotes/{id}  delete/clears a quote
//     QuoteFinder.prototype.deleteQuotes = function(){
//       $.ajax({
//       type: 'DELETE',
//       url: '/quotes',
//       success: function(response){
//         alert("All quotes cleared.")
//         window.location.href = '/';
//        }
//       })
//     }
   
// //5. DELETE /author/{id}t   Delete/clears an author's profile
//     $.ajax({
      
//     })
 

//   })
});