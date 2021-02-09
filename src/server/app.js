

const express = require('express');
const bodyParser = require('body-parser');
const api_endpoints = require('../api');
const app = express();
const listEndpoints = require('express-list-endpoints');


// SERVER CONFIG

  // DATA PARSING
  
    app.use(bodyParser.json());

// SERVER BASE ENDPOINTS SETUP

  // normally I would use /api instead of just / to add the prefix to all api routes

  app.use('/', does_method_exist, api_endpoints);

  app.get('*', (req, res) => {
    res.status(404).send('404 Not Found');
  });

/////

// must be here to get global app from the lexical scope before the middleware is passed

  function does_method_exist (req, res, next) {

    const endpoints = listEndpoints(app);
    const route = req.path;
    const http_verb = req.method;
    let does_exist = false;
    const route_elements = route.split('/');

    endpoints.forEach((endpoint) => {
      if(endpoint.path.split('/')[1] == route_elements[1] && endpoint.methods.includes(http_verb)) {
        does_exist = true;
      }
    });

    if(does_exist) {
      next(); 
    }
    else {
      res.status(405).send('Wrong method');
    }

  }



module.exports = app;
