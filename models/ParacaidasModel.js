const { model, Schema } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
//Creamos esquema
const paracaidasShema = new Schema({
   enLaCesta: Boolean,
   modelo: String,
   price: Number,
   enLaCesta: Boolean,
   img: String,
   marca: {
      _id: { type: Schema.Types.ObjectId, ref: "marca" },
      nombre: String,
   },
});
paracaidasShema.plugin(mongoosePaginate);
//Creamos modelo
const Paracaidas = model("paracaidas", paracaidasShema);

module.exports = Paracaidas;
