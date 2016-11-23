var express = require('express');
var app = express();
var crypto = require('crypto');
app.put('/message/:id', function(req, res){
  res.send(crypto.createHash('sha1')
      .update(new Date().toDateString() + req.params.id)
      .digest('hex'));
  });

app.listen(process.argv[2], function (err) {
  if(err) throw err;
  console.log('Example app listening on port 8080!');
})