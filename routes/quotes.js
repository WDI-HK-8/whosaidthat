var Hapi = require('hapi');

exports.register = function(server, options, next){

  server.route([
  
    //1. GET all quotes GET /quotes
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

    //2. GET one quote, add select author or finding parts of that phrase from input box 
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

    //3. POST /quotes
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
    
    //4. PUT /quotes/{id} 
    //5. DELETE /quotes/{id}
    //6. GET /quotes/search?query=best   Search for quotes
    

  ]);
  next();
}


// var server = hapi.createServer('0.0.0.0', parseInt(process.env.PORT,10) ||3000);

exports.register.attributes = {
  name: 'quotes-routes',
  version: '0.0.1'
} 