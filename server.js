const express = require("express");
const cors = require("cors");
const mongo = require("./database");

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('server is working');
});

app.get('/newdata/:new', (req, res) => {
  console.log("res.....")
  let news=req.params.new
  mongo.newtask(news,result=>{
    res.json(result)
  })
});
app.get('/book/:new/:table', (req, res) => {
 
  let time=req.params.new
  let table =req.params.table
  console.log("bookserver",time,table)
  mongo.book(time,table,result=>{
  console.log("result",result)
    res.json(result)
  })
});


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));