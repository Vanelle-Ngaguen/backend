const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require("body-parser");


require('dotenv').config();
const db = require("./models"); 
db.sequelize.sync({ alter: true }).then(() => { console.log("database connected") }) 
.catch((error) => {console.log(`Failed to connect to db: ${error.message}`);})

app.use(cors());
app.use(express.json());
app.use(bodyParser.json())


app.use('/api/users', require('./routers/Users_routes'));
app.use('/api/quotes', require('./routers/Quotes_routes'));
app.use('/api/authors', require('./routers/Authors_routes'));


app.listen(4005, () => {
    console.log('server is running on port 4005');
})