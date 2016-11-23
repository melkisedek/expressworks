var express = require('express');
var app = express();

app.use(require('stylus').middleware(process.argv[3]));
app.use(express.static(process.argv[3]));

app.listen(process.argv[2], function (err) {
  if(err) throw err;
  console.log('Example app listening on port 8080!');
})