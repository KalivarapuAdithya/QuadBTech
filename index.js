const express = require('express');
const axios = require('axios').default;

const app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine' , 'ejs');
const port = process.env.PORT || 3000;
const db = require("./models").demo;
const url = "https://api.wazirx.com/api/v2/tickers";

app.get('/' , async(req,res , next)=>{
    try{
        await db.deleteMany({});
        let top = await retreive();
        top.forEach(async(dt)=>{
            await db.create(dt , (err , d)=>{
                if(err)
                console.log(err);
            });
        })
        
        res.render('./index.ejs' , {top : top});
        
        
    }
    catch(err)
    {
        console.log(err.message);
    }
})

async function retreive()
{
    try {
        let response = await axios.get(url);
        let count = 0;
        let data = [];
        response = response["data"];
        for (let key in response) {
            count++;
            let value = response[key];
            let obj = {name : value.name , last : value.last , buy : value.buy , sell : value.sell , volume : value.volume , base_unit : value.base_unit};
            data.push(obj);
            if(count === 10)
                break;
        }
        return data;
    }
    catch (error) {
        console.error(error);
    }
}

app.listen(port , ()=>{
    console.log("App listening on port 3000");
})

