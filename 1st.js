const express=require('express');

const app=express();

app.get("/",(req,res)=>
{
    res.send('Responding..')

})

app.get("/user",(req,res)=>
{
    res.send("Response from user..");
})

app.listen(3002,()=>
{
    console.log("The server is running on port 3000.")
});