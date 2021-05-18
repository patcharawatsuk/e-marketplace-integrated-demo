const express = require("express");
const app = express();
const PORT = process.env.PORT || 8082


app.post('/api', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let eid = req.body.eid;
    return res.json({
        status: 'ok',
        data: {
            'username' : username,
            'password' : password,
            'eid' : eid
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server is running. ${PORT}`);
})

