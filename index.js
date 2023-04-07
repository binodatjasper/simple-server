const express = require('express');
const app = express();
const port = 8080;

app.use('/test', function (req, res, next) {
    res.status(200).json({ msg: 'Welcome to simplet Express Server!' })
});

app.listen(port, (err, done) => {
    if (err) {
        console.log('Sever listen failed!');
    }
    console.log(`Sever listening at port : ${port}`);
})