const express = require('express');
const app = express();

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(allowCrossDomain);


app.get("/test", (request, response) => {
    response.sendFile(__dirname + "/public/test.html");
});

const sims = {};

app.get("/sims/:id", (request, response) => {
    const item = sims[request.params.id];
    response.set({
        'Access-Control-Allow-Origin': '*'
    })
    if (item) {
        response.json(item);
    } else {
        response.status(400).send("Item not found");
    }
});

app.get("/sims", (request, response) => {
    response.set({
        'Access-Control-Allow-Origin': '*'
    })
    response.json(sims);
});

app.post("/sims", (request, response) => {
    const data = JSON.parse(request.body.data);
    const id = parseInt(data.id);
    sims[id] = data;
    response.set({
        'Access-Control-Allow-Origin': '*'
    })
    response.status(200).send("ok");
});

app.listen(3030, () => {
    console.log("check out the magic at: http://localhost:3030")
})
