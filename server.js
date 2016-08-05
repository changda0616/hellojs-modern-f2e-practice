var express = require('express');
var app = express();

app.listen(1337, function () {
  app.use(express.static('.'));
});
console.log('server is running on localhost port 3000.');
