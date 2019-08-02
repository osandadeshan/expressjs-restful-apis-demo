# RESTful API Development using Express.js

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
<br /><br />


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
Basically this project contains RESTful APIs for CRUD operations which developed using Mongoose and Express.js. 

Open your terminal and kindly follow the following steps.
1. Install the relevant node modules \
**`npm install`**

2. Start the server \
**`npm start`** \
Then you will see \
**RESTful API demo server started on: 3000**
<br />

## Testing via Postman
Now that everything is now connected, let’s test each of the routes and the respective methods.

Open your postman and type:
1. **http://localhost:3000/tasks** in the enter request URL section

2. Change the HTTP method to **POST** and select raw radio button

3. Then choose **JSON (application/json)**

4. Enter the body as follows
```json
{
	"name": "Task 1",
	"category": "R&D",
	"status": "Completed",
	"createdDate": "2019-07-11T04:06:44.110Z"
}
```
5. Click on Send button

6. It will give the response as **201 (Created)**

**POST Request**
![POST](https://user-images.githubusercontent.com/9147189/62363038-d5f02c00-b50d-11e9-9edd-2cd987ef5525.PNG)

7. You can try other HTTP methods such as GET, PUT and DELETE as well using [this postman collection](https://www.getpostman.com/collections/d9646cc382d69aca3111)

**GET Request**
![GET](https://user-images.githubusercontent.com/9147189/62362954-a6d9ba80-b50d-11e9-9309-8693a75f6df9.PNG)


**PUT Request**
![PUT](https://user-images.githubusercontent.com/9147189/62362725-22873780-b50d-11e9-8508-90b1db225dad.PNG)


**DELETE Request**
![DELETE](https://user-images.githubusercontent.com/9147189/62362816-5bbfa780-b50d-11e9-9dc7-a2b9b1ab7bc5.PNG)


**Note**: Health route can be verified using **GET http://localhost:3000/health**
**Health Request**
![Health](https://user-images.githubusercontent.com/9147189/62362889-8447a180-b50d-11e9-986a-812e3f332063.PNG)
