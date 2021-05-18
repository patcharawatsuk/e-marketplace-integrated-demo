const express = require("express");
const app = express();

app.use(express.urlencoded({extended: false}));
const PORT = process.env.PORT || 8082

app.post('/', (req, res) => {
    console.log(req.body);
    res.json({
        status: 'ok',
    })
})

app.listen(PORT, () => {
    console.log(`Server is running. ${PORT}`);
})
