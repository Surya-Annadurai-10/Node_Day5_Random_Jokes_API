const express = require("express")
const router = require("./routes/route.js")

const PORT = 8080;
const app = express();
app.use("/api/jokes",router);

app.listen(PORT , (err) =>{
    if(err){
        console.log("Error while listening to the server :" , err);
        
    }else{
        console.log("Started listening to the server:" ,PORT );
        
    }
})