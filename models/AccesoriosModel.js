const { model, Schema } = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
//Creamos esquema
const accesoriosShema = new Schema({
   modelo: String,
   price: Number,
    img:String,
   marca: {
      _id: { type: Schema.Types.ObjectId, ref: "marca" },
      nombre: String,
   },
});
accesoriosShema.plugin(mongoosePaginate);
//Creamos modelo
const Accesorios = model("accesorios", accesoriosShema);

module.exports = Accesorios;
