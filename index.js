// index.js

// Require hapi
var Hapi = require('hapi');
var Path = require('path');

var server = new Hapi.Server();

// Configure server connections
server.connection({
  host: '0.0.0.0',
  port: process.env.PORT || 3000, // What is process.env.PORT? It's an environment variable prepared by Heroku Deployment
  routes: {
    // Cross-origin resource sharing (CORS) is a mechanism that enables many resources (e.g. fonts, JavaScript, etc.)
    // on a web page to be requested from another domain outside the domain from which the resource originated.
    cors: {
      headers: ["Access-Control-Allow-Credentials"],
      credentials: true
    } 
  }
});

server.views({
  engines:{
    html: require('handlebars')
  },
  path: Path.join(__dirname, 'templates')
});

// Require MongoDB
var plugins = [

  { register: require('./routes/quotes.js') },
  { register: require('./routes/static-pages.js')},
  { register: require('hapi-mongodb'),
    options: {
      "url": process.env.MONGOLAB_URI || "mongodb://127.0.0.1:27017/whosaidthat",
      "settings": {
        "db": {
          "native_parser": false
        }
      }
    }
  }
];

// Start server if there's no error in code
server.register(plugins, function (err) {
  if (err) {
    throw err;
  }

  server.start(function() {
    console.log('info', 'Server running at: ' + server.info.uri);
  });
});

// var Hapi = require('hapi');
// var server = new Hapi.Server();

// server.connection({
//   host: '0.0.0.0'
//   port: process.env.PORT || 3000,
//   routes:{

//   cors: {
//     header:["Access-Control-Allow-Credentials"],
//     credentials: true
//     }
//   }
// });

// // Require MongoDB
// var plugins = [

//   { register: require('./routes/users.js')},
//   { register: require('hapi-mongodb'),
//     options: {
//       "url": process.env.MONGOLAB_URI || "mongodb://127.0.0.1:27017/whosaidthat",
//       "settings": {
//         "db":{
//       "native_parser":false
//      }
//     }
//    }
//   }
// ];

// server.register(plugins.function (err) {
//   console.log('info', 'Server running at:' + server.info.uri);
//   });
// });