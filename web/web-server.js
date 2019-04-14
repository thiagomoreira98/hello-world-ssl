const express = require('express'),
    fs = require('fs'),
    port = process.env.PORT || 4000,
    app = express();

app.get('/*', (req, res) => {
    fs.readFile('./index.html', 'utf8', (err, text) => {
        res.send(text);
    });
});

app.listen(port, () => {
    console.log(`[${new Date()}]: Web server listening on port ${port}`);
});