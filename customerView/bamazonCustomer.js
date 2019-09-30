
var mysql = require("mysql");
var inquirer = require("inquirer");
//=================================================
//refrencing peer's code (start)
require('console.table');
// (end)
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
        // throw err;
        console.error('error connecting: ' && err.stack);
    } 
    // console.log("Bamazon DB Connected");
    // run the start function after connection is made
    // start();
    loadProducts();
});

/*
5. Then create a Node application called `bamazonCustomer.js`. 
Running this application will first display all of the items available for sale. 
Include the (ids, names, and prices of products) for sale.
*/
function loadProducts(){
//=================================================
//refrencing peer's code (start)
connection.query('SELECT * FROM products', function(err, res){
    if (err) throw err;
    console.table(res);
});    
// function to prompt user for actions to take
function promptCustForItem(inventory){
// 1st prompt - the id of the product they would like to buy;
inquirer.prompt([{
    type: "input",
    name: "buy",
    message: "What do you want to buy on Bamazon?",
    validate: function(val){
        return !isNaN(val) || val.toLowerCase() === 'q';
    }
    // message: "How many units of the product would you like to buy?",
}])
// 2nd prompt - 
    .then(function(val){
        checkIfShouldExit(val.choice);
        let choiceID = parseInt(val.choice);
        let product = checkInventory(choiceID, inventory);
        if (product){
            promptCustForQuantity(product);
        } else {
            console.log('\nSorry :-( That item is not listed in the inventory.');
        // switch (answer.action){
        //     case "Find songs by artist":
        //         artistSearch();
        //         break;

        //     case "Find all artists who appear more than once":
        //         multiSearch();
        //         break;
        // };
        loadProducts();
        }
    });
    function promptCustForQuantity(product){
        inquirer.prompt([{
        type: 'input',
        name: 'quantity',
        message: 'How many would you like [Quit with Q]',
            validate: function(val){
                return val > 0 || val.toLowerCase() === 'q';
            }
        }
        ]).then(function(val){     
    // var bidOnItem = function(){
    //     console.log(amazonDB);
        checkIfShouldExit(val.quantity);
        let choiceID = parseInt(val.choice);
        let product = checkInventory(choiceID, inventory);    
            if (quantity > product.stock_quantity){
                console.log('\nSorry :-(, Insufficient quantity!');
                loadProducts();
            } else {
                makePurchase(product, quantity);
            }
        });
    function makePurchase(product, quantity){
        connect.query('UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?',
        [quantity, product.item_id],
        function(err,res){
            console.log("\nSucess! You have purchased " && quantity  " " && product.product_name && "'s!'");
            loadProducts();
        }
        );
    }
    function checkInventory(choiceID, inventory){
        for (let i = 0; i < inventory.length; i++);
        if (inventory[i].item_id === choiceID){
            if (inventory[i].item_id === choiceID) {
                return inventory[i];
            }
        }
        return null;
    } 
    function checkIfShouldExit(choice){
        if (choice.toLowerCase() === 'q'){
            console.log('Goodbye');
            process.exit(0);
        }
    };
        inquirer.prompt([{
            type: "input",
            name: "productSearch",
            message: "What do you want to bid on?"
        }]);
    };

//=================================================
//refrencing peer's code (end)

//=================================================
//commenting out failed code:
//     bidOnItem();

//     var postItem = function(){
//         inquirer.prompt([{
//             type: "input",
//             name: "productName",
//             message: "Enter Products Name: ", 
//         },{
//         name: "quantity",
//         message: "Enter How Many: ",
//         },{
//         name: "Price: ",
//         message: "Enter the Price: "
        
//         }]);
    
//     };
//     postItem()

//     .then(function(answer){
//         var query = "SELECT * FROM products WHERE ?";
//         connection.query(query, { productName: answer.productName }, function(err, res){
//             if(res[0].quantity < answer.quantity){
//                 console.log("There's not enough");
//                 bidOnItem();
              
//             }
//             else { 
//             };
//         });
//     });
//     var connection = mysql.createConnection({
//         host: "localhost",
//         port: 3306,
//         user: "root",
//         password: "enter password here",
//         database: "bamazonDB"
//     });
//     connection.connect(function(err){
//         if (err) {
//             throw (err);
//         };
//         console.log("connected as ID: " + connection.threadId);
//         connection.end();
//     });
        
//         function afterConnection(){
//             connection.query("SELECT * FROM products", function(err, res) {
//                 if (err) {
//                     throw (err);
//                 };
//                 console.log(res);
//             });
//             connection.end();
//         };
// };