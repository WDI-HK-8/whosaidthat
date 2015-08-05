var Hapi = require('hapi');

exports.register = function(server, options, next){

  server.route([
  
    //1. GET/quotes all quotes GET 
    {
      method: 'GET',
      path: '/quotes',
      handler: function(request, reply) {
        var db = request.server.plugins['hapi-mongodb'].db;

        db.collection('quotes').find().toArray(function(err, quotes){
          if (err) {return reply('Internal MongoDB error', err);}
          reply(quotes);
        });
      }
    },

    //2. GET/quotes/{id} one quote
    {
      method: 'GET',
      path: '/quotes/{id}',
      handler: function(request, reply) {
        var db       = request.server.plugins['hapi-mongodb'].db;
        var ObjectID = request.server.plugins['hapi-mongodb'].ObjectID;
        var quote_id = ObjectID(encodeURIComponent(request.params.id));

        db.collection('quotes').findOne({"_id": quote_id}, function(err, quotes){
          if (err) {
            return reply('Internal MongoDB error',err);
          }
          reply(quotes);
        })
      }
    },

    //3. POST /quotes post all quotes
    {
      method: 'POST',
      path: '/quotes',
      handler: function(request, reply){
        var db = request.server.plugins['hapi-mongodb'].db;
      
        var quote = { message: request.payload.quote.message };

        db.collection('quotes').insert(quote, function(err, writeResult){
          if (err) { return reply('Internal MongoDB error', err) };

          reply(writeResult);
        });
      }
    },

    //4. DELETE /quotes/{id}  delete a quote 
    {
      method: 'DELETE',
      path: '/quotes/{id}',
      handler: function(request, reply) {

        var quote_id = encodeURIComponent(request.params.id);
        var db = request.server.plugins['hapi-mongodb'].db;
        var ObjectId = request.server.plugins['hapi-mongodb'].ObjectID;

        db.collection('quotes').remove({ "_id": ObjectId(quote_id) }, function(err, writeResult) {
          if (err) { return reply('Internal MongoDB error', err); }

          reply(writeResult);
        });
      }
    },

    //5. GET /quotes/search?query=best   Search for quotes
    {
      method: 'GET'
      path: '/quotes/search',
      handler: function(request, reply) {
        var search = request.query.search;
        findSearch = (search.replace(',','""');

        var db = request.server.plugins['hapi-mongodb'].db;

        db.collection('quotes').find({$text:{$search: findIngredients}}).toArray(function(err, result)){
          if (err) {return reply("Internal MongoDB error", err);}

        reply(result);
      })
     }
    },

    //6. PUT /quotes/{id}
    
  ]);
  next();
}


// var server = hapi.createServer('0.0.0.0', parseInt(process.env.PORT,10) ||3000);

exports.register.attributes = {
  name: 'quotes-routes',
  version: '0.0.1'
} 