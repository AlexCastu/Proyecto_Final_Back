const mongoose = require("mongoose");
const user = "root1234";
const passwd = "root1234";
const database = "tiendaParapentes";
const connectionString = `mongodb+srv://${user}:${passwd}@cluster0.o3shqrk.mongodb.net/${database}?retryWrites=true&w=majority`;

mongoose
   .connect(connectionString)
   .then(() => {
      console.log("Dabase connected");
   })
   .catch((err) => {
      console.error(err);
   });
