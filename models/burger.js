var orm = require('../config/orm.js');

module.exports = {
    allBurgers   : burgers,
    create       : create,
    singleBurger : singleBurger,
    update       : update
};

function burgers(callBack) {
    var object = {};
    uneatenBurgers(function(data) {
        object.uneaten = data;
        eatenBurgers(function(data) {
            object.eaten = data;
            callBack(object);
        });
    });
}

function uneatenBurgers(callBack) {
    orm.selectScoped('burgers', 'devoured', 'false', function(data) {
        callBack(data);
    });
}

function eatenBurgers(callBack) {
    orm.selectScoped('burgers', 'devoured', 'true', function(data) {
        callBack(data);
    });
}

function singleBurger(burger, callBack) {
    orm.selectOne('burgers', burger, function(data) {
        callBack(data);
    });
}

function create(burger, callBack) {
    orm.insertOne('burgers', 'burger_name', burger, function() {
        callBack();
    });
}

function update(burger, callBack) {
    orm.updateOne('burgers', 'devoured', true, burger, function() {
        callBack();
    });
}
