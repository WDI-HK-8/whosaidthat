exports.register = function(server, options, next){

  server.route([
    method: 'GET',
    path: '/quotesinsert',
    handler: function(request, reply) {
      
      var quotes = [
        {
          author: 'Walt Disney',
          DOB: '1901',
          nationality: 'American',
          occupation: ['film producer', 'animator', 'cartoonist', 'entrepreneur'],

          quotes: ['All the adversity I’ve had in my life, all my troubles and obstacles, have strengthened me… You may not realize it when it happens, but a kick in the teeth may be the best thing in the world for you',

          'What ever you do, do it well. Do it so well that when people see you do it they will want to come back and see you do it again and they will want to bring others and show them how well you do what you do',

          'You can design and create, and build the most wonderful place in the world. But it takes people to make the dream a reality.',

          'All our dreams can come true, if we have the courage to pursue them.']
        },
        { 
          author: 'Andrew Carnegie',
          DOB: '1835',
          nationality:'American',
          occupation: ['industrialist', 'metal', 'US steel', 'philanthropist', 'businessman', 'business'],

          quotes:['He that cannot reason is a fool. He that will not is a bigot. He that dare not is a slave.',

          'It marks a big step in your development when you come to realize that other people can help you do a better job than you could do alone.',

          'You cannot push anyone up a ladder unless he is willing to climb a little.',

          'A man who acquires the ability to take full possession of his own mind may take possession of anything else to which he is justly entitled.',

          'People who are unable to motivate themselves must be content with mediocrity, no matter how impressive their other talents.',

          'Concentrate your energies, your thoughts and your capital. The wise man puts all his eggs in one basket and watches the basket.']
        },

        {
          author: 'Henry Ford',
          DOB: '1863',
          nationality: 'American',
          occupation: ['Founder of Ford Motor', 'engineer', 'businessman', 'inventor'],
          quotes:[

          'There is one rule for the industrialist and that is: Make the best quality of goods possible at the lowest cost possible, paying the highest wages possible.','Obstacles are those frightful things you see when you take your eyes off your goal.',

          'Dont find fault, find a remedy.',

          'I cannot discover that anyone knows enough to say definitely what is and what is not possible.',

          'When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.',

          'If you think you can do a thing or think you cant do a thing, youre right.',

          'You cant build a reputation on what you are going to do.']

        },

        {
          author:'Napoleon',
          DOB:'1769',
          nationality:'French',
          occupation:['dictator','General', 'military', 'leader','political', 'politics', 'governor'],
          quotes:[ 

          'Ability is nothing without opportunity.',

          'Women are nothing but machines for producing children.',

          'Never interrupt your enemy when he is making a mistake.',

          'The people to fear are not those who disagree with you, but those who disagree with you and are too cowardly to let you know.',

          'Power is my mistress. I have worked too hard at her conquest to allow anyone to take her away from me.',

          'The people to fear are not those who disagree with you, but those who disagree with you and are too cowardly to let you know.'
          ] ,
        },
        {
         author: 'Oscar Wilde',
            DOB:'1854',
          nationality:'Irish',
          occupation:['author', 'playright', 'poet', 'writer'],
          quotes:['Be yourself- everyone else is already taken.',

          'The only thing that sustains one through life is the consciousness of the immense inferiority of everybody else, and this is a feeling that I have always cultivated.',

           'Education is an admirable thing, but it is well to remember from time to time that nothing that is worth knowing can be taught.', 

           'I am so clever that sometimes I dont understand a single word of what I am saying.', 

           'The truth is rarely pure and never simple.',

           'When I was young I thought that money was the most important thing in life; now that I am old I know that it is',

           'You can never be overdressed or overeducated.'
           ] 
        },
 
        {
          author: 'Albert Einstein', 
             DOB:'1879',
          nationality:'American',
          occupation: ['scientist', 'thinker', 'physicist', 'physics', 'science'], 
          quotes:[
          'A perfection of means, and confusion of aims, seems to be our main problem',
          
          'Everyone should be respected as an individual, but no one idolized',
          
          'You have to learn the rules of the game. And then you have to play better than anyone else',
          
          'Look deep into nature, and then you wil understand everything better',
          
          'Try not to be a man of success, rather, try to become a man of value',

          'When you are courting a nice girl an hour seems like a second. When you sit on red hot cinder a second seems like an hour. That is relativity.'
          ]
        },
        {
          author: 'Benjamin Franklin',
          DOB:'1785',
          nationality:'American',
          occupation:['inventor', 'diplomat',  'author', 'printer', 'political theorist', 'politician', 'postmaster', 'scientist', 'civic activist', 'statesman','diplomat'],
          quotes:[
           'Time is money.',

           'Honesty is the best policy.',

           'By failing to prepare, you prepare to fail',

           'There are three things extremely hard: steel, diamond, and to know oneself',

           'Old boys have their playthings as well as young ones, the difference is their price',

           'Any fool can criticize, condemn, and complain - and most fools do'
          ]
        },
        {
        author: 'Winston Churchhill',
          DOB:'1874',
          nationality: 'British',
          occupation: ['Prime Minister','British Statesman','leader', 'British Army'],
        quotes:[
        'success is not final, failure is not fatal: it is the courage to continue that counts',

        'We make a living by what we get, but we make a life by what we give',

        'success consists of going through failure to failure without lost of enthusiasm',

        'Attitude is a little thing that makes a big difference',

        'Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen',

        'I may be drunk, Miss, but in the morning I will be sober and you will be ugly',
        ]
        },

        {
        author: 'Thomas Edison', 
           DOB:'1847',
          nationality: 'American',
          occupation:['inventor','businessman'],
          quotes:[

          'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time',

          'If we did all the things we are capable of, we would literally astound ourselves',

          'Opportunity is missed by most people because it is dressed in overalls and looks like work',

          'I have not failed, I have just found 10,000 ways that will not work.',

          'Being busy does not always mean real work. The object of all work is production or accomplishment. To meet these ends there must be forethought, system, planning, intelligence, and honest purpose, as well as perspiration. Seeming to do is not doing.',

          'There is no substitute for hard work. Genius is one percent inspiration and ninety nine percent perspiration'
          ] 
        },
        {
         author: 'John D. Rockefeller',
            DOB:'1839',
          nationality: 'American',
          occupation: ['oil', 'business', 'industrialist','businessman'],
          quotes:[
          'Dont be afraid to give up the good to go for the great',
           
           'Charity is injurious unless it helps the recipient become independent of it',

           'I do not think that there is any other quality so essential to success of any kind as the quality of perserverance. It overcomes almost everything, even nature',

           'If you want to succeed in business you should strike out new paths, rather than travel the worn paths of accepted success',

           'Next to doing the right thing, the most important thing is to let people know you are doing the right thing',

           'Singleness of purpose is one of the chief essentials for success in life, no matter what may be ones aim',
          ]
        },
        {
         author: 'Abraham Lincoln',
         DOB: '1809',
         nationality: 'American',
         occupation: ['president', 'lawyer', 'leader'],
         quotes:[

         'In the end, its not the years in your life that count. It is the life in your years',

         'Character is like a tree and reputation like a shadow. The shadow is what we think of it; the tree is the real thing',

         'Be sure you put your feet in the right place, then stand firm',

         'Most folks are as happy as they make their minds up to be',

         'Give me six hours to chop down a tree and I will spend the first four sharpening',

         'Better to remain silent and be though a fool than to speak out and remove all doubt',

         'Nearly all men can stand adversity, but if you want to test a mans character, give him power',

         'Things may come to those who wait but only the things left by those who hustle'

         ]
        },

        {
          author: 'Warren Buffett',
          DOB: '1930',
          nationality: 'American',
          occupation: ['investor','business', 'businessman', 'Berkshire Hathaway', 'philanphropist'],
          quotes:[
          'Risk comes from not knowing what you are doing',

          'It takes 20 years to build a reputation and five minutes to ruin it. If you think about that, you will do things differently',

          'The chains of habit are too light to be felt until they are too heavy to be broken',

          'Wall Street is the only place where people who ride in a Rolls Royce get advice from those who take the subway',

          'Be fearful when others agre greedy, be greedy when others are fearful',

          'Should you find yourself in a chronically leaking boat, energy devoted to changing vessels is likely to be more productive than energy devoted to patching leaks',

          ]
        },
      ];
      //  var db = request.server.plugins['hapi-mongodb'].db;
      // for (var i=0; i<quotes.length; i++){
      //    db.collection('quotes').insert(quote, function(err, writeResult)){
      //     if (err) {return reply}
      //    }
      // }
    };   
  
  ]);
  next();
};
exports.register.attributes = {
  name: 'quotesinsert-route',
  version: '0.0.1'
}





