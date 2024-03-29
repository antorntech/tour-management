const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");

// database connection
mongoose.connect(process.env.DATABASE_GLOBAL).then(()=>{
    console.log('Database already connected!'.green.bold);
})

// server
const port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`App is running on ${port}`.yellow.bold);
})