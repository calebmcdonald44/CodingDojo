const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT

require("./config/mongoose.config")

app.use( express.urlencoded({ extended: true }) );
app.use( express.json() );

const AllMyJokeRoutes = require("./routes/joke.routes");
console.log(AllMyJokeRoutes, "TEST")
AllMyJokeRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );