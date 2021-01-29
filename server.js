let express = require ('express');
let path = require ('path');
let app = express ();




app.use ("/Images",express.static(__dirname + "/Images"))


app.get("/adventure",function (request,response){//Funtion to create route link to the adventure page
    response.sendFile(path.join(__dirname,"HTML/adventure.html"))
})
app.get("/software_developer",function (request,response){//Funtion to create route link to the carieer (software developer) page
    response.sendFile(path.join(__dirname,"HTML/software_developer.html"))
})
app.get("/agri_business",function (request,response){//Funtion to create route link to the agri business page
    response.sendFile(path.join(__dirname,"HTML/agri_business.html"))
})
app.get("/lower_secondary",function (request,response){//Funtion to create route link to the lower secondary page
    response.sendFile(path.join(__dirname,"HTML/lower_secondary.html"))
})
app.get("/upper_secondary",function (request,response){//Funtion to create route link to the upper secondary page
    response.sendFile(path.join(__dirname,"HTML/upper_secondary.html"))
})
app.get("/cocoa",function (request,response){//Funtion to create a route link to the cocoa page
    response.sendFile(path.join(__dirname,"HTML/cocoa.html"))
})
app.get("/copra",function (request,response){//Funtion to create route link to the copra page
    response.sendFile(path.join(__dirname,"HTML/copra.html"))
})
app.listen(8080)