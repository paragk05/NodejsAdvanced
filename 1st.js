const express=require('express');

const app=express();

const mysql= require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    database: 'Nodejs',
    user: 'root',
    password:'Parag@765'
});

app.get("/",(req,res)=>
{
    res.send('Responding..');

});

app.get("/user",(req,res)=>
{
    const inputQuery="select * from user";
    const userId= req.params.id;
    connection.query(inputQuery,(err,row,field)=>
    {
        if(err)
        console.log(err);
        else
        res.json(row);
    })
});

app.get("/user/:id",(req,res)=>
{
    const inputQuery="select * from user where id= ?";
    const userId= req.params.id;
    connection.query(inputQuery,[userId],(err,row,field)=>
    {
        if(err)
        console.log(err);
        else
        res.json(row);
    })
   

});

app.listen(3002,()=>
{
    console.log("The server is running on port 3000.")
});