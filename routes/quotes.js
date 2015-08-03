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

            var tweet = {
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

    text:'He that cannot reason is a fool. He that will not is a bigot. He that dare not is a slave.',

    text:'It marks a big step in your development when you come to realize that other people can help you do a better job than you could do alone.',

    text:'You cannot push anyone up a ladder unless he is willing to climb a little.',

    text: 'A man who acquires the ability to take full possession of his own mind may take possession of anything else to which he is justly entitled.',

    text: 'People who are unable to motivate themselves must be content with mediocrity, no matter how impressive their other talents.',

    text: 'Concentrate your energies, your thoughts and your capital. The wise man puts all his eggs in one basket and watches the basket.',
  },

  {
    author: 'Henry Ford'
    DOB: '1863',
    nationality: 'American'
    occupation: 'Founder of Ford Motor', 'engineer', 'businessman', 'inventor'
    text:

  },

  {
    author:'Napoleon',
     DOB:'1769',
    nationality:'French',
    occupation:'dictator','General', 'military', 'leader','political', 'politics', 'governor'
    text: ,
  },
  {
   Oscar Wilde
      DOB:'1854',
    nationality:'Irish', 'English', 'British',
    occupation:'author', 'playright', 'poet', 'writer' 
  },
  {
  Aristotle 
     DOB: '384 BC',
    nationality: 'Greek',
    occupation:'philopsopher', 'thinker', 'writer', 'scientist',
  },

    {
    author: 'Socrates'
    DOB: '469 BC',
    nationality: 'greek',
    occupation: 'philosophy', 'ethics', 'writer'
    text: ,
  },

  {
    author: albert Einstein 
       DOB:'1879',
    nationality:'German','Swiss', 'American,'
    occupation: 'scientist', 'thinker', 'physicist', 'physics', 'science' 

  },
  {
    author: Benjamin Franklin
       DOB:'1785',
    nationality:'American',
    occupation:'inventor', 'diplomat',  'author', 'printer', 'political theorist', 'politician', 'postmaster', 'scientist', 'civic activist', 'statesman', and 'diplomat'

  },
  {
  author: Winston Churchhill
     DOB:'1874',
    nationality:'English', 'British',
    occupation:,
  text: 'failure is never final'

  },
  {
  author: 'Dr. Seuss'
     DOB:'1904',
    nationality:,
    occupation: 'writer', 'author', 'children',
  text: 'Be who you are and say what your feel, because those who mind don't matter and those who matter don't mind'
  },
  {
  Michael Jordan 
     DOB:'1963',
    nationality:'American',
    occupation: 'athlete', 'sports', 'basketball'
  }.
  {
  author: Thomas Edison 
     DOB:'1847',
    nationality:,'American',
    occupation:'inventor','businessman', 
  },
  {
   author: John D. Rockefeller,
      DOB:'1839',
    nationality: 'American',
    occupation: 'oil', 'business', 'industrialist','businessman'
  },
  {
   author: 'Abraham Lincoln'
   DOB: '1809'
   nationality: 'American'
   occupation: 'president'
  },

  {
    author: 'Warren Buffett'
    DOB: '1930',
    nationality: 'American',
    occupation: 'investor','business', 'businessman', 'Berkshire Hathaway', 'philanphropist'
  },

]

var server = hapi.createServer('0.0.0.0', parseInt(process.env.PORT,10) ||3000);
