var connect = require('connection');

module.exports = function(app) {
    function selectAll() {
        connect.query('SELECT * FROM burgers', function(err, res) {
            if (err) throw err;

        })
    };

    function insertOne(burgerName) {
        var query = connect.query("INSERT INTO burgers SET ?", {
            burger_name: burgerName,
            devoured: false
        }, 
        function(err, res) {
            if (err) throw err;
            console.log(res.affectedRows + " product posted!\n");
        });
        
        console.log(query.sql);
    };

    function updateOne(burgerID) {
        var eatBurger = "SELECT * FROM burgers WHERE id=" + burgerID;
        connect.query(eatBurger, function(err, res) {
            if (err) throw err;
            res[0].devoured = true;
        });
    };
}