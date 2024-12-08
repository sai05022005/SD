const express=require('express');
const app=express();
app.get('/',(req,res)=>{
  res.send("Hello world");
}
);
app.listen(30,()=>{
  consol.log("server is at 30");
}
           );
