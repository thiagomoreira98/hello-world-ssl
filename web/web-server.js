const express = require('express');
const fs = require('fs');
const port = process.env.PORT || 4000;
const app = express();

app.get('/*', (req, res) => {
    fs.readFile('./index.html', 'utf8', (err, text) => {
        res.send(text);
    });
});

app.listen(port, () => {
    console.log(`[${new Date()}]: Web server listening on port ${port}`);
});