const express =require('express')
const fs =require("fs")

const app = express()
const port =3001

app.get('/home', (req, res) => {
    const homeHtml =fs.readFileSync(__dirname +"/views/Home.html", "utf-8")
    res.send(homeHtml)
})

app.get('/works',(req,res)=>{
    res.sendFile(__dirname + "/views/Works.html");
 })

app.get('/about',(req,res)=>{
    res.sendFile(__dirname + "/views/About.html");
 })

 

 

 app.get('/gallary',(req,res)=>{
    res.sendFile(__dirname + "/views/Gallary.html");
 })
 

app.use("/public/", express.static(__dirname +"/public/"))



app.listen(port, () =>{
    console.log(`welcom to my server ${port}`)
})
