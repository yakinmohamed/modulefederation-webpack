const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

 app.use('/hello', express.static(path.resolve(__dirname, '../dist')));


    app.get('/hello', function(req, res){
        const pathToHtmlFile = path.resolve(__dirname,"../dist/index.html");
        const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile,'utf-8');
        res.send(contentFromHtmlFile);
        })


app.listen(3001,function () {
    console.log("the app is running on http://localhost:3001/hello");
})