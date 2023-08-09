const express = require("express");
// ----Bringing in Express / Import

const app = express();
// ---Connects express instance to the variable 'app'
// ---------------------------------{Requirements}

app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//----------------------------------{Middleware}



// -------------------------------------{Create Routes Based on Path/REST}



app.get('/greeting/:firstname',(req,res)=>{
    
    res.send(`Hello,  ${req.params.firstname}`)
})
app.get('/greeting',(req,res)=>{
    
    res.send(`Hello stranger `)
})
//-----------------------{tip part}-----------------------//
app.get('/tip/:total/:percentage',(req,res)=>{
    
res.send(`Total = ${req.params.total} Tip Percent = ${req.params.percentage} Total Tip = ${req.params.total*(req.params.percentage/100)}`)
})



// -----Creates the Server based on PORT value
//----------------------{magic eight ball}----------------//
let newArray=["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
app.get('/magic/:question',(req,res)=>{
    res.send(`Question=${req.params.question} your prediction is ${newArray[Math.floor(Math.random() * 21)]}`)
})

    app.listen("3000", (req, res) => {
    console.log(`Server Listening on Port 3000`);
  });