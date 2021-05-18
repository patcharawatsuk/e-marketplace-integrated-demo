const express = require("express");
const app = express();
const PORT = process.env.PORT || 8082

let username = "";
let password = "";
let eid = "";
app.post('/', (req, res) => {
    
    return res.send('Received a POST HTTP method');
});

app.listen(PORT, () => {
    console.log(`Server is running. ${PORT}`);
})

