const express = require("express");
const app = express();

const homeController = require("./routes/home");

app.use("/home", homeController);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("Server started at port", port);
});
