var express = require('express');
var bodyparser = require('body-parser');




// calling express...
var app = express();

//cors resolution 
var cors = require('cors')
app.use(cors())

app.use(bodyparser.json());
// create get request
const initialstate = {
    food: [
                       {"id":1,"name":"burger","price":5,"qty":0},
                       {"id":2,"name":"pasta","price":8,"qty":0},
                       {"id":3,"name":"pizza","price":12,"qty":0}
                      ]
   }
app.get('/', function(req, res) {
        res.send(initialstate)
   
});

app.listen(3000);
console.log('Running on port 3000');