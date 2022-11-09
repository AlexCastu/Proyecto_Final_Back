const { model, Schema } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
//Creamos esquema
const parapenteShema = new Schema({
   modelo: String,
   price: Number,
   enLaCesta: Boolean,
   categoria: String,
   img: String,
   marca: {
      _id: { type: Schema.Types.ObjectId, ref: "marca" },
      nombre: String,
   },
});
parapenteShema.plugin(mongoosePaginate);
//Creamos modelo
const Parapentes = model("parapentes", parapenteShema);

module.exports = Parapentes;
