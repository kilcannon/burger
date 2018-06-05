var express = require('express');
var burgers = require('../models/burger.js');

module.exports = function(app) {
    app.get('/', function(request, response) {
        burgers.allBurgers(function(data) {
            response.render('index', {
                uneatenBurgers: data.uneaten,
                eatenBurgers: data.eaten
            });
        });
    });

    app.get('/api/burgers', function(request, response) {
        burgers.allBurgers(function(data) {
            response.json(data);
        });
    });

    app.post('/', function(request, response) {
        var newBurger = request.body.burger;
        if (newBurger === '') {
            response.redirect('/');
            return;
        }
        burgers.create(newBurger, function() {
            response.redirect('/');
        });
    });

    app.get('/api/burgers/:id', function(request, response) {
        burgers.singleBurger(request.params.id, function(data) {
            response.json(data);
        });
    });

    app.put('/:id', function(request, response) {
        burgers.update(request.params.id, function() {
            response.redirect('/');
        });
    });
};
