const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require('path');
//dotenv configuration
dotenv.config();
//rest object
const app = express();
//midlewares
app.use(cors());
app.use(express.json());


// static file
app.use(express.static(path.join(__dirname, "./portfolio/build")));
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./portfolio/build/index.html"))
});

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoute"));
//port
const PORT = process.env.PORT;
//listen
app.listen(PORT,() => {
    console.log(`Server running On PORT ${PORT}`);
})