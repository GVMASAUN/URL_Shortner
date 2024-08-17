const express = require("express");
const ejs = require("ejs");
const path = require("path");
const makeDBConnection = require("./connection")
const staticRoute = require('./routes/staticRoute');
const urlRoute = require("./routes/urlRoute");

//using express for routing
const app = express();
const  PORT = 8001;

//DB connection
const uri = 'mongodb+srv://GVMASAUN:Gvm%405aunMongodb@cluster0.ewopt.mongodb.net/mydatabase?retryWrites=true&w=majority';

// makeDBConnection("mongodb://0.0.0.0:27017/EJSshorturl")
makeDBConnection(uri)
.then(console.log("DB connected"))
.catch((err)=>console.log("Error occurred: "+err));

//middlewares section
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//attaching viewing engine for views
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));


//maintaining routes for different paths
app.use('/url',urlRoute);
app.use('/',staticRoute);

app.listen(PORT,'0.0.0.0',()=>console.log("Server Activated!!!!"));