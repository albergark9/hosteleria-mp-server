var express = require('express');
var app = express();
var pg = require('pg');
var pgp = require('pg-promise')();
require('dotenv').config();

// Connect to PostgreSQL database
var connectionString = 'postgres://'+process.env.DB_USERNAME+':'+process.env.DB_PASSWORD+'@'+process.env.DB_HOST+':5432/postgres?ssl=false';
const typeOrmConfig = {
  type: "postgres",
  host: "ec2-52-30-75-37.eu-west-1.compute.amazonaws.com",
  port: 5432,
  username: "dndtgkibcswcmy",
  password: "42cbae4865e13cfc2fc2b152a1bc578ca199cf1eb7f68c98e8763f2bc3afd203",
  database: "postgres",
  synchronize: true,
  logging: false,
  ssl: {
      rejectUnauthorized: false
  }
};

var db = pgp(typeOrmConfig);
db.connect();


  db.query("DROP DATABASE "+process.env.DB_DATABASE).then(function()
  {
      console.log("DB "+process.env.DB_DATABASE+" dropped, you can kill this process");
  }).catch(function(err)
  {
    console.log(err);
  });
