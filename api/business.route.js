const express = require('express');
const businessRoutes = express.Router();

//precisamos do business para as rotas
let Business = require('./business.model');

businessRoutes.route('/add').post(function (req, res) {
  let business = new Business(req.body);
  business.save()
    .then(business => {
      res.status(200).json({'business': 'business in added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// get da data
businessRoutes.route('/').get(function (req, res) {
    Business.find(function(err, businesses){
    if(err){
      console.log(err);
    }
    else {
      res.json(businesses);
    }
  });
});

// definindo a rota de edit
businessRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Business.findById(id, function (err, business){
      res.json(business);
  });
});

//  Definindo a rota de update
businessRoutes.route('/update/:id').post(function (req, res) {
    Business.findById(req.params.id, function(err, business) {
    if (!business)
      res.status(404).send("data is not found");
    else {
        business.model = req.body.model;
        business.brand = req.body.brand;
        business.price = req.body.price;
        business.photo = req.body.photo;
        business.date = req.body.date;
        business.endDate = req.body.endDate;
        business.color = req.body.color;
        business.code = req.body.code;

        business.save().then(business => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Definindo da rota de deletar
businessRoutes.route('/delete/:id').get(function (req, res) {
    Business.findByIdAndRemove({_id: req.params.id}, function(err, business){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = businessRoutes;