const jokes = require("../database/db.js")

const getJoke = (req , res) =>{
    console.log("hellow");
 
    let randomNum = Math.floor(Math.random() * 50);
    let randomJokes =jokes[randomNum];
 
    console.log(randomJokes);
  if(randomJokes){

    res.status(200).json({
        message : "Joke generated successfully!",
        joke : randomJokes
     })
    res.send({
        message : "Joke generated successfully!",
        joke : randomJokes
     })

    
  }else{

    res.status(404).json({
        message : "Error while generating jokes!",
     })
     
    res.send({
        message : "Error while generating jokes!",
      
     })

    
  }
    
 }

 module.exports = getJoke