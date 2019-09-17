
var mysql = require("mysql");
var inquirer = require("inquirer");

// creates connection info for sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "enter password here",
    database: "bamazonDB"
});

connection.connect(function(err){
    if (err) {
        throw err;
        
    } 
    console.log("Bamazon DB Connected");
    // run the start function after connection is made
    start();
});

/*
5. Then create a Node application called `bamazonCustomer.js`. 
Running this application will first display all of the items available for sale. 
Include the (ids, names, and prices of products) for sale.
*/
function start(){

// function to prompt user for actions to take
// 1st prompt - the id of the product they would like to buy;
inquirer.prompt([{
    type: "input",
    name: "buy",
    message: "What do you want to buy on Bamazon?",
    message: "How many units of the product would you like to buy?",
}])
// 2nd prompt - 
    .then(function(answer){
        switch (answer.action){
            case "Find songs by artist":
                artistSearch();
                break;

            case "Find all artists who appear more than once":
                multiSearch();
                break;
        };
    });
    var bidOnItem = function(){
        console.log(amazonDB);

        inquirer.prompt([{
            type: "input",
            name: "productSearch",
            message: "What do you want to bid on?"
        }]);
    };
    bidOnItem();

    var postItem = function(){
        inquirer.prompt([{
            type: "input",
            name: "productName",
            message: "Enter Products Name: ", 
        },{
        name: "quantity",
        message: "Enter How Many: ",
        },{
        name: "Price: ",
        message: "Enter the Price: "
        
        }]);
    
    };
    postItem()

    .then(function(answer){
        var query = "SELECT * FROM products WHERE ?";
        connection.query(query, { productName: answer.productName }, function(err, res){
            if(res[0].quantity < answer.quantity){
                console.log("There's not enough");
                bidOnItem();
              
            }
            else { 
            };
        });
    });
    var connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "enter password here",
        database: "bamazonDB"
    });
    connection.connect(function(err){
        if (err) {
            throw (err);
        };
        console.log("connected as ID: " + connection.threadId);
        connection.end();
    });
        
        function afterConnection(){
            connection.query("SELECT * FROM products", function(err, res) {
                if (err) {
                    throw (err);
                };
                console.log(res);
            });
            connection.end();
        };
};