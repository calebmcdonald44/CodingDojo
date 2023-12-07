const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT

require("./config/mongoose.config")

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const AllMyUserRoutes = require("./routes/user.routes");
console.log(AllMyUserRoutes, "TEST")
AllMyUserRoutes(app);

app.listen(port, () => console.log(`Listening on port: ${port}`) );