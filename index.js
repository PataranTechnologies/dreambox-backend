const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Accept, Content-Type");
    if(req.method === 'OPTIONS'){
        res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        return res.status(200).json({});
    }
    next();
});

app.use(routes);

mongoose.connect("mongodb+srv://sahil_sharma_pt:pataran@cluster0.y6qda.mongodb.net/dreambox?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true}).then(
    app.listen(5000, () => {
        console.log("Server Running On Port 5000 with DB connected!");
    })
).catch(error => console.log(error));