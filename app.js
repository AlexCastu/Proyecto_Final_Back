require("./conexionMongo.js");
const express = require("express");
const app = express();
const routerTienda = require("./routes/rutasTienda");
const cors = require("cors");

app.use(cors());

app.use(express.static("public"));
app.use("/", (req, resp, next) => {
   next();
});

app.use("/tienda", routerTienda);

app.use((err, req, resp, next) => {
   console.log("Error:" + err);
   next();
});

app.listen(8080);
console.log("aplicacion en puerto :");
