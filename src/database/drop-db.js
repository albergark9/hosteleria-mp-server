var express = require('express');
var app = express();
var pg = require('pg');
var pgp = require('pg-promise')();
require('dotenv').config();

// Connect to PostgreSQL database
var connectionString = 'postgres://'+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+'@'+process.env.DB_HOST+':5432/postgres';
var db = pgp(connectionString);
db.connect();


  db.query("DROP DATABASE "+process.env.DB_DATABASE).then(function()
  {
      console.log("DB "+process.env.DB_DATABASE+" dropped, you can kill this process");
  }).catch(function(err)
  {
    console.log(err);
  });
