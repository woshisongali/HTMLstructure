/**
 * Created by songali on 19/2/21.
 */
var express = require('express')
var bodyParser = require('body-parser');
var app = express()
module.exports = app
app.use(bodyParser.json());

app.get('/my', (req, res) => {
  res.json({
    "success": true,
    "message": null,
    "code": null,
    "data": {
      "age": 18
    }
  })
})

app.post('/another', (req, res) => {
  res.json({
    "success": true,
    "message": null,
    "code": null,
    "data": {
      "color": "red"
    }
  })
})