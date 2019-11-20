const express=require('express');

const app=express();

const mysql= require('mysql');

app.use(express.static('./public'))

const bodyParser= require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));

const connection = mysql.createConnection({
    host:'localhost',
    database: 'Nodejs',
    user: 'root',
    password:'Parag@765'
});


//for inserting data from the html form

app.post('/user_create',(req,res)=>
{
    console.log("You are trying to insert data into database");

    console.log(" Id :"+req.body.id);

    console.log(" First Name :"+req.body.fname);

    console.log(" Last name :"+req.body.lname);

    const inputQuery= "insert into user values(?,?,?)";

    const userId=req.body.id;
    const userFname=req.body.fname;
    const userLname=req.body.lname;

    connection.query(inputQuery,[userId,userFname,userLname],(err,row,field)=>
    {
        if(err)
        console.log(err)
        else
        {

            console.log("data inserted");
            res.send('data inserted');
        }
    })

    
})

//fetch all the data from the database

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

//fetch data by id


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
    console.log("The server is running on port 3002.")
});