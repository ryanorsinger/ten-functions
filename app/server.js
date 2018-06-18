var express = require('express');
var app = express();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('.data/db.json')
const db = low(adapter)


app.get("/", function (request, response) {
  response.sendFile(__dirname + '/index.html');
});