var Request = require('request');

//Post Request

Request.post({
    "headers": {"content-type": "application/json"},
    "url": "http://localhost:8090/books",
    "body": JSON.stringify({
        "book_name": "Goblet of Fire",
        "boo_Author": "J K Rowling",
        "book_price": "2000",
        "location": "Hyderabad",
        "no_of_pages": "400",
        "edition": "Third"
    })
}, (error, response, body) => {
     if(error) {
         return console.dir(error);
    }
    console.dir(JSON.parse(body));

});




//Get Request
Request.get('http://localhost:8090/books', (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.dir(JSON.parse(body));

});
