const express = require("express");
const app = express();
const PORT = process.env.PORT || 8082

let username = "";
let password = "";
let eid = "";
app.post('/', (req, res) => {
    
    username = req.query.username;
    password = req.query.password;
    eid = req.query.eid;
    res.json({
        status: 'ok',
        payload: 'TEST-E-Marketplace' + username + ',' + password + ',' + eid
    })
});

app.listen(PORT, () => {
    console.log(`Server is running. ${PORT}`);
})

