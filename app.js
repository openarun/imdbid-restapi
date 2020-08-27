const express = require('express')
const app = express()
const nameToImdb = require("name-to-imdb");
const bodyParser = require("body-parser");


app.set('json spaces', 40);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/', (req, res) =>{
    const title = req.body.title
    nameToImdb(title, function (err, imdbid, inf) {
        res.json({id:imdbid});
    });
});


async function titleToID(title) {
    return new Promise(resolve => {
       
    });
}


app.listen(3000, () => console.log('Server ready'))