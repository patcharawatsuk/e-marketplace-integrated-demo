const express = require("express");
const app = express();
const PORT = process.env.PORT || 8082


app.post('/api', (req, res) => {
    return res.json({
        status: 'ok',
        data: {
            'username' : 'aa',
            'password' : 'aa',
            'eid' : 'eid'
        }
    })
});

app.listen(PORT, () => {
    console.log(`Server is running. ${PORT}`);
})

