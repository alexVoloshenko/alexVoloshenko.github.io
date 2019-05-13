module.exports = function (app, db) {

  let database = db.db('pets').collection('pets');

  app.get('/pets/average', (req, res) => {
    database.aggregate([{$group : {_id : null, price_average : {$avg : "$price"}}}]).toArray(function (err, result) {
      database.find ({price: {$gt : result[0].price_average}}).toArray(function (err, result) {
        res.send(result);
      })
    });
  });

  app.get('/pets/cats', (req, res) => {
    database.find({"type": "cat"}).toArray(function (err, result) {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  });

  app.get('/pets/fluffyorwhite', (req, res) => {
    database.find({$or : [{color: "white"}, {isFluffy: true}]}).toArray(function (err, result) {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  });

  app.get('/pets/average', (req, res) => {
    database.find({$or : [{color: "white"}, {isFluffy: true}]}).toArray(function (err, result) {
      if (err) {
        throw err;
      }
      res.send(result);
    });
  });

  app.post("/addpets", function (request, response) {
    if(!request.body){
      return response.sendStatus(400);
    }
    database.insertOne(request.body);
    console.log(request.body);
    response.send(`${request.body}`);
  });
};