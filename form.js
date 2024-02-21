const express = require('express')
var app= express();
app.get('/form',function(req,res){
    res.sendFile(__dirname+'/form.html')
})
var bodybarser=require('body-parser')
var urlEncoded=bodybarser.urlencoded({extended:false})
app.post('/submitform',urlEncoded,function(req,res){
    res.send("data submitted")
    req.body.email
    req.body.password

})
var server=app.listen(9000,function()
{
    var host = server.address().address
    var port = server.address().port
})
