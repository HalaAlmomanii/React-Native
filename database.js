const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/List', { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', function () {
  console.log('mongoose connection error');
  console.log('____________________________')
});

db.once('open', function () {
  console.log('mongoose connected successfully');
  console.log('____________________________')
});



let Myschema=new mongoose.Schema({
 numberOfPerson:Number,
 Time:Array,
 

})

let Table=mongoose.model("table",Myschema)





let newtask=(news,cb)=>{
console.log("hi hi hi")
console.log("typeof",typeof Number(news))
Table.find({"numberOfPerson":Number (news)},(err,data)=>{
  if(err){
cb(err)
  
    }  else
    {
     

cb(data)
  }
})
}


let book=(time,table,cb)=>{
  console.log("DATA",typeof table,typeof Number(time) )
  console.log("TIME 2", time)
  let T=`Time.${time}`
  let noman=`Time.$.${time}`
  console.log(typeof T)
  console.log(T)

  // console.log("TTTTTTTTTTTTTTTTTtt",typeof T,typeof noman)
  Table.updateOne({"numberOfPerson":Number(table),[T]:true},{$set:{[noman]:false}}
  ,(err,data)=>{
    if(err){
      console.log("err",err)
    }  else{
        console.log("RESULT FIND 2",data)
        newtask(table,cb)
        // newData=data.map((elem)=>{
        //   for (const key in elem) {
        //     if(key===time){
        //       Table.update({"numberOfPerson":Number(table),[elem[key]]:false},(err,data)=>{
        //       elem[key]=!elem[key]
        //     }
        //   }
        //   return elem
        // })
        // data=newData

        // newtask(tab,cb)
    }
  })
  }


let createtable=(numberOfPerson,Time)=>{
  Table.create({numberOfPerson,Time},(err,data)=>{
    if(err){
  console.log(err)
    
      }  else
      {
        console.log(data)
    }
  })
}
 let  docreate=()=>{
    createtable(4,[
      {"2-4":true},
      {"4-6":true},
      {"6-8":true},
      {"8-10":true},
      {"10-12":true}],
    )
      createtable(4,[
        {"2-4":true},
        {"4-6":true},
        {"6-8":true},
        {"8-10":true},
        {"10-12":true}],
      )
createtable(4,[
      {"2-4":true},
      {"4-6":true},
      {"6-8":true},
      {"8-10":true},
      {"10-12":true}],
)
      createtable(2,[
        {"2-4":true},
        {"4-6":true},
        {"6-8":true},
        {"8-10":true},
        {"10-12":true}],
      )
        createtable(2,[
          {"2-4":true},
          {"4-6":true},
          {"6-8":true},
          {"8-10":true},
          {"10-12":true}],
    
    )
    createtable(1,[
      {"2-4":true},
      {"4-6":true},
      {"6-8":true},
      {"8-10":true},
      {"10-12":true}],
    )
  }

  // docreate()

module.exports={newtask,book}