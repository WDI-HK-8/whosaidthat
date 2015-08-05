
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

        db.collection('authors').findOne({"_id": author_id}, function(err, authors){
          if (err) {
            return reply('Internal MongoDB error',err);
          }
          reply(authors);
        })
      }
    },


    
  ]);
  next();
}


// var server = hapi.createServer('0.0.0.0', parseInt(process.env.PORT,10) ||3000);

exports.register.attributes = {
  name: 'authors-routes',
  version: '0.0.1'
} 



   