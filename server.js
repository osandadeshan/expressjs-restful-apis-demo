var express = require('express'), // Call express
    app = express(), // Define our app using express
    port = process.env.PORT || 3000, // Set the port
    mongoose = require('mongoose'), // Call mongoose to interact with a MongoDB(Database) instance
    Task = require('./api/models/tasksModel'), // Created model loading here
    bodyParser = require('body-parser'); //Middleware to process incoming request body objects
  
// Mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tasksdb'); 

/* Configure app to use bodyParser()
   this will let us get the data from a POST */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Importing route
var routes = require('./api/routes/tasksRoutes'); 

//Register the route
routes(app); 

// Start the server
app.listen(port);
console.log('RESTful API demo server started on: ' + port);

// Get an instance of the express Router
var router = express.Router();

// Health route to make sure everything is working (accessed at GET http://localhost:3000/health)
app.use('/health', require('express-healthcheck')({
  healthy: function () {
      return { message: 'ExpressJS web service is up and running' };
  }
}));

// All of our routes will be prefixed with /api
app.use('/api', router);

// Returning response with 404 when incorrect url is requested 
app.use(function(req, res) {
  res.status(404).send({ error: { errors: [ { domain: 'global', reason: 'notFound', message: 'Not Found', 
                        description: 'Couldn\'t find the requested resource \'' + req.originalUrl + '\'' } ], code: 404, message: 'Not Found' } })
});