const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const db             = require('./config/db');

const PORT = process.env.PORT || 5000;
app.use(express.static(__dirname + "/public"));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

MongoClient.connect(db.url, { useNewUrlParser: true },(err, database) => {
  if(err){
    return console.log(err);
  }

  require('./app/routes')(app, database);
  app.listen(PORT, () => {
    console.log('We are live on ' + PORT);
  });
});
