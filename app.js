var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('Hello World');
    res.send('I added something');
});

app.listen(1337,'localhost');
