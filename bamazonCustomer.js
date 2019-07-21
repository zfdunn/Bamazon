
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
inquirer.prompt({
    name: ""

});
// 2nd prompt - 

};