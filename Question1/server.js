const express = require('express')
const app = express();

const data = [
        {"companyName": "goMart",
        "clientID": "37bb493c-73d3-47ea-8675-21f66ef9b735",
        "clientSecret": "X0yo1ORPasKWOdAN",
        "ownerName": "Prince Kumar Arya",
        "ownerEmail": "prince.arya_cs21@gla.ac.in",
        "rollNo": "2115000763"}
        ]
app.get('/data',(req,res)=>{
    res.json(data)
})


app.listen(3000,
    console.log("started server")
)