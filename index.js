const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(database => {
    app.set('db', database);
}).catch(e => {
    console.log("Error with database", e);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}⛵`)
});