const { model, Schema } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
//Creamos esquema
const sillasShema = new Schema({
   modelo: String,
   price: Number,
   img: String,
   enLaCesta: Boolean,
   marca: {
      _id: { type: Schema.Types.ObjectId, ref: "marca" },
      nombre: String,
   },
});
sillasShema.plugin(mongoosePaginate);
//Creamos modelo
const Sillas = model("sillas", sillasShema);

module.exports = Sillas;
