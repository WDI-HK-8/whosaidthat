var Hapi = require('hapi');


exports.register = function(server, options, next){

  server.route([
  
    {
      //GET all quotes by selecting author
      method: 'GET',
      path: '/quotes',
      handler: function(request, reply){
        reply(quotes);
          var db = request.server.plugins['hapi-mongodb'].db;

          db.collection('quotes').find().toArray({
            function(err, quotes){
             if (err) {return reply('Internal MongoDB error', err);}
            }
          })
      }
    },
    //GET one quote, add select author or finding parts of that phrase from input box 
    {
      method: 'GET',
      path: "/quotes/{id}",
      handler:function(request, reply){
        var quoteID = encodeURIcomponent(
          request.params.id);
        var db = request.server.plugin['hapi-mongodb'].db;
        var ObjectId = request.server.plugins['hapi-mongodb'].ObjectID;

        dbcollection('quotes').findOne({"_id": ObjectId(quoteID)}), function(err, quote){
        if (err) {return reply('Internal MongoDB error', err);}

        reply(quote);
        }
      }
    },
   
   // POST a quote, would this be necessary?
   {
     method: 'POST',
     path: '/quotes',
     config:{
       handler:function(request, reply){
        Auth.authenticated(request,function(result){
          if (result.authenticated) {
            var db = request.server.plugins['hapi-mongodb'].db;

            var quote = {
              "message": request.payload.quote.message,
                "user_id: result.user_id"
            };

            db.collection('quotes').insert(quotes, function (err, writeResult){
              if (err) {return reply('Internal MongoDB error', err);}

              reply(writeResult);
            });

          }else {
            reply(result.message);
          }
        })
       },
       validate: {
        payload:  {
          quote: Joi.string().min(1).max(180).required()
        }
       }
     }
   },

  ]);
  next();
}
db.collection. insert
var quotes = [
  {
    author: 'Walt Disney',
    DOB: '1901',
    nationality: 'American',
    occupation: 'film producer', 'animator', 'cartoonist', 'entrepreneur', 

    quotes: ['All the adversity I’ve had in my life, all my troubles and obstacles, have strengthened me… You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you',

    'What ever you do, do it well. Do it so well that when people see you do it they will want to come back and see you do it again and they will want to bring others and show them how well you do what you do',

    'You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.',

    'All our dreams can come true, if we have the courage to pursue them.']
  },

  { 
    author: 'Andrew Carnegie',
    DOB: '1835'
    nationality:'American','Scottish',
    occupation: 'industrialist', 'metal', 'US steel', 'philanthropist', 'businessman', 'business',

    quotes:['He that cannot reason is a fool. He that will not is a bigot. He that dare not is a slave.',

    'It marks a big step in your development when you come to realize that other people can help you do a better job than you could do alone.',

    'You cannot push anyone up a ladder unless he is willing to climb a little.',

    'A man who acquires the ability to take full possession of his own mind may take possession of anything else to which he is justly entitled.',

    'People who are unable to motivate themselves must be content with mediocrity, no matter how impressive their other talents.',

    'Concentrate your energies, your thoughts and your capital. The wise man puts all his eggs in one basket and watches the basket.']
  },

  {
    author: 'Henry Ford'
    DOB: '1863',
    nationality: 'American'
    occupation: 'Founder of Ford Motor', 'engineer', 'businessman', 'inventor',
    quotes:[,]

  },

  {
    author:'Napoleon',
     DOB:'1769',
    nationality:'French',
    occupation:'dictator','General', 'military', 'leader','political', 'politics', 'governor',
    quotes:[,] ,
  },
  {
   Oscar Wilde
      DOB:'1854',
    nationality:'Irish', 'English', 'British',
    occupation:'author', 'playright', 'poet', 'writer',
    quotes:[,] 
  },
  {
  Aristotle 
     DOB: '384 BC',
    nationality: 'Greek',
    occupation:'philopsopher', 'thinker', 'writer', 'scientist',
    quotes:[,]
  },

    {
    author: 'Socrates'
    DOB: '469 BC',
    nationality: 'greek',
    occupation: 'philosophy', 'ethics', 'writer',
    quotes:[,]
  },

  {
    author: albert Einstein 
       DOB:'1879',
    nationality:'German','Swiss', 'American,'
    occupation: 'scientist', 'thinker', 'physicist', 'physics', 'science', 
    quotes:[,]
  },
  {
    author: Benjamin Franklin
       DOB:'1785',
    nationality:'American',
    occupation:'inventor', 'diplomat',  'author', 'printer', 'political theorist', 'politician', 'postmaster', 'scientist', 'civic activist', 'statesman', and 'diplomat',
    quotes:[,]
  },
  {
  author: Winston Churchhill
     DOB:'1874',
    nationality:'English', 'British',
    occupation:,
  quotes:['failure is never final',]

  },
  {
  author: 'Dr. Seuss'
     DOB:'1904',
    nationality:,
    occupation: 'writer', 'author', 'children',
  quotes:['Be who you are and say what your feel, because those who mind dont matter and those who matter dont mind',] 
  },
  {
  Michael Jordan 
     DOB:'1963',
    nationality:'American',
    occupation: 'athlete', 'sports', 'basketball'
    quotes:[,]
  }.
  {
  author: Thomas Edison 
     DOB:'1847',
    nationality:,'American',
    occupation:'inventor','businessman',
    quotes:[,] 
  },
  {
   author: John D. Rockefeller,
      DOB:'1839',
    nationality: 'American',
    occupation: 'oil', 'business', 'industrialist','businessman'
    quotes:[,]
  },
  {
   author: 'Abraham Lincoln'
   DOB: '1809'
   nationality: 'American'
   occupation: 'president'
   quotes:[,]
  },

  {
    author: 'Warren Buffett'
    DOB: '1930',
    nationality: 'American',
    occupation: 'investor','business', 'businessman', 'Berkshire Hathaway', 'philanphropist'
    quotes:[,]
  },

]

var server = hapi.createServer('0.0.0.0', parseInt(process.env.PORT,10) ||3000);
