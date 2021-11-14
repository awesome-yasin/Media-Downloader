const path = require('path');
const express = require("express");
const instagramGraphql = require("./server/instagramGraphql");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());


if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, 'client/build')));

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
  });

app.post('/api', (req, res) => {

    var url = req.body.url;
    var list = url.split("/");
    var url = "https://www.instagram.com/p/"+list[4];
    instagramGraphql(url)
    .then(data=>res.send(data));

});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});