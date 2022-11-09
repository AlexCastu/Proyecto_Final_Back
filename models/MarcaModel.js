const { model, Schema } = require("mongoose");

//Creamos esquema
const marcaShema = new Schema({
   nombre: String,
   cif: String,
   descripcion: String,
    img:String
});

//Creamos modelo
const Marca = model("marca", marcaShema);

module.exports = Marca;
