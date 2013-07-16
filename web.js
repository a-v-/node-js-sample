var express = require('express');

var app = express.createServer(express.logger());

var content;

fs.readFile('./index.html', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;
app.get('/', function(request, response) {
  response.send(content);
});

    // Invoke the next step here however you like
  //  console.log(content);   // Put all of the code here (not the best solution)
 //   processFile();          // Or put the next step in a function and invoke it
});

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});