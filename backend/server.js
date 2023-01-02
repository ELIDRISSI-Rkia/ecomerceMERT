const express= require('express')
const app = express()
app.get('/',(req,res)=>{
res.send("Testing API")
})
app.listen(5000,()=>{
console.log("Server started and running on port 5000")
})
