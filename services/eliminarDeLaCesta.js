const Paracaidas = require("../models/ParacaidasModel");
const Sillas = require("../models/SillaModel");
const Accesorios = require("../models/AccesoriosModel");
const Parapentes = require("../models/ParapenteModel");

const eliminarDeLaCesta = async (data) => {
   let resultado;

   switch (data.categoria) {
      case "PARAPENTES":
         resultado = await Parapentes.updateOne({ _id: data.id }, { $set: { enLaCesta: false } });
         break;
      case "PARACAIDAS":
         resultado = await Paracaidas.updateOne({ _id: data.id }, { $set: { enLaCesta: false } });
         break;
      case "SILLAS":
         resultado = await Sillas.updateOne({ _id: data.id }, { $set: { enLaCesta: false } });
         break;
      case "ACCESORIOS":
         resultado = await Accesorios.updateOne({ _id: data.id }, { $set: { enLaCesta: false } });
         break;
   }

   return resultado;
};

module.exports = eliminarDeLaCesta;
