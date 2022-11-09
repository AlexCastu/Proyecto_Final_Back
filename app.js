require("./conexionMongo.js");
const express = require("express");
const app = express();
const routerTienda = require("./routes/rutasTienda");
const cors = require("cors");
const config = require("./config");
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

app.listen(config.PORT, config.HOST, () => {
   console.log("Servidor conectado en host:" + config.HOST + " y puerto: " + config.PORT);
});
