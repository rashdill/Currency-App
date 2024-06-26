const express= require("express");
const cors=require("cors");
const axios=require("axios");

const app=express();
//middle wares
app.use(express.json());
app.use(cors());
//all currencies
app.get("/getAllCurrencies" , async(req,res)=>{
    
    try{
     const nameURL = "https://openexchangerates.org/api/currencies.json?app_id=27f4b248342746caa1b35bc8dd82d36a";
     const nameResponce = await axios.get(nameURL);
     const nameData = nameResponce.data;
     return res.json({nameData});

    }catch(err){
        console.error(err);
    }
})



//listen to a port
app.listen(5000, () => {
    console.log("SERVER STARTED");
});
