var express = require('express');
var app = express();
app.get('/search', function(req, res){
  res.send(req.query);
  });

app.listen(process.argv[2], function (err) {
  if(err) throw err;
  console.log('Example app listening on port 8080!');
})