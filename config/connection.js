module.exports = function() {
    var connection = mysql.createConnection({
        host: "localhost",
      
        // Your port; if not 3306
        port: 3306,
      
        // Your username
        user: "root",
      
        // Your password
        password: "password",
        database: "burgersDB"
    });

    connection.connect(function(err) {
        if(err) throw err;
        console.log("connected as id " + connecttion.threadId + "\n");
    });
}