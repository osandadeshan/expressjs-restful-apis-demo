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
RESTful services use HTTP requests to perform CRUD (Create, Read, Update, Delete) operations.
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
In this tutorial, I will guide you to develop RESTful APIs for CRUD operations using Mongoose and Express.js. Basically, you will be able to develop routes for GET, POST, PUT and DELETE HTTP methods.
Open your terminal and kindly follow the following steps.
1. Create a folder for your project. Here I will name it as "**expressjs-restful-apis-demo**" \
`mkdir expressjs-restful-apis-demo`
2. Navigate to that folder \
`cd expressjs-restful-apis-demo`
3. Create a "package.json" file — This package.json file provides the information of the project and its dependencies \
`npm init`
4. Press Enter to complete the creation of package.json
5. Add the below dependencies to your package.json
```json
"dependencies": {
        "express": "^4.17.1",
        "express-healthcheck": "^0.1.0",
        "mongoose": "^5.6.3"
}
```
6. Update your package.json with the following

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

7. Create a file named "server.js" — In this file, we will be writing the protocols to create our server
8. Create a folder called "api" \
`mkdir api` \
Inside this folder called api, create three separate folders called "models", "routes", and "controllers" by running \
`mkdir api/controllers api/models api/routes`
9. Create "tasksController.js" in the api/controllers folder, "tasksRoutes.js" in the api/routes folder, and "tasksModel.js" in the api/models folder
10. Our folder structure should look like this now
![1](https://user-images.githubusercontent.com/9147189/62302191-75a7ae80-b469-11e9-977e-b1451e9b30dd.png)

