var mysql = require('mysql');
var connetion = mysql.createConnection({
 host:'localhost',
 user:'root',
 password:'MySQL@123',
 database:'clients_book'
});

connetion.connect(function (error){
    if(!!error){
        console.log(error);
    }
    else{
        console.log('Connected!:');
    }
});

module.exports= connetion;