const bodyParser = require("body-parser");
const express = require("express");
const app = express();

const PORT = process.env.PORT || 8082

app.use(bodyParser.json());
app.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        status: 'ok',
        data : req.body
    })
})

app.listen(PORT, () => {
    console.log(`Server is running. ${PORT}`);
})
