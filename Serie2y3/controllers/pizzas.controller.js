const Pizza = require('../models/pizzas.model');

exports.test = function (req, res) {
    res.send('Test controller :)');
};

exports.pizzas_create = function (req, res){
    var pizza = new Pizza(
        {
            name: req.body.name,
            desc: req.body.desc,
            dough: req.body.dough,
            ingredients: req.body.ingredients,
            size: req.body.size,
            portions: req.body.portions,
            extracheese: req.body.extracheese
        }
    );

    pizza.save(function (err){
        if(err) {
            return next(err);
        }

        res.send('Pizza created successfully');
    })
};

exports.pizzas_details = function (req, res) {
    Pizza.findById(req.params.id, function (err, pizza) {
        if (err) return next(err);
        res.send(pizza);
    })
};

exports.pizzas_update = function (req, res) {
    Pizza.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send('Pizza updated.');
    });
};

exports.pizzas_delete = function (req, res) {
    Pizza.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Pizza deleted successfully!');
    })
};
