const Paracaidas = require("../models/ParacaidasModel");
const Sillas = require("../models/SillaModel");
const Accesorios = require("../models/AccesoriosModel");
const Parapentes = require("../models/ParapenteModel");

const getProducto = async (data) => {
   let resultado;

   switch (data.categoria) {
      case "PARAPENTES":
         resultado = await Parapentes.findOne({ _id: data.id }).populate("marca._id").exec();
         break;
      case "PARACAIDAS":
         resultado = await Paracaidas.findOne({ _id: data.id }).populate("marca._id").exec();
         break;
      case "SILLAS":
         resultado = await Sillas.findOne({ _id: data.id }).populate("marca._id").exec();
         break;
      case "ACCESORIOS":
         resultado = await Accesorios.findOne({ _id: data.id }).populate("marca._id").exec();
         break;
   }

   return resultado;
};

module.exports = getProducto;
