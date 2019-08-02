# RESTful API Development using Express.js
<br />

## What is REST?
**REST**, or Representational State Transfer, is an architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server. We will go into what these terms mean and why they are beneficial characteristics for services on the Web.
The REST architectural style describes six constraints that were originally communicated by Roy Fielding in his doctoral dissertation and defines the basis of RESTful-style as:
1. Uniform Interface
2. Stateless
3. Cacheable
4. Client-Server
5. Layered System
6. Code on Demand (optional)
RESTful services use HTTP requests to perform **CRUD (Create, Read, Update, Delete) operations**.
<br />

## What is Express.js?
Express is a fast, assertive, essential and moderate web framework of Node.js. You can assume express as a layer built on the top of the Node.js that helps manage a server and routes. It provides a robust set of features to develop web and mobile applications.
Let’s see some of the core features of Express framework
* It can be used to design single-page, multi-page and hybrid web applications.
* It allows to setup middleware to respond to HTTP Requests.
* It defines a routing table which is used to perform different actions based on HTTP method and URL.
* It allows to dynamically render HTML Pages based on passing arguments to templates.
<br />

## Express.js Architecture
![](https://s3-eu-west-1.amazonaws.com/jssolutions/Article_Photo/Mobile+app+development+with+Express.js/express+js+mobile+development.jpg)
<br />

## Advantages of Express.js?
* Ultra-fast I/O
* Asynchronous and single threaded
* MVC like structure
* Robust API makes routing easy
<br />

## Tools/Technologies
* Node.js
* MongoDB
* Text editor (Notepad++, Sublime, Atom, VSCode)
* Postman
<br />

## Pre-requisites
Node.js and MongoDB should be installed. If you haven’t installed them, you can install from the below URLs.
* [Node.js](https://nodejs.org/en/download/package-manager/)
* [MongoDB](https://docs.mongodb.com/manual/installation/)
<br />

## Getting started
In this tutorial, I will guide you to develop RESTful APIs for CRUD operations using Mongoose and Express.js. Basically, you will be able to develop routes for **GET**, **POST**, **PUT** and **DELETE** HTTP methods.
Open your terminal and kindly follow the following steps.
1. Create a folder for your project. Here I will name it as "**expressjs-restful-apis-demo**" \
**`mkdir expressjs-restful-apis-demo`**
2. Navigate to that folder \
**`cd expressjs-restful-apis-demo`**
3. Create a "**package.json**" file — This package.json file provides the information of the project and its dependencies \
**`npm init`**
4. Press Enter to complete the creation of **package.json**
5. Add the below dependencies to your **package.json**
```json
"dependencies": {
        "express": "^4.17.1",
        "express-healthcheck": "^0.1.0",
        "mongoose": "^5.6.3"
}
```
6. Update your **package.json** with the following
```json
{
      "name": "expressjs-restful-apis-demo",
      "version": "1.0.0",
      "description": "Sample project to demo API development using express node and mongodb",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon server.js"
      },
      "author": "Osanda Deshan",
      "license": "ISC",
      "devDependencies": {
        "nodemon": "^1.19.1"
      },
      "dependencies": {
        "express": "^4.17.1",
        "express-healthcheck": "^0.1.0",
        "mongoose": "^5.6.3"
      }
}
``` 
7. Create a file named "**server.js**" — In this file, we will be writing the protocols to create our server
8. Create a folder called "**api**" \
**`mkdir api`** \
Inside this folder called **api**, create three separate folders called "**models**", "**routes**", and "**controllers**" by executing \
**`mkdir api/controllers api/models api/routes`**
9. Create "**tasksController.js**" in the `api/controllers` folder, "**tasksRoutes.js**" in the `api/routes` folder, and "**tasksModel.js**" in the `api/models` folder
10. Our folder structure should look like this now
![1](https://user-images.githubusercontent.com/9147189/62302191-75a7ae80-b469-11e9-977e-b1451e9b30dd.png)
<br />

## Setting up the server
1. Let’s install express and nodmon, express will be used to create the server while nodmon will help us to keep track of changes to our application by watching changed files and automatically restart the server \
**`npm install — save-dev nodemon`** \
**`npm install express –save`**
2. Then we can install **express-healthcheck**, which can be used to check the health of the server \
**`npm install express-healthcheck`**
3. Open the **server.js** file and type/copy the code below into it
```json
var express = require('express'), // Call express
app = express(), // Define our app using express
port = process.env.PORT || 3000, // Set the port
// Start the server
app.listen(port);
console.log('RESTful API demo server started on: ' + port);
```
4. On your terminal, execute \
**`npm start`** \
This will start the server and then you will see \
**RESTful API demo server started on: 3000**
<br />

## Setting up the schema
First, we need to install mongoose. Mongoose is what we will use to interact with a MongoDB(Database) instance. \
**`npm install mongoose –save`** \
After installation, open the **tasksModel.js** file in your `api/models` folder and type the following code into the file and save.
```json
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// JSON schema for 
var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Kindly enter the name of the task'
  },
  category: {
    type: String,
    required: 'Kindly enter the category of the task'
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['Pending', 'Ongoing', 'Completed']
    }],
    default: ['Pending']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);
```
From the code above, we are defining the set of attributes for our MongoDB collection. Simply this is the payload we need to use to create a task from the service. \
As you can see, it the task collection(table) will contain a name: a string, a category: a string and the date it was created. It also contains task status which we have defined as pending — a default value for every task created.
<br />

## Setting up the routes
Routing refers to determining how an application responds to a client request for a specific endpoint, which is a URI (or path) and a specific HTTP request method (**GET**, **POST**, and so on). \
Each of our routes has different route handler functions, which are executed when the route is matched. \
Below we have defined two basic routes(`/tasks`, and `/tasks/taskId`) with different methods \
`/tasks` has to methods(**GET** and **POST**), while `/tasks/taskId` has **GET**, **PUT** and **DELETE**. \
As you can see, we required the controller so each of the routes methods can call it’s respective handler function. \
To do this, open the **tasksRoutes.js** file in the route folder and paste the code snippet below into.
```json
'use strict';
var tasksList = require('../controllers/tasksController');


module.exports = function(app) {
  // Tasks List Routes
  app.route('/tasks')
    .get(tasksList.getAllTasks)
    .post(tasksList.createTask);

  app.route('/tasks/:taskId')
    .get(tasksList.getTaskById)
    .put(tasksList.editTaskById)
    .delete(tasksList.deleteTaskById);
};
```
<br />

## Setting up the controller
Open **tasksController.js** file with your text editor (VSCode, Sublime, Atom e.t.c) and let’s deep dive into coding.\
In this controller, we would be writing 5 different functions namely: **getAllTasks**, **createTask**, **getTaskById**, **editTaskById**, **deleteTaskById**. We will export each of the functions for us to use in our routes.\
Each of these functions uses different mongoose methods such as **find**, **findById**, **findOneAndUpdate**, **save** and **remove**.
```json
'use strict';
var mongoose = require('mongoose'),
Task = mongoose.model('Tasks');


// Retrieve all the tasks saved in the database
exports.getAllTasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(task);
    }
  });
};

// Create a new task
exports.createTask = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).json(task);
    }
  });
};

// Retrieve a task by taskId
exports.getTaskById = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err) {
      res.status(404).send({ error: { errors: [ { domain: 'global', reason: 'notFound', message: 'Not Found', 
                            description: 'Couldn\'t find the requested taskId \'' + req.params.taskId + '\'' } ], err, code: 404 } })
    } else {
      res.json(task);
    }
  });
};

// Edit a task by taskId
exports.editTaskById = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err) {
      res.status(400).send(err);
    } else {
      res.json(task);
    }
  });
};

// Delete a task by taskId
exports.deleteTaskById = function(req, res) {
Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err) {
      res.status(404).send({ error: { errors: [ { domain: 'global', reason: 'notFound', message: 'Not Found', 
                            description: 'Couldn\'t find the requested taskId \'' + req.params.taskId + '\'' } ], code: 404, message: 'Not Found' } })
    } else {
      res.status(204).send();
      //res.json({ message: 'Task successfully deleted' });
    }
  });
};
```
<br />

## Completing the server
Earlie, we had a minimal code for our server to be up and running in the **server.js** file. \
In this section we will be connecting our handlers(controllers), database, the created models, body parser and the created routes together. \
Open the **server.js** file created a while ago and follow the following steps to put everything together. \
Essentially, you will be replacing the code in your **server.js** with the code snippet from this section
1. Connect your database by adding a url to the mongoose instance connection
2. Load the created model — task
3. Install bodyParser and use bodyParser Parse incoming request bodies in a middleware before your handlers, available under the **req.body** property.
It exposes various factories to create middlewares. All middlewares will populate the **req.bodyproperty** with the parsed body, or an empty object ({}) if there was no body to parse (or an error was returned)
4. Register the created routes in the server
```json
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
```
5. Start MongoDB server \
Open your terminal and run \
`mongod`
6. Start Node server \
Open your terminal and run \
`npm start`
