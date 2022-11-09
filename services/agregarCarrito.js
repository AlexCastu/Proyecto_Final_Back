const Paracaidas = require("../models/ParacaidasModel");
const Sillas = require("../models/SillaModel");
const Accesorios = require("../models/AccesoriosModel");
const Parapentes = require("../models/ParapenteModel");

const agregarCarrito = async (data) => {
   let resultado;

   switch (data.categoria) {
      case "PARAPENTES":
         resultado = await Parapentes.updateOne({ _id: data.id }, { $set: { enLaCesta: true } });
         break;
      case "PARACAIDAS":
         resultado = await Paracaidas.updateOne({ _id: data.id }, { $set: { enLaCesta: true } });
         break;
      case "SILLAS":
         resultado = await Sillas.updateOne({ _id: data.id }, { $set: { enLaCesta: true } });
         break;
      case "ACCESORIOS":
         resultado = await Accesorios.updateOne({ _id: data.id }, { $set: { enLaCesta: true } });
         break;
   }

   return resultado;
};

module.exports = agregarCarrito;
