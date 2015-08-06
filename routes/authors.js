
var Hapi = require('hapi');

exports.register = function(server, options, next){

  server.route([
  
    //1. GET /authors 
    {
      method: 'GET',
      path: '/authors',
      handler: function(request, reply) {
        var db = request.server.plugins['hapi-mongodb'].db;

        db.collection('authors').find().toArray(function(err, authors){
          if (err) {return reply('Internal MongoDB error', err);}
          reply(authors);
        });
      }
    },

     // 2. GET /authors/{id}
    {
      method: 'GET',
      path: '/authors/{id}',
      handler: function(request, reply) {
        var db       = request.server.plugins['hapi-mongodb'].db;
        var ObjectID = request.server.plugins['hapi-mongodb'].ObjectID;
        var author_id = ObjectID(encodeURIComponent(request.params.id));

        db.collection('authors').findOne({"_id": author_id}, function(err, author){
          if (err) {
            return reply('Internal MongoDB error',err);
          }

          db.collection('quotes').find({ author: author_id }).toArray(function(err, quotes){
            reply({
              author: author,
              quotes: quotes
            });
          });
        })
      }
    },

    //3. POST /authors add a new author
    {
      method: 'POST',
      path: '/authors',
      handler: function(request, reply){
        var db = request.server.plugins['hapi-mongodb'].db;
      
        var author = {
          name:        request.payload.author.name,
          DOB:         request.payload.author.DOB,
          occupation:  request.payload.author.occupation,
          nationality: request.payload.author.nationality,
          image:       request.payload.author.image
       };

        db.collection('authors').insert(author, function(err, writeResult){
          if (err) { return reply('Internal MongoDB error', err) };

          reply(writeResult);
        });
      }
    },
    
    //4. DELETE /authors/{id}
      {
      method: 'DELETE',
      path: '/authors/{id}',
      handler: function(request, reply) {

        var author_id = encodeURIComponent(request.params.id);
        var db = request.server.plugins['hapi-mongodb'].db;
        var ObjectId = request.server.plugins['hapi-mongodb'].ObjectID;

        db.collection('authors').remove({ "_id": ObjectId(author_id) }, function(err, writeResult) {
          if (err) { return reply('Internal MongoDB error', err); }

          reply(writeResult);
        });
      }
    },

    //5. GET /quotes/search?query=best   Search for quotes
    {
      method: 'GET',
      path: '/authors/search',
      handler: function(request, reply) {
        var search = request.query.search;
        var findSearch = (search.replace(',','""'));

        var db = request.server.plugins['hapi-mongodb'].db;

        db.collection('quotes').find({$text:{$search: findAuthors}}).toArray(function(err, result){
          if (err) {return reply("Internal MongoDB error", err);}

        reply(result);
      })
     }
    },
    //6. PUT /authors/{id}

    
  ]);
  next();
}


// var server = hapi.createServer('0.0.0.0', parseInt(process.env.PORT,10) ||3000);

exports.register.attributes = {
  name: 'authors-routes',
  version: '0.0.1'
} 



   